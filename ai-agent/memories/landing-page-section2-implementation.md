# Title: Landing Page Section 2 Implementation - CategorySlider with Glassmorphism, Overlapping Sections, and Features Grid
# Description: Built a complete second section for the ACIC landing page featuring reusable CategorySlider components with auto-sliding, IntersectionObserver-based dot synchronization, glassmorphism cards with customizable blur levels, decorative overlapping purple circles, and a 2x2 feature benefits grid. Implemented negative margin overlapping technique between hero and section 2, extracted inline data to constants, and refactored page.tsx from 238 lines to 14 lines using section-based architecture.
# Tags: [landing-page, nextjs, tailwind-v4, glassmorphism, category-slider, overlapping-sections, mobile-first, section-based-architecture, inline-svg]

---

### Context
The project was an ACIC (Australian education agency) landing page built with Next.js 16.2.4 and Tailwind v4. The hero section was already complete with: fixed transparent header, 100dvh hero with hero-background.png, overlapping avatar circles with +2k badge, Playfair Display heading, and two glassmorphic CTA buttons (primary and secondary) with ripple effects. The `page.tsx` was a 238-line monolithic file mixing all concerns together.

### Goal
Create section 2 of the landing page containing: (1) Three glassmorphic CategorySlider cards for Study, Visa Issues, and Migration services with auto-sliding and dot synchronization, (2) Decorative overlapping purple circles as background elements, (3) Feature benefits section with 4 items in a 2x2 grid showing ACIC's value propositions, (4) Implement proper overlapping design where cards appear to float up from the hero's blank space, (5) Refactor the entire page.tsx to be clean, maintainable, and readable.

### The Implementation Journey

**1. Understanding the Existing Project:**
Started by reading the `ai-agent/memories/` folder to understand coding styles, then examined `globals.css` for the design system (primary purple #6040a0, secondary gold, tertiary teal, accent amber) and `page.tsx` for current landing page implementation.

**2. Overlapping Sections Design Problem:**
User identified a large blank space below the hero buttons and wanted a creative design where section 2 cards start showing from that blank area. Initial approach was `absolute bottom-0` positioning, but this caused cards to overlap hero content (heading + buttons) instead of just the blank space.

**3. Research-Based Solution:**
Researched CSS overlapping techniques on web (Smashing Magazine, Chen Hui Jing's blog, CSS-Tricks). Negative margins approach was identified as the industry standard for this use case because:
- Cards stay in document flow (natural scroll behavior)
- Negative `margin-top` pulls them upward into blank space
- Hero content remains unaffected
- No z-index complications

**4. User's Design Preferences (Manual Tweaks):**
- Changed overlap from `-mt-32` to `-mt-48` to `-mt-54` for proper positioning
- Adjusted max-width from `max-w-md` to `max-w-xl` for cards
- Modified circle positions from `-left-20/-right-16` to `right-0` for tighter positioning
- Changed card background from `bg-primary-50` to `bg-primary-100`
- Increased circle opacities from `/20` to `/30` and `/50` for visibility
- Removed `mt-8` dividers between sliders for compact design

**5. Feature Icons and Grid:**
Added 4 feature benefit items (Expert Education Counselors, End-to-End Visa Support, Partnerships, Lifetime Assistance) with:
- 2x2 grid layout (`grid-cols-2 gap-4`) for mobile
- 56px circular icon containers with pastel backgrounds matching design system colors
- Inline SVG icons (24x24, stroke-based) to avoid npm package issues

**6. Reusable Component Enhancements:**
Extended `CategorySlider` component with two new optional props:
- `sectionNumberColor?: string` - customizable color for section number (default: `text-black/60`)
- `backdropBlur?: string` - customizable blur level for glassmorphism (default: `backdrop-blur-md`)

**7. Code Refactoring:**
Transformed 238-line `page.tsx` into clean 14-line composition by extracting:
- `Header` component - fixed transparent navigation
- `HeroSection` component - hero with avatars, heading, CTA buttons
- `ServicesSection` component - 3 CategorySliders + decorative circles
- `FeaturesSection` component - 4 feature items in 2x2 grid
- Created barrel export `index.ts` for clean imports
- Moved feature icons to existing `icons.tsx` file
- Extracted all card data arrays to constants at top of section files

### Coding Style & Conventions Established

**1. Icon Implementation Pattern:**
User prefers inline SVG over npm icon libraries due to PowerShell execution policy issues.
- CTA icons: 20x20 filled white SVGs (`fill="white"`)
- Feature icons: 24x24 stroke-based with className for color control (`stroke="currentColor"`)
- All icons stored in `app/components/ui/icons.tsx` with barrel exports

**2. Typography Hierarchy:**
- Hero heading: `font-heading text-3xl font-medium` (Playfair Display)
- Section titles: `font-sans text-sm font-semibold text-gray-900`
- Section subtitles: `font-sans text-xs text-gray-500`
- Card keywords: `text-base font-bold text-gray-900`
- Card prefix/suffix: `text-xs italic text-gray-500`
- Logo: `font-display text-xl font-semibold` (Poppins)

**3. Glassmorphism Pattern:**
- Container: `rounded-2xl backdrop-blur-md bg-black/10 border border-black/5`
- Inner card: `bg-white rounded-xl`
- Cards: `rounded-xl bg-primary-100` (using 100 shade for subtle tint)
- Buttons: `rounded-full backdrop-blur-md bg-white/20 border border-white/20`

**4. Color System Usage:**
- Primary purple: `bg-primary-500`, `text-primary-600`, `bg-primary-100` for backgrounds
- Secondary gold: `bg-secondary-100`, `text-secondary-600`
- Tertiary teal: `bg-tertiary-100`, `text-tertiary-600`
- Accent amber: `bg-accent-100`, `text-accent-600`
- Neutrals: `text-gray-900` (titles), `text-gray-500` (descriptions)

**5. Decorative Circles Pattern:**
- Size: 40-56 (160-224px diameter)
- Color: `bg-primary-500/20` through `/50` (varying opacity)
- Blur: `blur-2xl` for soft edges
- Positioning: Alternating left/right/center with sequential vertical spacing (~40-50px)
- Overflow: `overflow-visible` on section to allow circles to extend beyond bounds

**6. Component Props Interface Pattern:**
```tsx
interface ComponentProps {
  requiredProp: string;
  optionalProp?: string;     // with default value in destructuring
  optionalCallback?: () => void;
}

// Default values in function signature
export default function Component({ 
  requiredProp, 
  optionalProp = "default",
  optionalCallback 
}: ComponentProps) {}
```

**7. Data Extraction Pattern:**
All inline data arrays moved to constants at top of section files:
```tsx
const STUDY_CARDS = [
  { icon: "/icons/city-icon.png", prefix: "I am a", keyword: "tourist", suffix: "working holiday visa." },
  // ...
];
```

**8. Section-Based Architecture:**
- `app/components/sections/` - Page section components
- `app/components/ui/` - Reusable UI primitives (buttons, sliders, icons)
- Each section is self-contained with its data and logic
- `page.tsx` acts as clean composition layer only

**9. Overlapping Sections Technique:**
Use negative margins on relative sections, NOT absolute positioning:
```tsx
// Hero section
<section className="relative min-h-dvh pb-8">...</section>

// Next section overlaps hero's blank space
<section className="relative -mt-54 z-20">...</section>
```

**10. Mobile-First Grid:**
```tsx
// 2x2 grid for mobile
<div className="grid grid-cols-2 gap-4">
```

### File Structure After Implementation
```
app/
├── page.tsx                           # 14 lines - clean composition
├── components/
│   ├── ui/
│   │   ├── primary-button.tsx         # With ripple effect
│   │   ├── secondary-button.tsx       # Glass-on-icon style
│   │   ├── category-slider.tsx        # Reusable with blur/color props
│   │   └── icons.tsx                  # All icons (CTA + feature)
│   └── sections/
│       ├── header.tsx                 # Fixed transparent nav
│       ├── hero-section.tsx           # Avatars + heading + CTAs
│       ├── services-section.tsx       # 3 sliders + circles
│       ├── features-section.tsx       # 4 features 2x2 grid
│       └── index.ts                   # Barrel exports
```

### User Preferences Documented
- **No npm icon packages** - use inline SVG only
- **Manual positioning adjustments** - preserve user tweaks (padding, margins)
- **Filled icons for CTAs**, stroke icons for features
- **Premium glassmorphism** - ripple on click, hover intensification
- **Content-width buttons** (not full-width)
- **Short mobile labels** ("Free Consultation" not "Book a free consultation")
- **Sequential negative margin adjustments** until overlap looks right

### Technical Decisions
- **IntersectionObserver** for slider dot sync (not scroll events)
- **Auto-slide interval** of 3000ms with smooth scroll behavior
- **Snap scrolling** with `snap-x snap-mandatory` for touch-friendly cards
- **Scrollbar hiding** with triple-layer approach (inline styles, CSS, Tailwind)
- **CSS custom properties** via Tailwind v4 `@theme inline` for semantic colors

### Final State
Landing page now has two complete sections:
1. **Hero**: Transparent header, avatars + badge, Playfair heading, glassmorphic CTAs
2. **Services**: 3 glassmorphic CategorySliders with auto-slide, decorative purple circles, 4 feature benefits in 2x2 grid

`page.tsx` reduced from 238 lines to 14 lines using section-based architecture. All data extracted to constants, all icons centralized, all sections reusable.
