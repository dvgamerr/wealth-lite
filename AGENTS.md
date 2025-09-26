# AGENTS.md

## Guidelines

- **Critical Rule**: Never modify, delete, or restructure existing code without explicit user permission
- **Safe Operations**: Only add new files, components, or features in designated areas
- **Preserve Functionality**: Maintain all existing functionality and styling when making additions
- **Ask First**: Always request permission before changing any existing `.astro`, `.svelte`, or configuration files
- **Incremental Development**: Build new features alongside existing code, not as replacements
- **Backup Awareness**: Assume no version control - treat all existing code as irreplaceable
- **Documentation**: Update only documentation files (`README.md`, `AGENTS.md`) without permission requirements
- **Testing**: Verify that new additions don't break existing functionality
- **Conservative Approach**: When in doubt, create new files rather than modifying existing ones

## Tech Stack

- **Framework**: Astro v5.13.10 (Static Site Generator)
- **Frontend Components**: Svelte v5.39.5
- **Styling**: TailwindCSS v4.1.13 (via Vite plugin)
- **Package Manager**: Bun
- **Build Tool**: Vite (integrated with Astro)

## Project Structure

```
wealth-lite/
├── public/                 # Static assets
│   └── favicon.svg
├── src/
│   ├── pages/             # Astro pages (file-based routing)
│   │   └── index.astro    # Homepage
│   └── styles/            # Global styles
│       └── global.css     # TailwindCSS imports
├── .astro/                # Generated Astro files
├── .vscode/               # VS Code configuration
├── astro.config.mjs       # Astro configuration
├── svelte.config.js       # Svelte configuration
└── package.json           # Dependencies and scripts
```

## Development Commands

```bash
# Install dependencies
bun i

# Start development server (localhost:4321)
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Run Astro CLI commands
bun run astro [command]
```

## Key Features & Architecture

### 1. **Astro Framework**

- Static site generation with optional SSR capabilities
- File-based routing system in `src/pages/`
- Component islands architecture for optimal performance
- Built-in optimization and bundling

### 2. **Svelte Integration**

- Reactive components with Svelte 5
- Island architecture - components are interactive only when needed
- Preprocessor configured for Vite integration

### 3. **Styling System**

- TailwindCSS v4 integrated via Vite plugin
- Global styles in `src/styles/global.css`
- Utility-first CSS approach

## Development Guidelines

### Adding New Pages

1. Create `.astro` files in `src/pages/`
2. Follow Astro's file-based routing convention
3. Use Astro frontmatter for data fetching and logic

### Creating Components

1. **Astro Components**: Create `.astro` files for static content
2. **Svelte Components**: Create `.svelte` files for interactive features
3. Place components in `src/components/` (to be created)

### Styling Guidelines

1. Use TailwindCSS utility classes for most styling
2. Add custom styles in `src/styles/global.css` if needed
3. Follow mobile-first responsive design principles

## Recommended Project Extensions

Based on `.vscode/extensions.json`:

- `astro-build.astro-vscode` - Official Astro language support
