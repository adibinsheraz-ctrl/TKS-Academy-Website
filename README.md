# TKSA School Website

A modern, responsive website for The Knowledge Science Academy with contact form email integration.

## Email Setup Instructions

To enable email functionality for the contact form, follow these steps:

### 1. Sign up for Resend (Free Email Service)

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (3,000 emails/month included)
3. Verify your email address

### 2. Get Your API Key

1. Log into your Resend dashboard
2. Go to "API Keys" section
3. Create a new API key
4. Copy the API key (starts with `re_`)

### 3. Configure Environment Variables

1. Copy `.env.example` to `.env`
2. Replace `your_resend_api_key_here` with your actual API key:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

### 4. Domain Setup (Optional but Recommended)

For production use:
1. In Resend dashboard, go to "Domains"
2. Add your domain (e.g., `tksa.edu.pk`)
3. Follow DNS setup instructions
4. Update the `from` field in the edge function to use your domain

### 5. Test the Contact Form

1. Fill out the contact form on your website
2. Check that emails are being sent to `adi.binsheraz@gmail.com`
3. Monitor the Resend dashboard for delivery status

## Features

- ✅ Beautiful, responsive design
- ✅ Contact form with email notifications
- ✅ Real-time form validation
- ✅ Professional email templates
- ✅ Mobile-friendly interface
- ✅ Smooth animations and effects

## Email Template Features

- 📧 Professional HTML email design
- 📱 Mobile-responsive email layout
- 🎨 Branded colors and styling
- 📞 Quick action buttons (Call, WhatsApp)
- 📅 Timestamp in Pakistan timezone
- ✅ All form data included

## Support

If you need help with setup, contact the developer or check the Resend documentation at [https://resend.com/docs](https://resend.com/docs).