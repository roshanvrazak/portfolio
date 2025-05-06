# My Portfolio

[🔗 Live Preview](https://roshanvrazak.co.uk/)

Welcome to my personal portfolio repository! This project showcases my work, skills, and experience through a modern, responsive, and dynamic web application built with Next.js and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **UI Components**: shadcn
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Code Formatting**: Prettier
- **Deployment**: Vercel
- **Linting**: ESLint

## 📁 Project Structure

```sh
.
├── README.md                # Project documentation
├── components.json          # Component metadata
├── eslint.config.mjs        # ESLint configuration
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and scripts
├── postcss.config.mjs       # PostCSS configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── src
│   ├── app
│   │   ├── data.ts          # Data file
│   │   ├── favicon.ico      # Favicon
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   ├── not-found.tsx    # 404 page
│   │   ├── page.tsx         # Home page
│   │   ├── projects
│   │   │   └── [slug]
│   │   │       ├── layout.tsx
│   │   │       └── page.tsx
│   │   └── sitemap.ts       # Sitemap
│   ├── assets               # Static assets
│   ├── components           # Reusable UI components
│   │   ├── navbar           # Navbar components
│   │   ├── sections         # Different sections (About, Projects, etc.)
│   │   └── ui               # UI components (e.g., buttons)
│   └── lib                  # Utility functions
```

## 🌟 Features

- **Dynamic Project Pages**: Uses Next.js dynamic routing for individual project pages.
- **Responsive Design**: Optimized for all screen sizes using Tailwind CSS.
- **Smooth Animations**: Framer Motion provides fluid animations for a better user experience.
- **Modular Components**: Organized UI components with shadcn for better maintainability.
- **SEO Optimized**: Implements best practices for SEO and performance.

## 📦 Installation & Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/roshanvrazak/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```sh
   yarn
   ```

3. Run the development server:

   ```sh
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📌 Deployment

This portfolio can be easily deployed using **Vercel**.

To deploy on Vercel:

1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Run:
   ```sh
   vercel
   ```
3. Follow the CLI instructions to deploy!

---

Feel free to reach out if you have any questions or suggestions. 🚀
