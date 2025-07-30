# 🚀 Complete Deployment Guide for Beginners

## Step 1: Create GitHub Account & Repository

### 1.1 Create GitHub Account
1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Enter your email, password, and username
4. Verify your email address

### 1.2 Create New Repository
1. Click the "+" icon in top right corner
2. Select "New repository"
3. Name it: `masq-tech-website`
4. Make it Public
5. Click "Create repository"

## Step 2: Download and Setup Code

### 2.1 Download the Code
1. Download all the files from this project
2. Create a new folder on your computer called `masq-tech-website`
3. Copy all the files into this folder

### 2.2 Install Git (if not installed)
1. Go to [git-scm.com](https://git-scm.com)
2. Download Git for your operating system
3. Install with default settings

### 2.3 Install Node.js
1. Go to [nodejs.org](https://nodejs.org)
2. Download the LTS version
3. Install with default settings
4. Open terminal/command prompt
5. Type `node --version` to verify installation

## Step 3: Upload Code to GitHub

### 3.1 Open Terminal/Command Prompt
- **Windows**: Press `Win + R`, type `cmd`, press Enter
- **Mac**: Press `Cmd + Space`, type `terminal`, press Enter

### 3.2 Navigate to Your Project Folder
\`\`\`bash
cd path/to/your/masq-tech-website
\`\`\`

### 3.3 Initialize Git and Upload
\`\`\`bash
# Initialize git
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Complete MASQ Tech website"

# Add your GitHub repository (replace with your username)
git remote add origin https://github.com/YOUR_USERNAME/masq-tech-website.git

# Push to GitHub
git branch -M main
git push -u origin main
\`\`\`

## Step 4: Deploy to Vercel

### 4.1 Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub

### 4.2 Deploy Your Website
1. Click "New Project"
2. Find your `masq-tech-website` repository
3. Click "Import"
4. Leave all settings as default
5. Click "Deploy"
6. Wait 2-3 minutes for deployment to complete

### 4.3 Your Website is Now Live!
- You'll get a URL like: `https://masq-tech-website-abc123.vercel.app`
- Your website is now accessible worldwide!

## Step 5: Setup Email Functionality

### 5.1 Create Gmail App Password
1. Go to [myaccount.google.com](https://myaccount.google.com)
2. Click "Security" in left sidebar
3. Enable "2-Step Verification" if not already enabled
4. Go back to Security
5. Click "App passwords"
6. Select "Mail" and "Other (Custom name)"
7. Type "MASQ Tech Website"
8. Click "Generate"
9. **Copy the 16-character password** (save it somewhere safe)

### 5.2 Add Environment Variables to Vercel
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
- Value: `your-16-character-password-from-step-5.1`

**Variable 3:**
- Name: `NEXT_PUBLIC_SITE_URL`
- Value: `your-vercel-url-from-step-4.3`

6. Click "Save" for each variable

### 5.3 Redeploy Website
1. Go to "Deployments" tab
2. Click the three dots on the latest deployment
3. Click "Redeploy"
4. Wait for redeployment to complete

## Step 6: Test Your Website

### 6.1 Test All Pages
Visit your website and check:
- ✅ Home page loads
- ✅ About Us page works
- ✅ Our Team page shows team members
- ✅ Services pages work
- ✅ Portfolio page loads
- ✅ Blog page works
- ✅ Contact page loads

### 6.2 Test Contact Form
1. Go to Contact page
2. Fill out the form
3. Submit it
4. Check `masqtech04@gmail.com` for the email
5. You should receive a professional email with the form data

### 6.3 Test Mobile Version
1. Open your website on your phone
2. Check that all pages work
3. Test the mobile menu
4. Ensure forms work on mobile

## Step 7: Add Custom Domain (Optional)

### 7.1 Buy a Domain
1. Go to [namecheap.com](https://namecheap.com) or [godaddy.com](https://godaddy.com)
2. Search for your desired domain
3. Purchase the domain

### 7.2 Connect Domain to Vercel
1. In Vercel dashboard, go to Settings → Domains
2. Add your domain name
3. Follow the DNS configuration instructions
4. Wait 24-48 hours for DNS propagation

## Step 8: Maintenance & Updates

### 8.1 Regular Checks
- Test contact form monthly
- Check all pages load correctly
- Monitor website speed
- Update content as needed

### 8.2 Making Changes
1. Edit files on your computer
2. Use git commands to upload changes:
\`\`\`bash
git add .
git commit -m "Updated website content"
git push
\`\`\`
3. Vercel will automatically redeploy

## Troubleshooting

### Common Issues:

**1. Contact form not working:**
- Check Gmail App Password is correct
- Verify environment variables in Vercel
- Check spam folder for emails

**2. Website not loading:**
- Check Vercel deployment status
- Look for build errors in Vercel dashboard

**3. Images not showing:**
- Ensure all image files are uploaded to GitHub
- Check file paths are correct

**4. Mobile menu not working:**
- Clear browser cache
- Test on different devices

## Support

If you need help:
1. Check Vercel deployment logs
2. Test locally with `npm run dev`
3. Contact Vercel support
4. Check GitHub repository for issues

## Success Checklist

Your website is successfully deployed when:
- ✅ All pages load without errors
- ✅ Contact form sends emails to masqtech04@gmail.com
- ✅ Mobile version works perfectly
- ✅ All buttons and links work
- ✅ Website loads fast (under 3 seconds)
- ✅ Social media links work
- ✅ Professional appearance on all devices

**Congratulations! Your MASQ Tech website is now live and fully functional! 🎉**

Your website URL: `https://your-project-name.vercel.app`
