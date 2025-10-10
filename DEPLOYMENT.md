# Deployment Guide

## Prerequisites

- Node.js 18 or higher
- npm or yarn package manager
- Git for version control

## Environment Setup

**Important:** The project includes `env-template.txt` with example environment variables. You need to create your own `.env.local` file.

1. Create `.env.local` from the template:
```bash
# On Mac/Linux:
cp env-template.txt .env.local

# On Windows PowerShell:
Copy-Item env-template.txt .env.local

# Or manually: Create a new file named .env.local and copy contents from env-template.txt
```

2. Edit `.env.local` and fill in your actual values (API keys, email credentials, etc.)

**Note:** `.env.local` is ignored by Git for security - never commit it to your repository!

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Access the site at `http://localhost:3000`

## Deployment to Vercel (Recommended)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure environment variables:
     * Click "Environment Variables"
     * Copy values from your `.env.local` file (or use `env-template.txt` as reference)
     * Add each variable (e.g., CONTACT_EMAIL, SENDGRID_API_KEY, etc.)
   - Click "Deploy"

3. **Custom Domain:**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., nmglobal.com)
   - Update DNS records as instructed by Vercel

## Deployment to Other Platforms

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add environment variables in Netlify dashboard

### AWS Amplify

1. Connect your Git repository
2. Build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
3. Add environment variables

### Self-Hosted (VPS/Dedicated Server)

1. **Build the application:**
```bash
npm run build
```

2. **Install PM2:**
```bash
npm install -g pm2
```

3. **Start the server:**
```bash
pm2 start npm --name "nm-global" -- start
pm2 save
pm2 startup
```

4. **Configure Nginx (optional):**
```nginx
server {
    listen 80;
    server_name nmglobal.com www.nmglobal.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

5. **Setup SSL with Let's Encrypt:**
```bash
sudo certbot --nginx -d nmglobal.com -d www.nmglobal.com
```

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test contact form submission
- [ ] Check Google Analytics is tracking
- [ ] Verify SEO meta tags (use view source)
- [ ] Test mobile responsiveness
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Check sitemap.xml is accessible
- [ ] Verify robots.txt is working
- [ ] Test all links and navigation
- [ ] Check images load properly
- [ ] Submit sitemap to Google Search Console

## Contact Form Email Setup

### Using AWS SES

1. Install AWS SDK:
```bash
npm install @aws-sdk/client-ses
```

2. Update `app/api/contact/route.ts` with AWS SES implementation

3. Verify email addresses in AWS SES console

### Using SendGrid

1. Install SendGrid SDK:
```bash
npm install @sendgrid/mail
```

2. Update `app/api/contact/route.ts` with SendGrid implementation

3. Get API key from SendGrid dashboard

## Monitoring and Maintenance

### Performance Monitoring
- Set up Vercel Analytics or Google Analytics
- Monitor Core Web Vitals
- Track conversion rates on contact form

### Regular Updates
```bash
# Update dependencies monthly
npm update

# Check for security vulnerabilities
npm audit
npm audit fix
```

### Backup Strategy
- Database: Not applicable (static content)
- Content: Keep in version control (Git)
- Environment variables: Store securely (not in Git)

## Troubleshooting

### Build Fails
```bash
# Clear Next.js cache
rm -rf .next

# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

### Slow Performance
- Optimize images (use next/image)
- Enable caching headers
- Use CDN for static assets
- Minimize JavaScript bundle size

### Contact Form Not Working
- Check environment variables are set
- Verify email service credentials
- Check API route logs
- Test with console.log in route handler

## Support

For deployment assistance:
- Email: dev@nmglobal.com
- Documentation: See README.md
- Next.js Docs: https://nextjs.org/docs

