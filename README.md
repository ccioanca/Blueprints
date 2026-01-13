# Portfolio (React + Vite)

This repository has been revamped to use React.js as a development framework and Vite as the build tool. This provides a modern and efficient development experience for building the portfolio.

## Project Structure

The project now follows a standard React application structure:

- `public/`: Static assets (e.g., images that don't need processing).
- `src/`: React source code, including components, styles, and main application logic.
- `.github/workflows/`: GitHub Actions workflows for CI/CD.
- `raw_assets/`: Original design assets (e.g., PSD, AI files) that are not part of the build.

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all necessary dependencies.

### `npm run dev`

Runs the app in development mode.
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### `npm run lint`

Runs ESLint to check for code quality issues.

### `npm preview`

Locally previews your production build.

## Deployment

The application is deployed to GitHub Pages automatically via GitHub Actions whenever changes are pushed to the `main` branch. The workflow is defined in `.github/workflows/deploy.yml`.