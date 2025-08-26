# Thomas Cani — Portfolio Hub

Clean, professional portfolio built with **Vite + React + Bootstrap**.  
Projects live under `/projects/<slug>` with optional proxies to their own Vercel deployments. Resume at `/resume`.

**Live:** https://thomascani.com/

## Routes
- `/` – Hero & featured projects
- `/projects` – Project grid
- `/projects/<slug>` – Individual project demo (proxied or embedded)
- `/resume` – Embedded PDF resume

## Tech
- React 18 + Vite
- Bootstrap 5.3 (theme-aware `data-bs-theme`)
- React Router (client-side routing)
- Vercel (CI/CD + hosting)

## Local dev
```bash
npm install
npm run dev
