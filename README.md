# Basic React Router App

A modern, responsive React Router starter that demonstrates browser-based routing, lazy-loaded pages, accessible navigation, and a clean static site layout.

## Features

- BrowserRouter with route-based URLs
- Lazy-loaded page modules with a Suspense loader
- `Suspense` key based on the current route
- Fixed responsive header
- Accessible mobile navigation drawer with Escape-key support
- Home, About, Contact, Privacy, Terms, and Not Found pages
- Scroll reset on every route change
- Responsive footer with working legal routes
- Page metadata for browser and social previews
- Clear code comments around routing, loading, and navigation behavior

## Tech stack

- React 18
- React Router DOM
- Vite
- styled-components
- react-icons

## Install and run

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
```

## GitHub Pages deployment

The deployment scripts publish the built `dist` folder to the `gh-pages` branch.

```bash
npm run deploy
```

`predeploy` builds the app and copies `index.html` to `404.html`. This lets BrowserRouter render direct GitHub Pages visits such as `/basic-react-router-app/about`.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/about` | About the project |
| `/contact` | Contact links |
| `/privacy-policy` | Privacy policy |
| `/terms-of-service` | Terms of service |
| Any other path | Not Found |

## Routing behavior

The app uses `BrowserRouter`. Vite uses the repository base path for GitHub Pages, while local development stays at `/`. The [public/_redirects](./public/_redirects) rule also supports Netlify deployments.

Each page is imported only when its route is requested. While it loads, the app displays a small accessible loading indicator.

## Project structure

```text
src/
  appRoutes/       Lazy-loaded route definitions
  components/      Header, footer, loader, layout, and shared page styles
  pages/           Route-level page content
  App.jsx          Application shell
  main.jsx         BrowserRouter entry point
```

## Notes

- This is a static frontend demo. It has no database, authentication, analytics integration, or contact-form submission.
- The Contact page uses direct email and portfolio links only.

## Author

**Ashish Ranjan**

Full-Stack Web Developer

## Links

- Portfolio: [ashishranjan.net](https://www.ashishranjan.net/)
- GitHub: [github.com/a2rp](https://github.com/a2rp)
- CodePen: [codepen.io/ash1198](https://codepen.io/ash1198)
- LinkedIn: [linkedin.com/in/aashishranjan](https://www.linkedin.com/in/aashishranjan)
- Facebook: [facebook.com/theash.ashish](https://www.facebook.com/theash.ashish/)
- YouTube: [Ashish Ranjan](https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1)
- Email: [ash.ranjan09@gmail.com](mailto:ash.ranjan09@gmail.com)

## Support

- [Support page](https://a2rp-donation-page.netlify.app/)
- [Buy Me a Coffee](https://buymeacoffee.com/a2rp)
- [Patreon](https://www.patreon.com/a2rp)

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE).
