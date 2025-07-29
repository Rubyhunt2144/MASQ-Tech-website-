# MASQ Tech Website

A modern, fully functional website for MASQ Tech with database integration, working forms, and responsive design.

## Features

- ✅ Fully responsive design
- ✅ Working contact forms with database storage
- ✅ Newsletter subscription functionality
- ✅ Modern UI with smooth animations
- ✅ Mobile-friendly navigation
- ✅ SEO optimized
- ✅ Database integration with Supabase
- ✅ Server Actions for form handling
- ✅ TypeScript support

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Setup Instructions

### 1. Clone and Install

\`\`\`bash
git clone <your-repo-url>
cd masq-tech-website
npm install
\`\`\`

### 2. Database Setup (Supabase)

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Go to the SQL Editor and run the script from `scripts/create-tables.sql`
3. Get your project URL and anon key from Settings > API

### 3. Environment Variables

Create a `.env.local` file:

\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
\`\`\`

### 4. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Why Vercel?

- **Seamless Next.js integration**: Built by the Next.js team
- **Automatic deployments**: Every push to main branch deploys automatically
- **Edge functions**: Server Actions work perfectly
- **Global CDN**: Fast loading worldwide
- **Free tier**: Generous limits for most projects
- **Environment variables**: Easy to manage secrets
- **Custom domains**: Easy to add your own domain

## Database Schema

### Contacts Table
- `id`: UUID (Primary Key)
- `created_at`: Timestamp
- `first_name`: Text (Required)
- `last_name`: Text (Required)
- `email`: Text (Required)
- `company`: Text (Optional)
- `message`: Text (Required)
- `status`: Enum ('new', 'contacted', 'closed')

### Newsletter Table
- `id`: UUID (Primary Key)
- `created_at`: Timestamp
- `email`: Text (Unique, Required)
- `subscribed`: Boolean

## Features Breakdown

### Working Contact Form
- Real-time validation
- Database storage
- Success/error messaging
- Loading states
- Form reset after submission

### Newsletter Signup
- Email validation
- Duplicate prevention
- Success feedback
- Responsive design

### Mobile Navigation
- Hamburger menu
- Smooth animations
- Touch-friendly
- Accessible

### Color Theme
- **Primary**: Cyan (#06B6D4) to Green (#22C55E) gradients
- **Accent**: Purple, Blue variations
- **Neutral**: Gray scale for text and backgrounds
- **Interactive**: Hover effects with color transitions

## Customization

### Colors
Update the gradient colors in `tailwind.config.ts` and throughout the components to match your brand.

### Content
- Update company information in the main page component
- Modify services in the services section
- Update contact information
- Add your actual portfolio projects

### Database
- Add more fields to forms as needed
- Create additional tables for blog, testimonials, etc.
- Set up Row Level Security (RLS) in Supabase for production

## Performance Optimizations

- Image optimization with Next.js Image component
- Lazy loading for sections
- Optimized fonts
- Minimal JavaScript bundles
- Server-side rendering

## SEO Features

- Meta tags optimization
- Structured data
- Semantic HTML
- Alt text for images
- Fast loading times
