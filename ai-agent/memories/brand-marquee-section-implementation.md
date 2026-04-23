# Title: Brand Marquee Section Implementation with Seamless Infinite Scroll
# Description: Created a brand marquee section with Lucide icon placeholders, CSS keyframe animation, and seamless infinite scroll. Implemented using Tailwind CSS v4, React, and Ryan Mulligan's proven marquee approach with gap-aware keyframes for pixel-perfect looping.
# Tags: [tailwind-v4, react, css-animation, marquee, lucide-react, infinite-scroll, nextjs]

---

### Context
The project is a Next.js 16.2.4 application with Tailwind CSS v4. The About Us section had just been completed, and the user requested a new Brand Marquee section to be placed immediately after it. The section needed to showcase partner universities/brands with a continuous scrolling animation effect. No existing marquee implementation existed in the codebase.

### Goal
Create a Brand Marquee section after the About Us section that:
- Displays partner university logos in a continuous scrolling marquee
- Uses high-quality placeholder logos (initially text, then Lucide icons)
- Implements smooth, seamless infinite scrolling animation
- Maintains professional visual design with grayscale appearance
- Ensures logos never overlap and the loop is seamless
- Follows mobile-first responsive design principles

### The Implementation Journey
* **Initial Approach:** Created a basic marquee with text placeholders using dual-list duplication technique. Used CSS keyframe animation with arbitrary Tailwind syntax `animate-[marquee_30s_linear_infinite]`. Added gradient fade masks on edges for smooth entry/exit.
* **Problems Encountered:**
  - Animation not working: Keyframes were defined inside `@theme` block, but Tailwind v4 requires them outside for arbitrary animation syntax
  - Logo overlap: Used absolute positioning with different animations (marquee and marquee2), causing timing mismatches
  - Visual design issues: Text placeholders looked amateurish, colored badges were too prominent
  - Gap too large: Container dimensions (w-16 h-16) and line-height (leading-tight) added excessive spacing
  - Seamless loop failing: Missing gap offset in keyframe animation caused visible misalignment at loop point
* **Solution Evolution:**
  - Fixed animation by moving keyframes outside `@theme` block
  - Switched from absolute positioning to flex layout with both lists in flow
  - Added `flex-shrink: 0` and `min-w-full` to prevent overlap
  - Replaced text with Lucide React icons (Building2, GraduationCap, School, BookOpen, Library, Landmark, BookMarked, ScrollText)
  - Changed from colorful badges to grayscale (text-gray-400 opacity-50) for professional appearance
  - Removed container div entirely to eliminate extra spacing
  - Implemented Ryan Mulligan's gap-aware keyframe: `translateX(calc(-100% - var(--marquee-gap, 2rem)))`
* **User Modifications:**
  - Manually removed duplicate set to test single-list version first
  - Manually adjusted gap from gap-1 back to gap-3 (preference for more spacing between icon and text)
  - Manually removed container div (w-16 h-16 bg-gray-100) for tighter spacing
* **Final Solution:**
  - Flex-based layout with parent container having `flex overflow-hidden select-none gap-8`
  - Both `<ul>` lists use `flex shrink-0 min-w-full items-center animate-marquee justify-around gap-8`
  - CSS variable `--marquee-gap: 2rem` set via inline style to match gap-8
  - Keyframe: `to { transform: translateX(calc(-100% - var(--marquee-gap, 2rem))); }`
  - Icons render directly without container, using `text-gray-400 opacity-50 hover:opacity-100 hover:text-primary-600`
  - Text below icons: `text-xs font-medium text-gray-400 leading-none`
  - Gradient mask: `mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]`
  - Pause-on-hover: `hover:[animation-play-state:paused]`
  - Accessibility: `aria-hidden="true"` on duplicate list, reduced motion media query

### Coding Style & Conventions Established
* **Tailwind v4 animation pattern:** Define keyframes outside `@theme` block, use arbitrary syntax `animate-[name_duration_easing_infinite]` in components
* **Marquee gap synchronization:** Parent container gap, list gap, and CSS variable must all match (e.g., gap-8 = 2rem = --marquee-gap: 2rem)
* **Gap-aware keyframe:** Always include gap offset in translateX calculation: `calc(-100% - var(--marquee-gap, 2rem))` for seamless looping
* **Flex layout for marquees:** Use `flex shrink-0 min-w-full` on both lists, never absolute positioning
* **Icon placeholder pattern:** Use Lucide React icons with grayscale styling: `text-gray-400 opacity-50 hover:opacity-100 hover:text-primary-600`
* **Section component structure:** Export from barrel file (index.ts), import in page.tsx, place in correct order
* **Label styling:** Use `font-sans text-xs font-medium text-primary-800 uppercase tracking-wide` for section labels
