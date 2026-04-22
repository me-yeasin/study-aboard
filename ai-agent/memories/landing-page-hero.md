# Title: Mobile-First Hero Section Implementation - Landing Page
# Description: Built a complete mobile-first hero section with transparent fixed header (ACIC logo + CSS hamburger), full-width hero (100dvh with hero-background.png), overlapping avatar circles (+2k badge), centered Playfair Display heading, and two CTA buttons (primary with full glass effect, secondary with icon-only glass circle + "Free Consultation").
# Tags: [hero-section, mobile-first, glassmorphism, landing-page, avatars, primary-button, secondary-button, ripple-effect, hover-effect, tailwind-css, nextjs]

---

### Context
After establishing the design system (Tailwind v4, Inter/Playfair Display/Poppins fonts, purple primary palette), the project had no landing page UI. The app/page.tsx was essentially empty. The task was to build the mobile-first hero section with specific components.

### Goal
Create a mobile-first hero section on the landing page containing: (1) Transparent fixed header with ACIC logo (white, Poppins font via font-display) and CSS-only hamburger icon, (2) Full-width hero with 100dvh height using hero-background.png as cover image, (3) Overlapping avatar circles (4 Unsplash images) with +2k indicator and "Trusted Students" text, (4) Centered heading "Australia's most trusted education specialist" (Playfair Display via font-heading, medium weight), (5) Two CTA buttons: Primary ("Request a callback" with phone icon, full glass effect) and Secondary ("Free Consultation" with calendar icon, glass-only-on-icon style).

### The Implementation Journey

**1. Header Implementation:**
- Created fixed transparent header: `className="fixed top-0 left-0 w-full h-16 bg-transparent z-50"`
- Logo: `<span className="font-display text-white text-xl font-semibold tracking-wide">ACIC</span>`
- Hamburger: Two white span elements with CSS (no external dependencies): `<span className="w-7 h-[1px] bg-white rounded-full" />`
- User later manually adjusted positioning

**2. Hero Section:**
- Full width, 100dvh height: `className="w-full h-dvh bg-[url('/images/hero-background.png')] bg-cover bg-center bg-no-repeat"`
- Flex column, centered: `flex flex-col items-center pt-20 px-2`

**3. Avatar Circles:**
- Container: `flex items-center gap-2 mt-10`
- Avatar wrapper: `flex flex-row-reverse items-center` (reverses order for proper overlap)
- Individual avatars: `w-7 h-7 rounded-full border-2 border-white object-cover -ml-3` (negative margin creates overlap)
- +2k badge: `w-7 h-7 rounded-full border-2 border-white bg-primary-600 flex items-center justify-center text-white text-xs font-sans font-medium`
- Text: `font-sans text-white text-xs font-normal`
- User manually repositioned avatar component to top-center

**4. Heading:**
- Element: `<h1 className="font-heading text-white text-3xl font-medium text-center mt-10 leading-tight">`
- Uses Playfair Display (font-heading), white color, 3xl size, medium weight, centered

**5. Button Container:**
- `className="flex flex-col gap-3 mt-10 max-w-sm px-4"`
- NOTE: Parent container does NOT have w-full (user removed it)

**6. Primary Button Component (app/components/ui/primary-button.tsx):**
- "use client" directive for React hooks
- Props interface: `{ icon: React.ReactNode; label: string }`
- Glassmorphism (full button): `backdrop-blur-md bg-white/20 border border-white/20`
- Shape: `rounded-full` (pill shape)
- Sizing: `h-12 px-5`
- Hover intensification: `hover:bg-white/30 hover:backdrop-blur-xl hover:border-white/30`
- Icon span: `<span className="flex items-center justify-center z-10">{icon}</span>`
- Label span: `<span className="font-sans font-medium text-sm z-10">{label}</span>`
- Text is text-sm (smaller than text-base in button className)

**7. Secondary Button Component (app/components/ui/secondary-button.tsx):**
- "use client" directive for React hooks
- Props interface: `{ icon: React.ReactNode; label: string }`
- Glass effect ONLY on icon circle: `<span className="w-10 h-10 rounded-full backdrop-blur-md bg-white/20 border border-white/20">`
- Text has NO background
- Button container: `justify-start` (left-aligned to match primary button)
- Button styling: `h-12 px-0 rounded-full text-white font-sans font-medium text-base`
- Border for definition: `border border-white/10`
- Hover: `hover:opacity-80` (subtle feedback, not glass intensification like primary)
- Ripple effect same as primary button

**8. Icons (page.tsx):**

PhoneIcon - Filled white phone SVG (20x20):
```tsx
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72..." />
  </svg>
);
```

CalendarIcon - Filled white calendar SVG (18x18):
```tsx
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <line x1="8" y1="2" x2="8" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <line x1="3" y1="10" x2="21" y2="10" stroke="white" strokeWidth="2" />
  </svg>
);
```

**9. Button Labels:**
- Primary: "Request a callback" (phone icon)
- Secondary: "Free Consultation" (calendar icon) - chosen after researching study abroad agency CTAs

**10. Ripple Effect (both buttons):**
- useState: `useState<{ x: number; y: number; id: number }[]>([])`
- handleClick calculates click position: `e.clientX - rect.left`, `e.clientY - rect.top`
- Ripple spans: `position: absolute`, `border-radius: 50%`, `backgroundColor: rgba(255, 255, 255, 0.4)`
- Animation: scale(0) to scale(40), opacity 0.4 to 0, duration 600ms
- Cleanup via setTimeout after 600ms
- CSS keyframe: `@keyframes rippleEffect`

### Key Problems Encountered & Solutions

| Problem | Root Cause | Solution |
|---------|-----------|----------|
| Buttons took full width | Parent container had `w-full` | Removed `w-full` from parent container div |
| Secondary button content centered | Default flex `justify-center` | Changed to `justify-start` for left alignment |
| Ripple effect needed | User wanted tactile feedback | Implemented React state with click position tracking |
| Icon was outline style | Default SVG was stroke-based | Changed to `fill="white"` for filled icon |
| Hover effect requested | User wanted premium feel | Added hover intensification for primary; subtle opacity for secondary |
| npm packages blocked | PowerShell execution policy | Used inline SVG instead of lucide-react |
| Long button text on mobile | "Book a free consultation" too long | Shortened to "Free Consultation" |
| Button alignment mismatch | Primary centered, secondary needed left | Used `justify-start` on secondary |

### User Manual Changes (DO NOT OVERWRITE)
- Avatar component repositioned to top-center of hero section
- Button container width adjusted (removed w-full)
- Various visual adjustments made by user

### Coding Style & Conventions
* Mobile-first design with Tailwind v4 utility classes
* Use font-heading (Playfair Display) for headings, font-display (Poppins) for logo/display text
* Glassmorphism: backdrop-blur-md, bg-white/XX, border-white/XX, rounded-full for pills
* Reusable components in app/components/ui/ folder with TypeScript interface for props
* Inline SVG for icons (no external icon library dependencies)
* Ripple effect: React state with useState, absolute positioned spans, CSS keyframe animation
* Parent container w-full causes children to stretch - remove w-full from parent for content-width buttons
* User manual changes must be preserved - do not revert user's adjustments
* Secondary button: glass-only-on-icon design with left-aligned text

### File Structure
```
app/
├── page.tsx                         # Landing page with hero section, avatars, heading, icons, buttons
├── components/ui/
│   ├── primary-button.tsx           # Reusable glassmorphic button (full glass) with ripple + hover
│   └── secondary-button.tsx        # Reusable button (glass-only-on-icon) with ripple + subtle hover
├── globals.css                      # Design system: colors, fonts, breakpoints
└── layout.tsx                       # Font imports (Inter, Playfair, Poppins)
```

### Design System Reference (globals.css)
- Primary: Purple (#6040a0 extracted from hero-background.png)
- Secondary: Gold (complementary)
- Tertiary: Teal (split-complementary)
- Accent: Amber
- Fonts: Inter (sans/body), Playfair Display (heading), Poppins (display/logo)
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)

### User Preferences (For Future Agents)
* User prefers inline SVG icons over npm packages (PowerShell execution policy issues)
* User manually adjusts positioning - preserve these changes
* User wants filled icons not outline icons
* User wants premium glassmorphism effects (ripple on click, hover intensification)
* User tests with preview before confirming - wait for approval on UI decisions
* Button width should be content-width, not full parent width
* Secondary button should have glass ONLY on icon, text without background
* Short button labels for mobile - avoid long text like "Book a free consultation"
