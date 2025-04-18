# MemoTag - AI-Powered Dementia Care Platform

<div align="center">
  <p><i>Enhancing quality of life through cognitive tracking, monitoring, and personalized support</i></p>
</div>

## 📋 Overview

MemoTag is an AI-powered wearable device and platform that transforms the approach to dementia care. The platform provides continuous cognitive monitoring, early warning alerts, caregiver support, and comprehensive data insights for healthcare providers. This repository contains the code for the MemoTag marketing website.

## ✨ Features

### 🎯 Platform Features Showcased

- **Cognitive Tracking**: Continuous monitoring of cognitive patterns to detect subtle changes
- **Early Warning Alerts**: AI-powered anomaly detection for timely intervention
- **Caregiver Support**: Resources, guidance, and community for dementia caregivers
- **Data Insights**: Comprehensive analytics for informed treatment decisions

### 💻 Website Features

- **Modern UI/UX**: Clean design with attention to accessibility and user experience
- **Responsive Layout**: Optimized for all device sizes (mobile, tablet, desktop)
- **Interactive Elements**: Animated components using Framer Motion for engagement
- **Dark/Light Themes**: Automatic theme detection with manual toggle option
- **Contact Form**: Integrated form with Supabase backend for data storage
- **Waitlist Signup**: Allow users to join the waitlist for early access
- **Performance Optimized**: Fast loading and rendering for optimal experience

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)**: React framework with server-side rendering
- **[React 19](https://react.dev/)**: UI library
- **[Tailwind CSS 4](https://tailwindcss.com/)**: Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)**: Animation library
- **[React Intersection Observer](https://github.com/thebuilder/react-intersection-observer)**: Scroll animations

### Backend & Infrastructure
- **[Supabase](https://supabase.com/)**: Backend-as-a-Service for:
  - Contact form submissions
  - Waitlist management
- **Next.js API Routes**: Serverless backend functionality

## 🏗️ Project Structure

```
memotag/
├── app/                  # Main application code
│   ├── api/              # API routes for form handling
│   │   ├── contact/      # Contact form API 
│   │   └── waitlist/     # Waitlist signup API
│   ├── components/       # Reusable UI components
│   ├── sections/         # Main page sections
│   ├── utils/            # Utility functions
│   ├── globals.css       # Global styles
│   ├── layout.js         # Root layout
│   └── page.js           # Home page
├── lib/                  # Shared libraries
│   └── supabase.js       # Supabase client config
├── public/               # Static assets
│   └── images/           # Images and icons
├── supabase/             # Supabase configuration
│   └── migrations/       # Database migrations
├── .env.local            # Environment variables (create from .env.example)
├── SUPABASE_SETUP.md     # Supabase setup instructions
└── package.json          # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18.0.0 or later
- npm or yarn package manager
- [Supabase](https://supabase.com/) account (for backend functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/CrazyPrash007/MemoTag.git
   cd MemoTag
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment setup**
   - Create a `.env.local` file in the root directory based on `.env.example`
   - Fill in your Supabase credentials (see [Supabase Setup](#supabase-setup))

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** to view the website

## 💾 Supabase Setup

The project uses Supabase for backend functionality. Follow these steps to set up:

1. **Create a Supabase account and project** at [supabase.com](https://supabase.com)

2. **Set up the database tables** by running the SQL migrations in `supabase/migrations/` or following instructions in `SUPABASE_SETUP.md`

3. **Configure environment variables** in your `.env.local` file:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

For detailed setup instructions, please refer to [SUPABASE_SETUP.md](SUPABASE_SETUP.md).

## 🔧 Development

### Available Scripts

- `npm run dev` - Run the development server
- `npm run build` - Build the project for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

### Design System

The website uses Tailwind CSS with custom variables defined in `globals.css`:

- Primary colors: Blue shades (`--primary`, `--primary-light`)
- Accent colors: Teal (`--accent`)
- Gray palette: For text, backgrounds, and borders
- Custom animations: Defined in `globals.css`

## 📱 Responsive Design

The website is optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1280px+)

## 🚢 Deployment

### Deploy to Vercel

The easiest way to deploy the application is through [Vercel](https://vercel.com):

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Configure the environment variables
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fmemotag)

### Alternative Deployment Options

- **Netlify**: Similar to Vercel, supports Next.js
- **AWS Amplify**: Good option for AWS users
- **Self-hosted**: Build with `npm run build` and host the output

## 🔄 Continuous Integration

The project supports GitHub Actions for CI/CD workflows. Example workflows:

- Automated testing
- Linting checks
- Preview deployments
- Production deployments

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Next.js Team](https://nextjs.org/) for the incredible framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for animation capabilities
- [Supabase](https://supabase.com/) for the backend solution
- All open-source contributors whose libraries made this project possible

---

<div align="center">
  <p>For questions, contact <a href="mailto:contact@memotag.io">contact@memotag.io</a></p>
</div>
