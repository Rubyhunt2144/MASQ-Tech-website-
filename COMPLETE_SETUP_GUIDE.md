# 🚀 Complete Setup Guide for MASQ Tech Website

## 📋 Prerequisites

Before starting, make sure you have:
- A computer with internet connection
- Gmail account (masqtech04@gmail.com)
- Basic understanding of following instructions

## Step 1: Install Required Software

### 1.1 Install Git
1. Go to [git-scm.com](https://git-scm.com)
2. Download Git for your operating system
3. Install with default settings
4. Open terminal/command prompt and verify: `git --version`

### 1.2 Install Node.js
1. Go to [nodejs.org](https://nodejs.org)
2. Download the LTS version (recommended)
3. Install with default settings
4. Open terminal/command prompt and verify: `node --version` and `npm --version`

### 1.3 Install VS Code
1. Go to [code.visualstudio.com](https://code.visualstudio.com)
2. Download VS Code for your operating system
3. Install with default settings

## Step 2: Setup GitHub Account & Repository

### 2.1 Create GitHub Account
1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Enter your email, password, and username
4. Verify your email address

### 2.2 Create New Repository
1. Click the "+" icon in top right corner
2. Select "New repository"
3. Name it: `masq-tech-website`
4. Make it **Public**
5. Check "Add a README file"
6. Click "Create repository"

## Step 3: Download and Setup Project Files

### 3.1 Create Project Folder
1. Create a new folder on your computer called `masq-tech-website`
2. Copy all the project files into this folder

### 3.2 Open in VS Code
1. Open VS Code
2. Click "File" → "Open Folder"
3. Select your `masq-tech-website` folder
4. Click "Select Folder"

### 3.3 Install Dependencies
1. In VS Code, open the terminal: `Terminal` → `New Terminal`
2. Run: `npm install`
3. Wait for installation to complete

## Step 4: Upload Code to GitHub

### 4.1 Initialize Git Repository
In VS Code terminal, run these commands one by one:

\`\`\`bash
# Initialize git
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: MASQ Tech website"

# Add your GitHub repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/masq-tech-website.git

# Push to GitHub
git branch -M main
git push -u origin main
\`\`\`

## Step 5: Test Locally

### 5.1 Run Development Server
1. In VS Code terminal, run: `npm run dev`
2. Open your browser and go to: `http://localhost:3000`
3. Your website should load locally
4. Test all pages and functionality

### 5.2 Stop Development Server
- Press `Ctrl + C` in the terminal to stop the server

## Step 6: Deploy to Vercel

### 6.1 Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub

### 6.2 Deploy Your Website
1. Click "New Project"
2. Find your `masq-tech-website` repository
3. Click "Import"
4. Leave all settings as default
5. Click "Deploy"
6. Wait 2-3 minutes for deployment to complete

### 6.3 Your Website is Now Live!
- You'll get a URL like: `https://masq-tech-website-abc123.vercel.app`
- Your website is now accessible worldwide!

## Step 7: Setup Email Functionality

### 7.1 Create Gmail App Password
1. Go to [myaccount.google.com](https://myaccount.google.com)
2. Click "Security" in left sidebar
3. Enable "2-Step Verification" if not already enabled
4. Go back to Security
5. Click "App passwords"
6. Select "Mail" and "Other (Custom name)"
7. Type "MASQ Tech Website"
8. Click "Generate"
9. **Copy the 16-character password** (save it somewhere safe)

### 7.2 Add Environment Variables to Vercel
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
- Value: `your-16-character-password-from-step-7.1`

**Variable 3:**
- Name: `NEXT_PUBLIC_SITE_URL`
- Value: `your-vercel-url-from-step-6.3`

6. Click "Save" for each variable

### 7.3 Redeploy Website
1. Go to "Deployments" tab
2. Click the three dots on the latest deployment
3. Click "Redeploy"
4. Wait for redeployment to complete

## Step 8: Test Your Website

### 8.1 Test All Pages
Visit your website and check:
- ✅ Home page loads
- ✅ About Us page works
- ✅ Our Team page shows team members
- ✅ Services pages work
- ✅ Portfolio page loads
- ✅ Blog page works
- ✅ Contact page loads

### 8.2 Test Contact Form
1. Go to Contact page
2. Fill out the form
3. Submit it
4. Check `masqtech04@gmail.com` for the email
5. You should receive a professional email with the form data

### 8.3 Test Google Forms
1. Click "Book Consultation" button
2. Should open Google Form in new tab
3. Click "Send Us Your Resume" button
4. Should open Google Form in new tab

### 8.4 Test Phone and Email Links
1. Click on phone numbers - should open dialer
2. Click on email address - should open email app

## Step 9: Making Changes

### 9.1 Edit Files in VS Code
1. Open VS Code with your project
2. Make changes to any file
3. Save the file (`Ctrl + S`)

### 9.2 Upload Changes to GitHub
In VS Code terminal, run:
\`\`\`bash
git add .
git commit -m "Updated website content"
git push
\`\`\`

### 9.3 Automatic Deployment
- Vercel will automatically redeploy your website
- Changes will be live in 2-3 minutes

## Step 10: Add Custom Domain (Optional)

### 10.1 Buy a Domain
1. Go to [namecheap.com](https://namecheap.com) or [godaddy.com](https://godaddy.com)
2. Search for your desired domain
3. Purchase the domain

### 10.2 Connect Domain to Vercel
1. In Vercel dashboard, go to Settings → Domains
2. Add your domain name
3. Follow the DNS configuration instructions
4. Wait 24-48 hours for DNS propagation

## 🎯 Success Checklist

Your website is successfully deployed when:
- ✅ All pages load without errors
- ✅ Contact form sends emails to masqtech04@gmail.com
- ✅ Google Forms open when clicking appointment/resume buttons
- ✅ Phone numbers open dialer when clicked
- ✅ Email addresses open email app when clicked
- ✅ Mobile version works perfectly
- ✅ All buttons and links work
- ✅ Website loads fast (under 3 seconds)
- ✅ Team member photos display correctly
- ✅ All updated content shows correctly

## 🔧 Troubleshooting

### Common Issues:

**1. Contact form not working:**
- Check Gmail App Password is correct
- Verify environment variables in Vercel
- Check spam folder for emails

**2. Google Forms not opening:**
- Check if the form URL is correct
- Make sure form is set to "Anyone can respond"

**3. Website not loading:**
- Check Vercel deployment status
- Look for build errors in Vercel dashboard

**4. Images not showing:**
- Ensure all image files are uploaded to GitHub
- Check file paths are correct

**5. Phone/email links not working:**
- Check the `href` attributes in the code
- Test on different devices

## 📞 Support

If you need help:
1. Check Vercel deployment logs
2. Test locally with `npm run dev`
3. Check GitHub repository for issues
4. Contact Vercel support if needed

## 🎉 Congratulations!

Your MASQ Tech website is now live and fully functional!

**Your website URL:** `https://your-project-name.vercel.app`

All features are working:
- ✅ Professional design
- ✅ Working contact forms
- ✅ Google Form integration
- ✅ Clickable phone and email links
- ✅ Updated team information
- ✅ New services
- ✅ Mobile responsive
- ✅ Fast loading
- ✅ SEO optimized

**Next Steps:**
1. Share your website URL with clients
2. Monitor form submissions
3. Update content as needed
4. Add more portfolio projects
5. Create blog posts
