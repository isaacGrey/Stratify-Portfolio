# Stratify Solutions

Company portfolio featuring interactive software demos (StratifyPOS, Her Opportunity Portal, Al-PALMS, Getfoodie.online, and HariNgTari) and the live JuanCast fan-voting platform.

Requires Node.js 20.19+ or 22.12+ and npm.

- `npm ci` installs dependencies.
- `npm run dev` starts the development server.
- `npm run build` creates a static site in `dist/`.
- `npm run preview` serves the production build locally.

Edit the project catalog and inquiry address in `src/data/portfolio.js`. Project screenshots and the supplied Stratify logo are in `public/`.

## Quality checks

- `npm test` validates referenced project/team image assets, unique project identifiers, and social preview metadata.
- `npm run check` runs tests followed by the Vite production build.
- GitHub Actions runs both tests and the production build on pushes to `main` and pull requests.
- The site intentionally uses one light theme; there is no theme-switching control.
