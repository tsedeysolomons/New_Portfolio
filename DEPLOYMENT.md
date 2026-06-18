# Portfolio Deployment Guide

## Quick Start

### Local Development
```bash
pnpm install
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000)

## Deployment to Vercel

### Option 1: GitHub Integration (Recommended)
1. Push to GitHub
2. Connect repo to Vercel dashboard
3. Automatic deployment on push

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 3: Direct ZIP Upload
1. Download project as ZIP
2. Use shadcn CLI: `npx shadcn-cli init`
3. Deploy using `vercel deploy`

## Pre-Deployment Checklist

### Content Updates
- [ ] Update name and bio in hero section
- [ ] Add real social media links
- [ ] Update project descriptions
- [ ] Change contact email
- [ ] Add your actual skills and certifications
- [ ] Update profile picture (replace TS placeholder)

### Links to Update
```
components/sections/hero.tsx
├── Social links (line ~90)

components/footer.tsx
├── Social links (line ~24)
└── Quick links (line ~30)

components/sections/contact.tsx
├── Email address
├── Phone number
├── Location
└── Social links (line ~55)

components/sections/projects.tsx
├── Project links
└── GitHub links
```

### SEO Optimization
- ✅ Meta tags configured in `app/layout.tsx`
- ✅ Mobile viewport configured
- ✅ Open Graph tags included
- ✅ Theme color set to purple (#A78BFA)

## Customization Tips

### Change Primary Color
Edit `app/globals.css`:
```css
--primary: #A78BFA;  /* Change this to your brand color */
```

### Add Custom Font
In `app/layout.tsx`:
```typescript
import { YourFont } from 'next/font/google';
const yourFont = YourFont({ subsets: ['latin'] });
```

### Add Animations
The portfolio uses Framer Motion. To add more animations, edit component files and wrap elements:
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## Environment Variables (Optional)

Create `.env.local` if using external services:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
CONTACT_EMAIL=your@email.com
```

## Performance Optimization

### Already Optimized
- ✅ Image optimization
- ✅ Code splitting
- ✅ CSS minification
- ✅ Font loading optimization
- ✅ Responsive images

### Further Optimization
1. Add image compression tools
2. Use CDN for static assets
3. Enable analytics (Google Analytics, Vercel Analytics)
4. Lazy load components below fold

## Analytics & Monitoring

### Vercel Analytics (Free Tier)
Automatically enabled in preview and production

### Google Analytics
Add to `app/layout.tsx`:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout() {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="GA_ID" />
      </body>
    </html>
  )
}
```

## Domain Setup

### Custom Domain on Vercel
1. Go to Vercel dashboard
2. Project Settings → Domains
3. Add your domain
4. Follow DNS setup instructions

### Common Domain Providers
- Vercel Domains (recommended)
- Namecheap
- GoDaddy
- Google Domains

## SSL Certificate
✅ Automatically included with Vercel deployment

## Troubleshooting

### Port Already in Use
```bash
lsof -i :3000
kill -9 <PID>
```

### Build Fails
```bash
pnpm install
pnpm build
```

### Styles Not Loading
Clear cache and rebuild:
```bash
pnpm clean
pnpm install
pnpm build
```

## Next Steps

1. **Content**: Personalize all text and links
2. **Images**: Add actual portfolio images
3. **SEO**: Update meta descriptions
4. **Analytics**: Add tracking tools
5. **Testing**: Test on various devices
6. **Deploy**: Push to production

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)

## Performance Metrics Target

- ✅ Lighthouse Score: 90+
- ✅ Core Web Vitals: Green
- ✅ FCP: < 1.5s
- ✅ LCP: < 2.5s
- ✅ CLS: < 0.1

---

**Ready to deploy! Your premium portfolio is live and waiting.**
