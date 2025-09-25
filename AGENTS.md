# AGENTS.md

## Project Overview

**Wealth Lite** เป็นโปรเจ็กต์ที่พัฒนาด้วย Astro framework พร้อมการรองรับ Svelte components และ TailwindCSS สำหรับการจัดการทรัพย์สิน/การเงินแบบง่าย

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
bun install

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

## Environment Setup

1. **Prerequisites**: Node.js 18+ and Bun package manager
2. **VS Code**: Install recommended extensions
3. **Development**: Run `bun run dev` for hot-reload development

## Deployment Considerations

- **Static Build**: Project configured for static site generation
- **Output**: Built files in `dist/` directory
- **Assets**: Optimized and hashed automatically by Astro
- **Hosting**: Can be deployed to any static hosting service (Netlify, Vercel, GitHub Pages, etc.)

## Future Development Areas

Based on the project name "wealth-lite", potential features to implement:

1. **Financial Dashboard**: Portfolio tracking, asset allocation
2. **Transaction Management**: Income/expense tracking
3. **Goal Setting**: Financial goals and progress tracking
4. **Data Visualization**: Charts and graphs for financial data
5. **Settings**: User preferences and configuration

## Configuration Files

- `astro.config.mjs`: Main Astro configuration with Svelte and TailwindCSS
- `svelte.config.js`: Svelte preprocessor configuration
- `package.json`: Dependencies and build scripts
- `.vscode/`: VS Code workspace settings and debug configuration

## Notes for AI Agents

- This is a minimal Astro starter that has been configured with Svelte and TailwindCSS
- The project is in early development stage with basic setup complete
- Perfect for building lightweight financial/wealth management applications
- Focus on performance and user experience with Astro's island architecture
- Use Svelte for interactive components and Astro for static content