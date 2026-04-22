# Title: Reusable CategorySlider Component with Icon Extraction
# Description: Created a fully reusable CategorySlider component extracted from the inner container implementation. The component handles its own state (auto-slide, IntersectionObserver for dot sync) and accepts configurable props for section number, header content, cards array, and optional button. Also extracted PhoneIcon and CalendarIcon into a separate icons.tsx file for cleaner page.tsx organization.
# Tags: [mobile, slider, IntersectionObserver, React-Hooks, Tailwind-CSS, glassmorphism, visa-selector, component-extraction, reusable-component]

---

### Context
A Next.js landing page (page.tsx) with a glassmorphic hero section containing a white inner container. The project uses Tailwind v4 with a custom purple primary color palette and Inter/Playfair/Poppins font families defined in globals.css. The inner container implementation grew to include: a header with icon + title/subtitle, a horizontal slider with 4 visa category cards, and pagination dots synchronized via IntersectionObserver.

### Goal
Refactor the inline inner container implementation into a fully reusable CategorySlider component. Extract icon components to a separate file for better code organization. Ensure the new component maintains all existing functionality (auto-slide, dot synchronization, scrollbar hiding) while accepting configurable props.

### The Implementation Journey
* **Component Extraction:** Created `app/components/ui/category-slider.tsx` as a reusable component with props: sectionNumber, headerIcon, title, subtitle, cards (array), buttonText (optional, default "View All"), onButtonClick (optional). The component handles its own state (currentIndex, scrollRef, IntersectionObserver, useEffect for auto-slide).
* **Icon Extraction:** Created `app/components/ui/icons.tsx` to hold PhoneIcon and CalendarIcon SVG components, exported them, and updated page.tsx to import from the new file.
* **Page Update:** Updated page.tsx to import and use CategorySlider twice (for "01" Study and "02" Work sections), passing appropriate props for each. Removed inline useRef, useState, useEffect hooks from page.tsx since they are now encapsulated in the component.
* **Card Data Structure:** Each card is an object with { icon, prefix, keyword, suffix } - allowing dynamic number of cards instead of fixed 4.

### Component Props Interface
```tsx
interface CardData {
  icon: string;        // path to icon image
  prefix: string;      // gray italic text (e.g., "I am a")
  keyword: string;     // black bold text (e.g., "tourist")
  suffix: string;      // gray italic text (e.g., "working holiday visa.")
}

interface CategorySliderProps {
  sectionNumber: string;           // "01", "02", etc.
  headerIcon: string;              // icon path for header
  title: string;                    // header title
  subtitle: string;                 // header subtitle
  cards: CardData[];                // array of card data (any length)
  buttonText?: string;              // optional, default "View All"
  onButtonClick?: () => void;       // optional button handler
}
```

### Coding Style & Conventions
* Extract reusable UI patterns into separate component files in `app/components/ui/`
* Group related icons into a single `icons.tsx` file for namespace organization
* Component handles its own state - parent components pass data via props
* Use functional state updates (setState(prev => ...)) for interval-based animations to avoid stale closures
* IntersectionObserver with root:scrollContainer and threshold:0.5 for stable card detection
* Scrollbar hiding requires triple-layer approach: inline styles, CSS utility with !important, Tailwind arbitrary variant
* Card text styling: prefix/suffix use text-xs italic text-gray-500, keyword uses text-base font-bold text-gray-900
* Cards use flex layout with items-center justify-between, text content uses flex-col with gap-1
* Header uses flex justify-between with items-center, icon + text column on left, text button on right
* Always use data-index attribute on slider cards for IntersectionObserver targeting