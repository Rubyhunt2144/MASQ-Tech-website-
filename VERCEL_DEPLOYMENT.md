# 🚀 MASQ Tech - Vercel Deployment Guide

## Quick Deployment Steps

### 1. GitHub Repository Setup
\`\`\`bash
# Initialize git repository (if not already done)
git init
git add .
git commit -m "Initial commit: Complete MASQ Tech website"

# Create GitHub repository and push
git remote add origin https://github.com/yourusername/masq-tech-website.git
git branch -M main
git push -u origin main
\`\`\`

### 2. Vercel Deployment

#### Option A: Deploy via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure project settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: .next
   - **Install Command**: `npm install`

#### Option B: Deploy via Vercel CLI
\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
\`\`\`

### 3. Environment Variables Configuration

In Vercel Dashboard → Settings → Environment Variables, add:

#### Required for Email Functionality:
\`\`\`env
GMAIL_USER=masqtech04@gmail.com
GMAIL_APP_PASSWORD=your_16_character_gmail_app_password
\`\`\`

#### Optional for Database Features:
\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
\`\`\`

#### Production Settings:
\`\`\`env
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NODE_ENV=production
\`\`\`

### 4. Gmail App Password Setup

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to **Security** → **2-Step Verification** (enable if not already)
3. Go to **Security** → **App passwords**
4. Generate an app password for "Mail"
5. Copy the 16-character password
6. Add to Vercel environment variables as `GMAIL_APP_PASSWORD`

### 5. Custom Domain Setup (Optional)

1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed:
   - **A Record**: Point to Vercel's IP
   - **CNAME**: Point www to your-domain.vercel.app

### 6. Performance Optimizations

Vercel automatically provides:
- ✅ **Global CDN**: Fast loading worldwide
- ✅ **Edge Functions**: Server Actions work perfectly
- ✅ **Image Optimization**: Automatic image optimization
- ✅ **Automatic HTTPS**: SSL certificates
- ✅ **Gzip Compression**: Faster page loads

### 7. Monitoring & Analytics

Enable in Vercel Dashboard:
- **Analytics**: Track page views and performance
- **Speed Insights**: Monitor Core Web Vitals
- **Function Logs**: Debug server actions

## Post-Deployment Checklist

### ✅ Functionality Tests:
- [ ] All pages load correctly
- [ ] Contact form sends emails
- [ ] Newsletter signup works
- [ ] Mobile navigation functions
- [ ] Social media links work
- [ ] Service pages accessible
- [ ] Team page displays correctly
- [ ] Blog page loads
- [ ] Careers page functional

### ✅ Performance Tests:
- [ ] Page load speed < 3 seconds
- [ ] Mobile responsiveness
- [ ] Image optimization working
- [ ] Animations smooth
- [ ] SEO meta tags present

### ✅ Email Tests:
- [ ] Contact form emails received at masqtech04@gmail.com
- [ ] Newsletter welcome emails sent
- [ ] Email templates display correctly
- [ ] Form validation working

## Troubleshooting

### Common Issues:

#### Build Errors:
\`\`\`bash
# Check build locally
npm run build

# Fix TypeScript errors
npm run type-check
\`\`\`

#### Email Not Working:
1. Verify Gmail App Password is correct
2. Check environment variables are set
3. Test with fallback email logging

#### Images Not Loading:
1. Check image paths are correct
2. Verify next.config.mjs image domains
3. Use placeholder.svg for missing images

## Success Metrics

Your website is successfully deployed when:
- ✅ All pages accessible via HTTPS
- ✅ Contact forms working
- ✅ Mobile responsive
- ✅ Fast loading (< 3s)
- ✅ SEO optimized
- ✅ Social media integrated
- ✅ Professional appearance

## Support

If you encounter issues:
1. Check Vercel Function Logs
2. Review build logs in Vercel Dashboard
3. Test locally with `npm run dev`
4. Contact Vercel support if needed

Your MASQ Tech website is now live and fully functional! 🎉
