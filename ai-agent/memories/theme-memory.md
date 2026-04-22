# Title: Theme Memory: Tailwind v4 Design System - Colors & Typography
# Description: Complete design system with color palette extracted from hero-background.png (purple primary, complementary gold/teal/amber) and typography system using Inter, Playfair Display, and Poppins fonts via next/font/google.
# Tags: [theming, tailwind-v4, colors, typography, fonts, design-system, css-variables, nextjs-fonts]

---

### Context
The project was a brand-new Next.js 16.2.4 application with TailwindCSS v4 installed. The `globals.css` file contained only basic default styling with minimal CSS variables for background and foreground colors. No custom color palette existed, no design system was in place, and the default Geist fonts were being used without any typography hierarchy.

### Goal
Build a comprehensive design system for a study abroad agency website including: (1) Color palette extracted from hero-background.png with primary purple, complementary gold secondary, split-complementary teal tertiary, and amber accent colors with full shade variants and button states, (2) Typography system with three distinct fonts (body, heading, display) loaded via next/font/google for optimal performance, (3) Responsive breakpoints for mobile-first design, all implemented using Tailwind v4's CSS-first theme configuration.

### The Implementation Journey
* **Initial Approach - Colors:** Attempted to analyze the hero image directly using canvas pixel sampling through browser automation. Started the Next.js dev server on localhost:3000 to serve the image for analysis.
* **Problems Encountered - Colors:** File protocol access was blocked by browser security, requiring a localhost server workaround. PowerShell execution policy initially prevented npm script execution, requiring cmd.exe fallback.
* **The Solution - Colors:** Successfully sampled 20,736 pixels from the 1920×1080 hero image, identified `#6040a0` as the dominant purple (978 occurrences). Applied color wheel theory to select gold as complementary, teal as split-complementary, and amber for energy/CTAs. Implemented in `globals.css` using Tailwind v4's `@theme inline` directive with CSS custom properties for 10 shades per color (50-950).
* **Fonts Research:** Investigated font psychology for education/study abroad branding. Selected Inter (clean, trustworthy for body), Playfair Display (elegant serif for academic authority in headings), and Poppins (geometric, friendly for display/hero text). All fonts are Google Fonts with free commercial licensing (SIL OFL 1.1).
* **Fonts Implementation:** Used `next/font/google` for self-hosted font loading with CSS variables. Configured in `layout.tsx` with `display: "swap"` and appropriate weight ranges. Mapped to Tailwind theme via `--font-sans` (Inter), `--font-heading` (Playfair Display), and `--font-display` (Poppins). Created utility classes `.font-heading`, `.font-display`, and `.font-body`.
* **Breakpoints:** Added 2025-standard responsive breakpoints in `globals.css` using Tailwind v4's `--breakpoint-*` theme variables: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px).

### Current Design System Reference

**Color Palette (globals.css):**
- Primary (Purple): Extracted from hero-background.png #6040a0, scaled to 50-950 shades
- Secondary (Gold): Complementary to purple, energetic, warm
- Tertiary (Teal): Split-complementary, balanced and calm
- Accent (Amber): High energy for CTAs
- Neutral (Slate): Text, backgrounds, UI elements

**Typography System (layout.tsx + globals.css):**
| Font | Variable | Usage | Class |
|------|----------|-------|-------|
| Inter | --font-inter | Body text, paragraphs, UI | font-sans (default), font-body |
| Playfair Display | --font-playfair | Headings, section titles | font-heading |
| Poppins | --font-poppins | Hero text, display, CTAs | font-display |

**Responsive Breakpoints (globals.css):**
| Breakpoint | Size | Target |
|------------|------|--------|
| sm | 640px | Mobile landscape / Small tablets |
| md | 768px | Tablets portrait |
| lg | 1024px | Tablets landscape / Small laptops |
| xl | 1280px | Laptops / Small desktops |
| 2xl | 1536px | Large desktops |

### File Structure
```
app/
├── layout.tsx          # Font imports, metadata, root layout
├── globals.css         # Colors, breakpoints, font theme variables
└── page.tsx            # Font testing page (can be replaced)
ai-agent/
└── memories/
    └── theme-memory.md # This file
```

### Coding Style & Conventions
* Use semantic color naming: `--color-primary-*`, `--color-secondary-*`, `--color-tertiary-*`, `--color-accent-*` instead of literal color names for maintainability.
* Define CSS custom properties in `:root` first, then reference them in `@theme inline` using the `--color-{name}-{shade}: var(--{color}-{shade})` pattern.
* Create utility classes for button states (`.btn-primary`, `.btn-secondary`, `.btn-tertiary`) with consistent hover (lighter shade) and active (darker shade + scale transform) patterns.
* Follow the 50-950 shade scale convention matching Tailwind's default color system.
* Load fonts via `next/font/google` with CSS variables for self-hosting and optimal performance.
* Use `display: "swap"` font loading strategy to prevent layout shift.
* Configure font weights explicitly for non-variable fonts (Playfair Display, Poppins).
* Map fonts to semantic CSS variables: `--font-sans`, `--font-heading`, `--font-display`.
* Use mobile-first responsive design with breakpoints defined in `rem` units via `--breakpoint-*` theme variables.
* OKLCH color format preferred for production, hex values acceptable for initial development.
