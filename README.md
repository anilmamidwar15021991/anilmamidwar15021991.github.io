# Anil Mamidwar - RPA Developer

Personal portfolio and interactive resume, built with React, TypeScript, and Framer Motion.

This repository houses the source code for my portfolio, showcasing my background in process automation, applied machine learning, and my various open source contributions.

## Tech Stack

- **Framework**: UiPath
- **Language**: VB.NET
- **Styling**: Vanilla CSS (Modules) with CSS Variables for theme tokens
- **Animations**: Framer Motion for entrance, layout, and scroll-driven animations
- **Build Tool**: UiPath,Power Automate Desktop,Python

## Project Architecture

- **`src/data/`**: The single source of truth for all content. The portfolio UI is entirely data-driven, keeping content logic strictly separated from presentation logic.
- **`src/components/`**: Modular, lazy-loaded components. Each section (About, Skills, Projects, etc.) is code-split automatically.
- **`src/globals.css`**: Design tokens, typography scale (`rem`), fluid typography (`clamp`), and global animation resets for `prefers-reduced-motion`.

## Local Development

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Run type checking
yarn type-check

# Build for production
yarn build
```

## Performance & Accessibility

- **Code Splitting**: Below-the-fold components are lazy-loaded.
- **Accessibility (a11y)**: Semantic HTML (`<button>`, `<h2>`), fully keyboard navigable, and respects system-level motion preferences via `@media (prefers-reduced-motion: reduce)`.
- **Theming**: Ready for dark/light mode expansion via CSS custom properties.
