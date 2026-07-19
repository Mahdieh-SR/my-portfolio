# Personal Portfolio

A personal portfolio website built with Next.js 15 and React 19, designed around
Material Design 3 with full right-to-left (RTL) support for Persian.

**Live site:** [https://my-portfolio-rosy-iota-80.vercel.app/]

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI Library | React 19 |
| Styling | CSS-in-JS (Styled JSX) |
| Design System | Material Design 3 |
| Typography | Vazirmatn & Yekan |
| Icons | Material Symbols |

---

## Features

- **Material Design 3** foundation with a custom color and typography system
- **Full RTL support** for Persian, with the Vazirmatn typeface
- **Fully responsive** across mobile, tablet, and desktop
- **Content separated from components** — all copy lives in `data/`, so the site
  can be updated without touching a single component
- **Dynamic project pages** generated per project via App Router routing
- **Contact form** with complete client-side field validation
- **SEO optimized** with proper metadata and semantic markup
- **Accessible** markup and keyboard navigation
- **Performance optimized** for fast loads

---

## Screenshots

<!-- Add 2-3 screenshots here. Upload images to the repo, then link them:
![Homepage](./screenshots/home.png)
![Projects page](./screenshots/projects.png)
-->

---

## Architecture

The project is built around a clean separation between content and presentation:

```
my-portfolio/
├── app/              # Pages and routing (App Router)
│   ├── about/
│   ├── resume/
│   ├── projects/     # Includes dynamic [id] routes per project
│   └── contact/
├── components/       # Reusable UI components
├── data/             # All site content, separated from components
│   ├── personal.js
│   ├── resume.js
│   └── projects.js
├── utils/            # Helper functions
└── public/images/    # Static assets
```

Keeping every string and project entry in `data/` means the entire site can be
rewritten or translated without editing any component logic — the approach that
made adding a second language straightforward.

---

## Running Locally

Requires Node.js 18 or higher.

```bash
# 1. Clone the repository
git clone https://github.com/Mahdieh-SR/my-portfolio.git
cd my-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm start
```

---

## About

Built by **Madi** — a full-stack developer working with Next.js, TypeScript,
and PostgreSQL.

[GitHub](https://github.com/Mahdieh-SR) · [Email](mailto:mahdiehsrwork@gmail.com)
