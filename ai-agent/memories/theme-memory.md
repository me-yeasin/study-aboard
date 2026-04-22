# Title: Theme Memory: Tailwind v4 Color Design System
# Description: Extracted dominant purple from hero-background.png and built a comprehensive color system with primary, secondary, tertiary, and accent colors using Tailwind v4's CSS-first theme configuration.
# Tags: [theming, tailwind-v4, colors, design-system, css-variables]

---

### Context
The project was a brand-new Next.js 16.2.4 application with TailwindCSS v4 installed. The `globals.css` file contained only basic default styling with minimal CSS variables for background and foreground colors. No custom color palette existed, and no design system was in place.

### Goal
Analyze the hero-background.png image to extract the dominant purple color, research complementary color psychology for education/study abroad branding, and implement a complete color design system in Tailwind v4 format with primary (purple), secondary (gold), tertiary (teal), and accent (amber) colors including full shade variants and button state utilities.

### The Implementation Journey
* **Initial Approach:** Attempted to analyze the hero image directly using canvas pixel sampling through browser automation. Started the Next.js dev server on localhost:3000 to serve the image for analysis.
* **Problems Encountered:** File protocol access was blocked by browser security, requiring a localhost server workaround. PowerShell execution policy initially prevented npm script execution, requiring cmd.exe fallback.
* **The Solution:** Successfully sampled 20,736 pixels from the 1920×1080 hero image, identified `#6040a0` as the dominant purple (978 occurrences). Applied color wheel theory to select gold as complementary, teal as split-complementary, and amber for energy/CTAs. Implemented in `globals.css` using Tailwind v4's `@theme inline` directive with CSS custom properties for 10 shades per color (50-950).

### Coding Style & Conventions
* Use semantic color naming: `--color-primary-*`, `--color-secondary-*`, `--color-tertiary-*`, `--color-accent-*` instead of literal color names for maintainability.
* Define CSS custom properties in `:root` first, then reference them in `@theme inline` using the `--color-{name}-{shade}: var(--{color}-{shade})` pattern.
* Create utility classes for button states (`.btn-primary`, `.btn-secondary`, `.btn-tertiary`) with consistent hover (lighter shade) and active (darker shade + scale transform) patterns.
* Follow the 50-950 shade scale convention matching Tailwind's default color system.
* Use OKLCH color format for production builds, but hex values are acceptable for initial development and readability.
