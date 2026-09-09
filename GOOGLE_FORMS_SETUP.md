<!-- ====================================
     SETUP GUIDE: Google Forms Integration
     ==================================== -->

# 🚀 Google Forms Integration Setup Guide

This portfolio uses Google Forms to capture contact form submissions. Follow these steps to connect your form.

## Step 1: Get Your Google Form Entry IDs

1. Open your Google Form (https://forms.gle/YonovHEcEKCuxnP96)
2. Click the three-dot menu → **"Get pre-filled link"**
3. Add sample responses to each field and copy the URL
4. Paste the URL in a text editor and look for the pattern: `entry.XXXXXXXXXX`

**Example URL:**
```
https://docs.google.com/forms/d/e/1FAIpQLSeFqY7QwXzY8NyZ-JkL5p9R8tUvW2X3Y4Z5A6B7C8D9E0F1G2/viewform?entry.12345678=test_name&entry.87654321=test@email.com&entry.11111111=1234567890&entry.22222222=test_subject&entry.33333333=test_message
```

**Extract these Entry IDs:**
- `Name` field → `entry.12345678`
- `Email` field → `entry.87654321`
- `Phone` field → `entry.11111111`
- `Subject` field → `entry.22222222`
- `Message` field → `entry.33333333`

## Step 2: Get Your Form Response URL

1. In Google Forms, click **Send** button
2. Copy the form link (shortened or full URL)
3. Convert shortened URL (if applicable) to full URL:
   - Open the shortened link in browser
   - Copy the full URL from the address bar
   - It should look like: `https://docs.google.com/forms/d/e/1FAIpQLSe...`

## Step 3: Update Your Portfolio Code

Open `site/assets/js/script.js` and locate this section (around line 20-30):

```javascript
const GOOGLE_FORMS_CONFIG = {
    url: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID_HERE/formResponse',
    fields: {
        name: 'entry.12345678',
        email: 'entry.87654321',
        phone: 'entry.11111111',
        subject: 'entry.22222222',
        message: 'entry.33333333'
    }
};
```

Replace with your actual values:
- `YOUR_FORM_ID_HERE` → Your form's unique ID from the URL
- `entry.XXXXXXXXXX` → Your extracted entry IDs from Step 1

### Example:
```javascript
const GOOGLE_FORMS_CONFIG = {
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSeFqY7QwXzY8NyZ-JkL5p9R8tUvW2X3Y4Z5A6B7C8D9E0F1G2/formResponse',
    fields: {
        name: 'entry.1234567890',
        email: 'entry.0987654321',
        phone: 'entry.5555555555',
        subject: 'entry.6666666666',
        message: 'entry.7777777777'
    }
};
```

## Step 4: Test the Form

1. Save your changes
2. Deploy to GitHub Pages or test locally
3. Fill out the contact form
4. Check your Google Form responses to confirm submissions are being logged

## Troubleshooting

### Submissions not appearing in Google Form?

**Issue 1: Wrong Entry IDs**
- Double-check each entry ID matches the correct field
- Use the pre-filled link method to verify IDs

**Issue 2: URL mismatch**
- Ensure the form URL matches exactly (including `/formResponse`)
- Check for typos in the form ID

**Issue 3: CORS Issues**
- Google Forms blocks CORS, which is why we use `mode: 'no-cors'`
- This is normal! The form still submits even though the browser can't read the response
- Check the Google Form responses tab to confirm

**Issue 4: Testing in file:// protocol**
- Some browsers restrict form submissions in `file://` protocol
- Use a local server instead: `python3 -m http.server 8000`

### Still not working?

1. Open browser DevTools (F12)
2. Go to Console tab
3. Check for any error messages
4. Verify the form URL and entry IDs in the Network tab

---

## 📋 Additional Resources

- [Google Forms API Documentation](https://developers.google.com/forms/api)
- [Pre-filled Forms Guide](https://support.google.com/docs/answer/160122)
- [Testing Forms Locally](https://www.npmjs.com/package/http-server)

## 🎉 That's It!

Your portfolio is now connected to Google Forms. Every submission will be automatically logged in your form responses sheet.
