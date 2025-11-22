# Courier Tracking System - User Guide

## How to Use Your Courier Tracking Site

### For Site Administrators

#### Initial Setup
1. **Get your TrackingMore API Key** from https://admin.trackingmore.com/developer/apikey
2. **Set the API key** in your Render dashboard:
   - Go to https://dashboard.render.com
   - Select your `courier-web` service
   - Click on **Environment** tab
   - Add/update `TOKEN` variable with your API key
   - Save changes (service will auto-redeploy)

### For You and Your Clients

#### Accessing the Site
- Open your site at: **https://courie.onrender.com**
- The site works on desktop, tablet, and mobile devices

---

## How to Track a Package

### Step 1: Add a New Package/Shipment

1. **Click the "+ Add" button** (usually at the top of the page)

2. **Fill in the tracking form:**
   - **Tracking Number**: Enter the tracking number provided by the courier (e.g., `1Z999AA10123456784`)
   - **Courier**: Select the shipping company from the dropdown (e.g., UPS, FedEx, DHL, USPS, etc.)
   - **Title/Description**: Give your package a friendly name (e.g., "iPhone from Amazon", "Christmas Gift for Mom")

3. **Click "Add" or "Submit"** to save the tracking

### Step 2: View Your Packages

After adding a package, you'll see:
- **Package title** - Your custom description
- **Tracking number** - The official tracking ID
- **Courier logo** - Visual indicator of the shipping company
- **Current status** - Latest update (e.g., "In Transit", "Out for Delivery", "Delivered")
- **Pickup date** - When the package was first shipped
- **Delivery progress** - Visual tracking timeline

### Step 3: Monitor Updates

The system automatically:
- **Refreshes tracking data** every 30 seconds
- **Shows the latest status** from the courier
- **Displays tracking history** with timestamps
- **Caches data** to reduce API calls and speed up loading

### Step 4: Delete Completed Shipments

1. **Click the delete/trash icon** next to a package
2. Confirm the deletion
3. The package is removed from your tracking list

---

## Sharing Tracking with Clients

### Option 1: Share the Main Dashboard
- Give clients access to **https://courie.onrender.com**
- They can view all tracked packages
- **Note**: This shows ALL packages in the system

### Option 2: Share Individual Tracking Numbers
- Give clients the tracking number and courier name
- They can add it to their own tracking system
- Or they can use the courier's official website

### Option 3: Screenshot/Manual Updates
- Take screenshots of the tracking status
- Send updates via email/messaging
- Best for non-technical clients

---

## Supported Couriers

The system supports **500+ couriers worldwide**, including:

### Popular International Carriers
- **UPS** - United Parcel Service
- **FedEx** - Federal Express
- **DHL** - DHL Express
- **USPS** - United States Postal Service
- **TNT** - TNT Express
- **Aramex** - Aramex International

### Regional Carriers
- **Royal Mail** (UK)
- **Canada Post** (Canada)
- **Australia Post** (Australia)
- **An Post** (Ireland)
- **La Poste** (France)
- **Deutsche Post** (Germany)

### E-commerce Shipping
- **Amazon Logistics**
- **AliExpress Standard Shipping**
- **China Post**
- **SF Express**
- **YunExpress**

**Full list available at**: https://admin.trackingmore.com/carriers

---

## Tips for Best Results

### ✅ DO:
- **Use correct tracking numbers** - Copy/paste to avoid typos
- **Select the right courier** - Wrong courier = no tracking data
- **Add descriptive titles** - Makes it easier to identify packages
- **Check tracking regularly** - Status updates can take time to appear
- **Delete old shipments** - Keep your dashboard clean

### ❌ DON'T:
- **Add fake tracking numbers** - Will show errors
- **Overload the system** - API has rate limits (limited free credits)
- **Share sensitive information** - Don't include personal details in titles
- **Expect instant updates** - Couriers update at their own pace

---

## Troubleshooting

### Package Not Found
- **Wait 24 hours** - New tracking numbers may not be in the system yet
- **Check the tracking number** - Verify it's correct
- **Try a different courier** - Some packages are handled by multiple carriers

### No Updates Showing
- **Check your API credits** - You may have run out (upgrade at TrackingMore)
- **Verify API key** - Ensure the TOKEN is set correctly in Render
- **Check courier website** - Compare with official tracking

### Error Messages
- **"Auth token is invalid"** - Your API key is wrong or expired
- **"Too many requests"** - Wait 10 seconds and try again
- **"Parcel already added"** - This tracking number is already in the system

---

## Managing API Credits

### Free Tier
- **50 credits** free trial
- **7 days** trial period
- Tracking API calls consume credits

### Upgrading
- Visit https://admin.trackingmore.com
- Choose a paid plan for more credits
- **15% discount** for first 3 months (until December 31st)

### Credit Usage
- **Each tracking lookup** = uses credits
- **Automatic updates** = consume credits over time
- **Monitor usage** in TrackingMore dashboard

---

## Best Practices for Business Use

1. **Create a process**:
   - Add package immediately after shipping
   - Include order number in title field
   - Update clients when status changes

2. **Set expectations**:
   - Tell clients tracking may take 24hrs to appear
   - Explain that you're not the courier (delays happen)
   - Provide estimated delivery dates

3. **Keep it organized**:
   - Use consistent naming (e.g., "Order #1234 - Customer Name")
   - Delete delivered packages weekly
   - Take screenshots for records

4. **Backup important data**:
   - Keep shipping receipts
   - Save tracking numbers in your order system
   - Don't rely solely on this tracker

---

## Need Help?

- **TrackingMore API Docs**: https://www.trackingmore.com/docs
- **Render Support**: https://render.com/docs
- **Check server logs**: In Render dashboard → Logs tab

---

## Example Workflow

### Selling a Product Online:

1. **Customer places order** → You ship the package
2. **Get tracking number** from courier (e.g., UPS: `1Z999AA10123456784`)
3. **Open https://courie.onrender.com** → Click "Add"
4. **Fill in form**:
   - Tracking: `1Z999AA10123456784`
   - Courier: `UPS`
   - Title: `Order #5432 - John Smith iPhone`
5. **Click Add** → Package appears in dashboard
6. **Share with customer**: "Your order is being tracked at courie.onrender.com"
7. **Monitor progress** → System auto-updates every 30 seconds
8. **Package delivered** → Delete from dashboard after a few days

---

**That's it! You're now ready to track packages like a pro! 📦✨**
