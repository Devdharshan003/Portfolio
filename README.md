# devdharshan.dev

Personal portfolio website for Dev Dharshan L — Java & AI-Focused Software Developer.

Built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Three.js** with a premium glassmorphism design system.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
git clone https://github.com/Devdharshan003/devdharshan.dev.git
cd devdharshan.dev
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## ⚙️ Configuration

### EmailJS Setup (Contact Form)

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create a Service, Template, and get your Public Key
3. Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

4. Fill in your credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

### EmailJS Template Variables
Your template should use these variables:
- `{{from_name}}` — sender's name
- `{{from_email}}` — sender's email
- `{{message}}` — the message body

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles + glassmorphism utilities
│   ├── layout.tsx        # Root layout + SEO metadata
│   ├── page.tsx          # Main page (assembles all sections)
│   ├── not-found.tsx     # Custom 404 page
│   └── sitemap.ts        # Auto-generated sitemap
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Fixed glassmorphic navbar
│   │   ├── SocialStrip.tsx   # Fixed left social links
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ResearchSection.tsx
│   │   ├── CertificationsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── ShaderBackground.tsx  # Three.js fluid shader
│       ├── Loader.tsx            # Glass ring loader
│       ├── ScrollProgress.tsx    # Top scroll bar
│       ├── FadeUp.tsx            # Scroll-triggered animation
│       ├── Toast.tsx             # Success/error notifications
│       └── SectionHeader.tsx
├── hooks/
│   ├── useScrollProgress.ts
│   └── useInView.ts
└── lib/
    ├── data.ts           # All content — edit this to update portfolio
    └── utils.ts          # cn() helper
```

## ✏️ Customizing Content

All portfolio content lives in **`src/lib/data.ts`**. Edit that single file to update:
- Personal info and stats
- Projects
- Research items
- Certifications
- Skills

## 🌐 Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard or:
vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID
vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
```

Or connect your GitHub repo to Vercel for automatic deployments on every push.

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion / CSS |
| 3D Background | Three.js (GLSL shader) |
| Icons | lucide-react |
| Email | EmailJS |
| Deployment | Vercel |

## 📄 License

MIT — feel free to use as inspiration. Please don't copy the content verbatim.
