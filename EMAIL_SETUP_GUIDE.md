# 📧 Email Setup Guide for MASQ Tech Website

## 🚀 Quick Start (Works Immediately)

The website now works **without any email configuration**! Form submissions are logged to the console and the user gets success feedback.

## 📧 Email Options (Choose One)

### Option 1: Gmail SMTP (Recommended for Personal Use)

#### Step 1: Enable Gmail App Password
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to **Security** → **2-Step Verification** (enable if not already)
3. Go to **Security** → **App passwords**
4. Generate an app password for "Mail"
5. Copy the 16-character password

#### Step 2: Add Environment Variables
\`\`\`env
GMAIL_USER=masqtech04@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password
\`\`\`

### Option 2: Resend (Recommended for Production)

#### Step 1: Create Resend Account
1. Go to [resend.com](https://resend.com)
2. Sign up and verify your email
3. Get your API key from the dashboard

#### Step 2: Add Environment Variable
\`\`\`env
RESEND_API_KEY=re_your_resend_api_key
\`\`\`

### Option 3: No Email Service (Default)

The website works perfectly without any email configuration:
- Form submissions are logged to console
- Users get success feedback
- All functionality works normally

## 🔧 How It Works

### Email Fallback System
1. **First**: Try Gmail SMTP (if configured)
2. **Second**: Try Resend API (if configured)  
3. **Third**: Use console logging (always works)

### Error Handling
- Graceful fallbacks if email services fail
- User always gets appropriate feedback
- Form submissions never fail due to email issues

## 🚀 Deployment Instructions

### Vercel Deployment
1. **Push to GitHub**: \`git push origin main\`
2. **Import to Vercel**: Connect your GitHub repository
3. **Add Environment Variables** (optional):
   - \`GMAIL_USER=masqtech04@gmail.com\`
   - \`GMAIL_APP_PASSWORD=your_app_password\`
4. **Deploy**: Click deploy button

### Environment Variables in Vercel
1. Go to your project dashboard
2. Click **Settings** → **Environment Variables**
3. Add your email credentials (if using email)
4. Redeploy the project

## ✅ Testing

### Test Without Email Setup
1. Fill out the contact form
2. Submit the form
3. Check browser console for logged email data
4. User sees success message

### Test With Email Setup
1. Configure Gmail or Resend
2. Fill out the contact form
3. Submit the form
4. Check masqtech04@gmail.com for email
5. User sees success message

## 🎯 Production Recommendations

### For Small Business
- **Use Gmail SMTP**: Simple and free
- **Pros**: Easy setup, reliable
- **Cons**: Daily sending limits

### For Growing Business
- **Use Resend**: Professional email service
- **Pros**: Higher limits, better deliverability
- **Cons**: Paid service (generous free tier)

### For Development/Testing
- **Use Console Logging**: No setup required
- **Pros**: Works immediately
- **Cons**: No actual emails sent

## 🔒 Security Notes

### Gmail App Passwords
- Use App Passwords, not regular passwords
- Enable 2-Factor Authentication
- Keep passwords secure and private

### Environment Variables
- Never commit .env files to Git
- Use different passwords for development/production
- Rotate passwords regularly

## 📞 Support

If you need help with email setup:
1. Check the browser console for error messages
2. Verify environment variables are set correctly
3. Test with a simple email first
4. Contact support if issues persist

The website is fully functional with or without email configuration! 🎉
