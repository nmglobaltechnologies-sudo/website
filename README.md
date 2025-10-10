# NM Global Technologies Website

A modern, professional corporate website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI across all devices
- **SEO Optimized**: Meta tags, structured data, sitemap, and robots.txt
- **Performance**: Optimized images, lazy loading, and fast page loads
- **Animations**: Smooth transitions and micro-interactions with Framer Motion
- **Accessibility**: WCAG AA compliant with proper ARIA labels
- **Contact Forms**: Integrated with React Hook Form for validation
- **Blog/Resources**: Dynamic blog system with category filtering

## 📋 Prerequisites

- Node.js 18+ and npm
- Git

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nm-global
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
nm-global/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── contact/             # Contact page with form
│   ├── industries/          # Industries page
│   ├── resources/           # Blog/resources listing
│   │   └── [slug]/         # Individual blog posts
│   ├── services/            # Services pages
│   │   ├── erp-solutions/
│   │   ├── cloud-services/
│   │   └── managed-it-services/
│   ├── privacy-policy/      # Privacy policy
│   ├── terms/               # Terms of use
│   ├── api/                 # API routes
│   │   └── contact/        # Contact form API
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # Reusable React components
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Site footer
│   ├── Button.tsx           # Button component
│   ├── Card.tsx             # Card components
│   ├── Section.tsx          # Section wrapper
│   ├── AnimatedCounter.tsx  # Animated number counter
│   ├── TestimonialCard.tsx  # Testimonial display
│   └── CTABanner.tsx        # Call-to-action banner
├── content/                 # Content data files
│   ├── services.json        # Services information
│   ├── testimonials.json    # Client testimonials
│   ├── stats.json           # Company statistics
│   ├── team.json            # Team member info
│   └── blog-posts.json      # Blog post content
├── public/                  # Static assets
│   └── images/             # Image files
├── docs/                    # Documentation
│   └── prd.md              # Product Requirements Document
└── package.json             # Dependencies and scripts
```

## 🎨 Design System

### Brand Colors
- Primary Blue: `#274C77`
- Accent Blue: `#6096BA`
- Sky Blue: `#A3CEF1`
- Neutral Gray: `#8B8C89`

### Typography
- Headings: Poppins (700 weight)
- Body: Open Sans (400, 600 weight)
- Line height: 1.6

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy!

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- AWS Amplify
- Netlify
- Azure Static Web Apps
- Self-hosted with Node.js

## 📧 Contact Form Setup

To enable the contact form, configure one of the following email services:

### Option 1: AWS SES
```env
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
CONTACT_EMAIL=info@nmglobal.com
```

### Option 2: SendGrid
```env
SENDGRID_API_KEY=your_api_key
CONTACT_EMAIL=info@nmglobal.com
```

### Option 3: SMTP
```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_user
SMTP_PASS=your_password
CONTACT_EMAIL=info@nmglobal.com
```

## 📊 Analytics

Add Google Analytics by setting:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 🔒 Security

- HTTPS enforced via hosting platform
- Security headers configured in `next.config.ts`
- CORS protection
- XSS protection
- Content Security Policy ready

## ♿ Accessibility

- WCAG AA compliant
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader friendly
- Color contrast ratios > 4.5:1

## 🎯 Performance Targets

- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.0s
- Cumulative Layout Shift: < 0.1

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

Copyright © 2025 NM Global Technologies. All rights reserved.

## 📞 Support

For questions or support:
- Email: info@nmglobal.com
- Phone: +1 (234) 567-8900
- Website: [nmglobal.com](https://nmglobal.com)
