# Title: Mobile-First Hero Section Implementation - Landing Page
# Description: Built a complete mobile-first hero section with transparent fixed header (ACIC logo + CSS hamburger), full-width hero (100dvh with hero-background.png), overlapping avatar circles (+2k badge), centered Playfair Display heading, and two glassmorphic primary buttons with ripple click effect and hover intensification.
# Tags: [hero-section, mobile-first, glassmorphism, landing-page, avatars, primary-button, ripple-effect, hover-effect, tailwind-css, nextjs]

---

### Context
After establishing the design system (Tailwind v4, Inter/Playfair Display/Poppins fonts, purple primary palette), the project had no landing page UI. The app/page.tsx was essentially empty. The task was to build the mobile-first hero section with specific components.

### Goal
Create a mobile-first hero section on the landing page containing: (1) Transparent fixed header with ACIC logo (white, Poppins font via font-display) and CSS-only hamburger icon, (2) Full-width hero with 100dvh height using hero-background.png as cover image, (3) Overlapping avatar circles (4 Unsplash images) with +2k indicator and "Trusted Students" text, (4) Centered heading "Australia's most trusted education specialist" (Playfair Display via font-heading, medium weight), (5) Two column-stacked reusable primary buttons with glassmorphism style, filled white phone icon, right label, ripple click effect, and hover intensification.

### The Implementation Journey

**1. Header Implementation:**
- Created fixed transparent header: `className="fixed top-0 left-0 w-full h-16 bg-transparent z-50"`
- Logo: `<span className="font-display text-white text-xl font-semibold tracking-wide">ACIC</span>`
- Hamburger: Two white span elements with CSS (no external dependencies): `<span className="w-7 h-px bg-white rounded-full" />`
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
- Glassmorphism: `backdrop-blur-md bg-white/20 border border-white/20`
- Shape: `rounded-full` (pill shape)
- Sizing: `h-12 px-5`
- Icon span: `<span className="flex items-center justify-center z-10">{icon}</span>`
- Label span: `<span className="font-sans font-medium text-sm z-10">{label}</span>`
- Text is text-sm (smaller than text-base in button className)

**7. Phone Icon (page.tsx):**
- Inline SVG with filled white: `fill="white"`
- Removed stroke properties (outline style was replaced with filled)
- Size: 20x20

**8. Ripple Effect (primary-button.tsx):**
- useState: `useState<{ x: number; y: number; id: number }[]>([])`
- handleClick calculates click position: `e.clientX - rect.left`, `e.clientY - rect.top`
- Ripple spans: `position: absolute`, `border-radius: 50%`, `backgroundColor: rgba(255, 255, 255, 0.4)`
- Animation: scale(0) to scale(40), opacity 0.4 to 0, duration 600ms
- Cleanup via setTimeout after 600ms
- CSS keyframe: `@keyframes rippleEffect`

**9. Hover Effect (primary-button.tsx):**
- Classes: `transition-all duration-200 hover:bg-white/30 hover:backdrop-blur-xl hover:border-white/30`
- Intensifies glass effect on hover (more opaque bg, stronger blur, brighter border)

### Key Problems Encountered & Solutions

| Problem | Root Cause | Solution |
|---------|-----------|----------|
| Buttons took full width | Parent container had `w-full` | Removed `w-full` from parent container div |
| Ripple effect needed | User wanted tactile feedback | Implemented React state with click position tracking |
| Icon was outline style | Default SVG was stroke-based | Changed to `fill="white"` for filled icon |
| Hover effect requested | User wanted premium feel | Added hover intensification for glassmorphism |
| npm packages blocked | PowerShell execution policy | Used inline SVG instead of lucide-react |

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

### File Structure
```
app/
├── page.tsx                         # Landing page with hero section, avatars, heading, buttons
├── components/ui/
│   └── primary-button.tsx           # Reusable glassmorphic button with ripple + hover
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
