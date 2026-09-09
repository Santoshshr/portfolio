# Santosh Shrestha — Personal Founder Website

A premium, production-ready personal founder website built for Santosh Shrestha. Designed to reflect an entrepreneurial and builder mindset with a sleek, minimalist, Apple × Linear inspired aesthetic.

## Tech Stack

- **Framework**: React 19 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Custom Design Tokens (CSS Variables)
- **Animations**: Framer Motion
- **Icons**: Lucide React + Custom SVGs
- **Deployment**: GitHub Pages (via GitHub Actions)

## Local Development

To run the project locally, ensure you have Node.js (v20+) installed.

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## Build Commands

To build the project for production:

```bash
npm run build
```

This will run TypeScript type-checking and build the static assets into the `dist` directory.

To check for linting errors:

```bash
npm run lint
```

## GitHub Pages Deployment

This project is fully configured for continuous deployment to GitHub Pages using GitHub Actions.

1. Push your changes to the `main` branch.
2. The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically trigger.
3. It will build the site and deploy the `dist` output to the `gh-pages` environment.

### Repository Configuration

For GitHub Pages to work correctly with this workflow:
1. Go to your repository **Settings** > **Pages**.
2. Under **Build and deployment**, set the **Source** to **GitHub Actions**.
3. Ensure the Vite `base` configuration in `vite.config.ts` is set to `./` so assets load correctly on both the root domain and a repository subpath (e.g., `https://santoshshr.github.io/Santoshshr_gt/`).

### Custom Domain Configuration

If you want to use a custom domain later:
1. Add your custom domain in the repository **Settings** > **Pages**.
2. GitHub will automatically handle the DNS and HTTPS certificates.
3. You do **not** need to change the Vite `base` path—`./` works seamlessly with custom domains as well.

---

## Content Management

This website is completely data-driven. You can update content without modifying React components.

### How to update personal information
Edit `src/data/personal.ts`. You can change your name, bio, tagline, social links, and about me paragraphs.

### How to add ventures
Edit `src/data/ventures.ts`. Append a new object to the array.
```typescript
{
  name: "New Venture",
  description: "Description of the venture.",
  category: "Tech",
  status: "Building",
  url: "https://example.com",
  featured: true,
}
```

### How to add projects
Edit `src/data/projects.ts`. Append a new object to the array.
```typescript
{
  name: "New Project",
  description: "What the project does.",
  technologies: ["React", "TypeScript"],
  githubUrl: "https://github.com/.../...",
  liveUrl: "https://...",
  status: "Active",
}
```

### How to change theme/accent colors
Edit `src/index.css`. All colors are managed via CSS variables in the `@theme` and `:root` / `.dark` sections.
- To change the primary accent color, modify `--color-accent` inside `@theme`.
- To tweak dark or light mode backgrounds, modify `--bg-primary`, `--bg-secondary`, etc., in `:root` and `.dark`.
