# Basic React Router App Documentation

## Overview

This project is a static React application for learning practical routing patterns. It does not make API requests, use a database, or collect form data.

## Application flow

1. `main.jsx` creates the React root and wraps the app in `BrowserRouter`.
2. `App.jsx` renders the shared header, main content area, footer, and scroll-reset component.
3. `AppRoutes` selects the route that matches the browser path.
4. Each page is lazy-loaded with `React.lazy`.
5. `Suspense` displays `Loader` until the requested page module is ready.
6. Unknown paths render the dedicated Not Found page.

## Navigation

The desktop header displays direct page links. At widths below 720 pixels, these links are replaced with a button that opens the mobile drawer.

The drawer:

- Uses a semantic button with `aria-expanded` and an accessible label.
- Closes when a navigation item is selected.
- Closes when the user clicks outside it.
- Closes when the user presses Escape.

## Routes

| Path | Component |
| --- | --- |
| `/` | `pages/home` |
| `/about` | `pages/about` |
| `/contact` | `pages/contact` |
| `/privacy-policy` | `pages/privacyPolicy` |
| `/terms-of-service` | `pages/termsOfService` |
| `*` | `pages/notFound` |

## Scroll behavior

`ScrollToTop` watches the active pathname. When the route changes, it returns the browser viewport to the top using immediate scrolling so users always begin a new page at its heading.

## Deployment behavior

The project includes a GitHub Pages deployment setup and a Netlify fallback rule.

For GitHub Pages, `vite.config.js` builds assets under `/basic-react-router-app/`. The `predeploy` script copies `index.html` to `dist/404.html`, so BrowserRouter can render direct routes after GitHub Pages returns the fallback file.

Deploy with:

```bash
npm run deploy
```

For Netlify, `public/_redirects` provides single-page app fallback handling:

```text
/*    /index.html   200
```

This makes a direct visit to routes such as `/about` load the React app instead of returning a host-level 404 page.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

`npm run dev` starts the local Vite server. `npm run build` creates an optimized production bundle in `dist`.

## Author and support

**Ashish Ranjan**

Full-Stack Web Developer

- Portfolio: [ashishranjan.net](https://www.ashishranjan.net/)
- GitHub: [github.com/a2rp](https://github.com/a2rp)
- Email: [ash.ranjan09@gmail.com](mailto:ash.ranjan09@gmail.com)
- Support: [a2rp-donation-page.netlify.app](https://a2rp-donation-page.netlify.app/)
- Buy Me a Coffee: [buymeacoffee.com/a2rp](https://buymeacoffee.com/a2rp)
- Patreon: [patreon.com/a2rp](https://www.patreon.com/a2rp)
