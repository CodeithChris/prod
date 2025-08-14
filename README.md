# Lawrence Productions - Film Website

A modern, responsive film production company website built with Angular and Ionic.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Film Showcase**: Display multiple films with trailers and descriptions
- **Cast & Crew**: Showcase team members and their roles
- **Contact Information**: Easy access to company contact details
- **Modern UI**: Dark theme with cinematic styling

## Technology Stack

- **Frontend**: Angular 20 + Ionic 8
- **Styling**: SCSS with custom dark theme
- **Deployment**: Netlify
- **Build Tool**: Angular CLI

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

```bash
npm start
```

The application will be available at `http://localhost:4200`

### Building for Production

```bash
npm run build:prod
```

This will:
1. Build the application for production
2. Copy the `_redirects` file to the build output for Netlify deployment

## Deployment

### Netlify Deployment

The project is configured for automatic deployment on Netlify with the following setup:

- **Build Command**: `npm run build:prod`
- **Publish Directory**: `www`
- **Redirects**: Configured via `_redirects` file for SPA routing

### Important Files for Deployment

- `netlify.toml`: Netlify configuration
- `public/_redirects`: URL redirects for client-side routing
- `src/_redirects`: Backup redirects file

## Routing Configuration

The application uses Angular's client-side routing. To handle direct URL access and page refreshes on Netlify, the `_redirects` file contains:

```
/*    /index.html   200

# Handle Angular routes
/home    /index.html   200
/about   /index.html   200
/films   /index.html   200
/contact /index.html   200

# Handle 404s
/404     /index.html   200
```

This ensures that all routes are handled by the Angular router instead of returning 404 errors.

## Troubleshooting

### 404 Errors on Netlify

If you encounter 404 errors after deployment:

1. Ensure the `_redirects` file is present in the `www` directory
2. Verify the build command includes the redirects copy step
3. Check that the `netlify.toml` configuration is correct

### Build Issues

If the build fails:

1. Clear the `www` directory: `rm -rf www`
2. Clear npm cache: `npm cache clean --force`
3. Reinstall dependencies: `rm -rf node_modules && npm install`
4. Rebuild: `npm run build:prod`

## Project Structure

```
src/
├── app/
│   ├── home/           # Main home page component
│   ├── app.component.* # Root app component
│   └── app.routes.ts   # Application routing
├── assets/
│   ├── images/         # Film stills and images
│   └── videos/         # Video content
└── theme/              # SCSS variables and theming
```

## License

This project is proprietary to Lawrence Productions.
