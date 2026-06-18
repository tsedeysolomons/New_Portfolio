# 🎨 Tsedey Solomon - Portfolio Website

> A modern, responsive portfolio website showcasing software development, AI/ML expertise, and embedded systems projects.

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

![Portfolio Preview](https://via.placeholder.com/1200x630/A78BFA/FFFFFF?text=Tsedey+Solomon+Portfolio)

## ✨ Features

### 🎯 Core Features
- **🌓 Dark Mode Toggle** - Persistent theme switching with localStorage
- **📱 Fully Responsive** - Mobile-first design with smooth transitions
- **⚡ Lightning Fast** - Built with Next.js 16 and optimized performance
- **🎭 Smooth Animations** - Framer Motion powered interactions
- **♿ Accessible** - WCAG AAA compliant with semantic HTML
- **🔍 SEO Optimized** - Meta tags and Open Graph support

### 📋 Sections
1. **Hero** - Animated role titles with tech stack showcase
2. **About** - Professional background and experience highlights
3. **Skills** - Interactive categorized skills with proficiency bars
4. **Projects** - Featured projects with live demos and code links
5. **AI Journey** - Timeline of AI/ML learning milestones
6. **Experience** - Training history and certifications
7. **Contact** - Working contact form with validation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or compatible runtime
- npm, pnpm, or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/HabeshaDevs/portfolio-design.git

# Navigate to project directory
cd portfolio-design

# Install dependencies
npm install
# or
pnpm install

# Run development server
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🛠️ Tech Stack

### Framework & Libraries
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first styling
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Beautiful icons

### UI Components
- **[Shadcn UI](https://ui.shadcn.com/)** - Accessible component library
- **[Base UI](https://base-ui.com/)** - Headless UI components
- **[tw-animate-css](https://www.npmjs.com/package/tw-animate-css)** - Additional animations

### Analytics & Monitoring
- **[Vercel Analytics](https://vercel.com/analytics)** - Performance tracking

## 📁 Project Structure

```
portfolio-design/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page composition
│   └── globals.css         # Global styles and theme
├── components/
│   ├── navigation.tsx      # Header with dark mode toggle
│   ├── footer.tsx          # Footer with links
│   ├── sections/           # Page sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── projects.tsx
│   │   ├── ai-journey.tsx
│   │   ├── experience.tsx
│   │   └── contact.tsx
│   └── ui/                 # Reusable UI components
│       └── button.tsx
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
└── package.json
```

## 🎨 Design System

### Color Palette
```css
/* Light Mode */
Primary:   #A78BFA  /* Medium Light Purple */
Secondary: #E9D5FF  /* Light Purple */
Accent:    #0EA5E9  /* Cyan Blue */
Background: #FFFFFF /* White */
Card:      #F8F6FF  /* Very Light Purple */

/* Dark Mode */
Primary:   #A78BFA  /* Medium Light Purple */
Secondary: #312E81  /* Dark Purple */
Accent:    #0EA5E9  /* Cyan Blue */
Background: #0F172A /* Dark Navy */
Card:      #1E293B  /* Slate */
```

### Typography
- **Headings**: Geist Sans
- **Body**: Geist Sans
- **Code**: Geist Mono

## ⚙️ Configuration

### Customization

#### Update Personal Information
Edit these files to add your content:
- `components/sections/hero.tsx` - Name, roles, bio
- `components/sections/about.tsx` - Background story
- `components/sections/skills.tsx` - Your skills
- `components/sections/projects.tsx` - Your projects
- `components/sections/contact.tsx` - Contact details

#### Change Theme Colors
Modify color tokens in `app/globals.css`:
```css
:root {
  --primary: #A78BFA;    /* Change to your brand color */
  --accent: #0EA5E9;     /* Secondary color */
  /* ... other colors */
}
```

### Environment Variables
Create a `.env.local` file for sensitive data:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
# Add email service credentials if using contact form
```

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/HabeshaDevs/portfolio-design)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
```bash
# Build command
npm run build

# Publish directory
.next
```

## 🧪 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Tsedey Solomon**
- GitHub: [@HabeshaDevs](https://github.com/HabeshaDevs)
- Portfolio: [Your Portfolio URL]

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Lucide](https://lucide.dev/)
- Components from [Shadcn UI](https://ui.shadcn.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

## 📸 Screenshots

### Light Mode
![Light Mode Preview](https://via.placeholder.com/800x600/FFFFFF/A78BFA?text=Light+Mode)

### Dark Mode
![Dark Mode Preview](https://via.placeholder.com/800x600/0F172A/A78BFA?text=Dark+Mode)

---

<p align="center">Made with ❤️ by Tsedey Solomon</p>
<p align="center">Building the future through software, AI, and innovation</p>
