const express = require('express');
const api = express.Router();
const {logger, get, post, del} = require('../lib');

const AUTH = { 'Tracking-Api-Key': process.env.TOKEN };
const msgMap = {
	401: 'Auth token is invalid.',
	409: 'Parcel is already added.',
	429: 'Too many requests. Please wait 10 seconds and try again.',
	500: 'Internal server error.'
};

function catchError (e, res) {
	const code = e && e.response && e.response.status || 500;
	let msg = msgMap[code] || (e.response && e.response.statusText) || e.message || 'Internal server error';
	
	// Log the full error for debugging
	if (e.response && e.response.data) {
		logger.error('API Error Response:', JSON.stringify(e.response.data, null, 2));
	}
	
	if (e.response && e.response.data && e.response.data.meta && e.response.data.meta.message) {
		const metaMsg = e.response.data.meta.message;
		if (Array.isArray(metaMsg) && metaMsg.length > 0) {
			msg += `: ${ metaMsg.join('. ') }`;
		} else if (typeof metaMsg === 'string') {
			msg += `: ${ metaMsg }`;
		}
	}
	logger.error(msg);
	res.status(code).json({ code, msg });
}


// get list of couriers (cache 1 day)
api.get('/courier', (req, res) => {
	get('/carriers/detect', AUTH, 86400)
		.then(({code, data}) => res.status(code).json(data))
		.catch(e => catchError(e, res));
});


// get list of parcels (cache 30 seconds)
api.get('/trackings', (req, res) => {
	get('/trackings?pageId=1&limit=100', AUTH, 30)
		.then(({code, data}) => res.status(code).json(data))
		.catch(e => catchError(e, res));
});


// add parcel to tracking list
api.post('/trackings', (req, res) => {
	const params = {
		tracking_number: req.body.tracking_number,
		slug: req.body.courier,
		custom_fields: { title: req.body.title }
	};
	post('/trackings', params, AUTH)
		.then(({code, data}) => res.status(code).json(data))
		.catch(e => catchError(e, res));
});


// delete parcel from tracking list
api.delete('/trackings/:id', (req, res) => {
	del('/trackings/' + req.params.id, AUTH)
		.then(({code}) => res.status(code).json({result: 'success'}))
		.catch(e => catchError(e, res));
});



api.get('/', (req, res) => res.send('Hello from API!'));

module.exports = api;
