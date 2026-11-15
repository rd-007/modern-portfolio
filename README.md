# 🚀 Modern Developer Portfolio

A sleek, responsive, and interactive personal portfolio web application built with **React 19**, **Vite**, **Tailwind CSS v4**, and **React Router v7**. Features custom cosmic star & meteor animations, dark/light theme switching, dynamic skills categorization, and featured projects showcase.

---

## ✨ Features

- 🌌 **Animated Cosmic Background**: Dynamic starfield and meteor shower background effects tailored to window dimensions.
- 🌓 **Dark & Light Theme Toggle**: Persistent theme switching using `localStorage` and Tailwind CSS dark mode classes.
- 📱 **Fully Responsive Layout**: Mobile-first design with smooth scroll navigation and collapsible overlay menu.
- 🛠️ **Categorized Skills Showcase**: Filterable tech stack sections spanning *Languages*, *Frontend*, *Backend*, and *Tools*.
- 📁 **Project Showcase & Multi-Page Routing**: 
  - Featured projects preview on the homepage.
  - Dedicated `/projects` route listing all software engineering, cybersecurity, and AI projects with repository links and tags.
- ✉️ **Interactive Contact Section**: Embedded message submission form alongside quick links to social profiles, email, phone, and location.

---

## 🛠️ Tech Stack

### **Frontend Framework & Build Tool**
- [React 19](https://react.dev/) — Modern UI library
- [Vite 8](https://vite.dev/) — Ultra-fast frontend tooling and bundler
- [React Router DOM v7](https://reactrouter.com/) — Client-side routing

### **Styling & UI Components**
- [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`) — Utility-first CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) (`fa6`, `fa`) — Icon sets for UI elements and social channels
- [@radix-ui/react-toast](https://www.radix-ui.com/) — Toast notification primitives
- `clsx` & `tailwind-merge` — Conditional CSS utility management

---

## 📂 Project Structure

```text
modern-portfolio/
├── public/                # Static assets (images, project screenshots, icons)
├── src/
│   ├── assets/            # Local asset imports (logos, heroes)
│   ├── components/        # Reusable UI components
│   │   ├── ui/            # Toast and lower-level UI primitives
│   │   ├── AboutSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── StarBackground.jsx
│   │   └── ThemeToggle.jsx
│   ├── hooks/             # Custom React hooks (e.g., use-toast)
│   ├── lib/               # Data files (projects list) and utility functions
│   ├── pages/             # Route pages (Home, AllProjects, NotFound)
│   ├── App.jsx            # Application root with router configuration
│   ├── index.css          # Global styles & Tailwind CSS imports
│   └── main.jsx           # React entry point
├── eslint.config.js       # ESLint flat configuration
├── index.html             # Main HTML page template
├── package.json           # Dependencies and scripts configuration
└── vite.config.js         # Vite configuration & `@` path alias
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher recommended) and **npm** installed on your system.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rd-007/modern-portfolio.git
   cd modern-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## 📜 Available Scripts

In the project directory, you can run:

- **`npm run dev`**: Runs the app in development mode with HMR (Hot Module Replacement).
- **`npm run build`**: Builds the app for production to the `dist` directory.
- **`npm run preview`**: Locally previews the production build output.
- **`npm run lint`**: Runs ESLint across the codebase to catch errors and maintain code quality.

---

## 🌟 Featured Projects Included

- **Smart Task Prioritizer**: Task prioritization & time-blocking platform built with Next.js, TypeScript, Python & Supabase.
- **AI Assistant**: AI-powered assistant built with React, Tailwind CSS & NVIDIA NIM APIs.
- **RAG Bot**: Knowledge assistant leveraging Retrieval-Augmented Generation (FastAPI, Chroma, SQLite, React).
- **Event Source Ledger**: Immutable financial ledger model built in Python.
- **Cyber Security Projects**: Applied threat detection, risk analysis, and security tool prototypes.

---

## 👤 Author

**Rajit Dakhane**
- GitHub: [@rd-007](https://github.com/rd-007)
- LinkedIn: [Rajit Dakhane](https://linkedin.com/in/rajit0311)
- Email: rajitdakhane007@gmail.com

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
