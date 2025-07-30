# 🚀 Complete Deployment Instructions for MASQ Tech Website

## 📋 What You'll Need
- Computer with internet connection
- Gmail account (masqtech04@gmail.com)
- 30 minutes of your time

## Step 1: Install Required Software

### 1.1 Install Git
1. Go to [git-scm.com](https://git-scm.com)
2. Download Git for your operating system
3. Install with default settings
4. Open terminal/command prompt and type: `git --version` to verify

### 1.2 Install Node.js
1. Go to [nodejs.org](https://nodejs.org)
2. Download the LTS version (Long Term Support)
3. Install with default settings
4. Open terminal/command prompt and type: `node --version` to verify

### 1.3 Install VS Code
1. Go to [code.visualstudio.com](https://code.visualstudio.com)
2. Download VS Code for your operating system
3. Install with default settings

## Step 2: Setup GitHub Account

### 2.1 Create GitHub Account
1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Enter your email, password, and username
4. Verify your email address

### 2.2 Create Repository
1. Click the "+" icon in top right corner
2. Select "New repository"
3. Name it: `masq-tech-website`
4. Make it **Public**
5. Check "Add a README file"
6. Click "Create repository"

## Step 3: Setup Project in VS Code

### 3.1 Create Project Folder
1. Create a new folder on your computer called `masq-tech-website`
2. Copy all the project files into this folder

### 3.2 Open in VS Code
1. Open VS Code
2. Click "File" → "Open Folder"
3. Select your `masq-tech-website` folder
4. Click "Select Folder"

### 3.3 Install Dependencies
1. In VS Code, open terminal: `Terminal` → `New Terminal`
2. Type: `npm install`
3. Press Enter and wait for installation to complete

### 3.4 Test Locally
1. In terminal, type: `npm run dev`
2. Open browser and go to: `http://localhost:3000`
3. Your website should load locally
4. Test all pages and links
5. Press `Ctrl + C` in terminal to stop

## Step 4: Upload to GitHub

### 4.1 Connect to GitHub
In VS Code terminal, run these commands one by one:

\`\`\`bash
git init
git add .
git commit -m "Initial commit: MASQ Tech website"
git remote add origin https://github.com/YOUR_USERNAME/masq-tech-website.git
git branch -M main
git push -u origin main
\`\`\`

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 5: Deploy to Vercel

### 5.1 Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub

### 5.2 Deploy Website
1. Click "New Project"
2. Find your `masq-tech-website` repository
3. Click "Import"
4. Leave all settings as default
5. Click "Deploy"
6. Wait 2-3 minutes for deployment

### 5.3 Get Your Website URL
- You'll get a URL like: `https://masq-tech-website-abc123.vercel.app`
- Your website is now live worldwide!

## Step 6: Setup Email Functionality

### 6.1 Create Gmail App Password
1. Go to [myaccount.google.com](https://myaccount.google.com)
2. Click "Security" in left sidebar
3. Enable "2-Step Verification" if not already enabled
4. Go back to Security
5. Click "App passwords"
6. Select "Mail" and "Other (Custom name)"
7. Type "MASQ Tech Website"
8. Click "Generate"
9. **Copy the 16-character password** (save it somewhere safe)

### 6.2 Add Environment Variables
1. Go to your Vercel dashboard
2. Click on your project
3. Click "Settings" tab
4. Click "Environment Variables" in sidebar
5. Add these variables:

**Variable 1:**
- Name: `GMAIL_USER`
- Value: `masqtech04@gmail.com`

**Variable 2:**
- Name: `GMAIL_APP_PASSWORD`
- Value: `your-16-character-password-from-step-6.1`

**Variable 3:**
- Name: `NEXT_PUBLIC_SITE_URL`
- Value: `your-vercel-url-from-step-5.3`

6. Click "Save" for each variable

### 6.3 Redeploy
1. Go to "Deployments" tab
2. Click the three dots on latest deployment
3. Click "Redeploy"
4. Wait for redeployment to complete

## Step 7: Test Everything

### 7.1 Test Website Features
Visit your live website and check:
- ✅ All pages load correctly
- ✅ Service pages show detailed information
- ✅ Contact form works
- ✅ "Book Consultation" opens Google Form
- ✅ "Send Resume" opens Google Form
- ✅ Phone numbers open dialer when clicked
- ✅ Email addresses open email app when clicked
- ✅ Mobile menu works
- ✅ All animations work

### 7.2 Test Contact Form
1. Fill out contact form
2. Submit it
3. Check `masqtech04@gmail.com` for email
4. Should receive professional email with form data

### 7.3 Test Google Forms
1. Click "Book Consultation" - should open Google Form
2. Click "Send Us Your Resume" - should open Google Form
3. Both should open in new tabs

## Step 8: Making Updates

### 8.1 Edit Files
1. Open VS Code with your project
2. Make changes to any file
3. Save the file (`Ctrl + S`)

### 8.2 Upload Changes
In VS Code terminal:
\`\`\`bash
git add .
git commit -m "Updated website"
git push
\`\`\`

### 8.3 Automatic Deployment
- Vercel automatically redeploys when you push to GitHub
- Changes are live in 2-3 minutes

## 🎯 Success Checklist

Your website is successfully deployed when:
- ✅ Website loads at your Vercel URL
- ✅ All 7 service pages work (E-Commerce, Web Development, Data Analyst, Android Developer, Digital Marketing, UI/UX Designer, Database Administrator)
- ✅ Contact form sends emails to masqtech04@gmail.com
- ✅ Google Forms open when clicking buttons
- ✅ Phone and email links work
- ✅ Mobile version works perfectly
- ✅ All team member information is correct
- ✅ Statistics show correct numbers (50+ projects, 2+ years, 15+ clients)
- ✅ All content is updated with 2025 information

## 🔧 Troubleshooting

**Problem: Service pages show 404 error**
- Solution: Make sure all service page files are uploaded to GitHub

**Problem: Contact form not working**
- Solution: Check Gmail App Password is correct in Vercel environment variables

**Problem: Google Forms not opening**
- Solution: Check if Google Form URL is correct and form is public

**Problem: Phone/email links not working**
- Solution: Test on different devices, some browsers handle these differently

## 📞 Support

If you need help:
1. Check Vercel deployment logs for errors
2. Test locally with `npm run dev`
3. Verify all files are uploaded to GitHub
4. Contact Vercel support if needed

## 🎉 Congratulations!

Your MASQ Tech website is now live with:
- ✅ 7 detailed service pages
- ✅ Working contact forms
- ✅ Google Form integration
- ✅ Professional design
- ✅ Mobile responsive
- ✅ Fast loading
- ✅ SEO optimized

**Your website URL:** `https://your-project-name.vercel.app`

Share this URL with your clients and start growing your business online!
