# Title: Inner Container Header with Study Visa Category Selector Slider
# Description: Built a mobile-optimized horizontal slider inside the white inner container of a glassmorphic hero section. The slider contains visa/study category cards with specific text styling (prefix in gray italic, keyword in black bold) and synchronized pagination dots using IntersectionObserver.
# Tags: [mobile, slider, IntersectionObserver, React-Hooks, Tailwind-CSS, glassmorphism, visa-selector]

---

### Context
A Next.js landing page (page.tsx) with a glassmorphic hero section containing a white inner container at lines 89-94. The project uses Tailwind v4 with a custom purple primary color palette and Inter/Playfair/Poppins font families defined in globals.css. The header already existed with a logo (studyIcon.png) and "View All" button.

### Goal
Add a header inside the inner white container (left: studyIcon.png + "Study" title + subtitle, right: "View All" button), followed by a mobile horizontal slider containing visa/study category cards with specific text styling. The slider needs: scroll-snap showing one card at a time, auto-sliding every 3 seconds, and pagination dots synchronized via IntersectionObserver.

### The Implementation Journey
* **Initial Approach:** Created a horizontal flex slider with snap-x snap-mandatory CSS, 4 empty primary-50 cards, and setInterval for auto-sliding every 3 seconds. Added header with studyIcon.png, title "Study", subtitle "I need help with my study plan", and View All button.
* **Problems Encountered:** (1) Scrollbar was visible and needed hiding - applied layered approach with inline styles, CSS utility with !important, and Tailwind arbitrary variant. (2) Dot indicators did not update during manual swipe - used scroll event listener with Math.round to calculate index. (3) Scroll-based calculation was unstable during fast swipes and caused dot misalignments.
* **The Solution:** Replaced scroll listener with IntersectionObserver API with 50% threshold and data-index attributes on cards - much more stable as it directly detects which card is actually visible. Applied comprehensive scrollbar hiding. Implemented card content following user-specified pattern with 4 visa categories: tourist, student, high school student, and study abroad parent.

### Coding Style & Conventions
* Use functional state updates (setState(prev => ...)) for interval-based animations to avoid stale closures
* IntersectionObserver with root:scrollContainer and threshold:0.5 for stable card detection
* Scrollbar hiding requires triple-layer approach: inline styles, CSS utility with !important, Tailwind arbitrary variant
* Card text styling pattern: prefix/suffix text uses text-xs italic text-gray-500, keyword uses text-base font-bold text-gray-900
* Cards use flex layout with items-center justify-between, text content uses flex-col with gap-1
* Icon size was adjusted from w-12 h-12 to w-30 h-30 based on user preference
* Always use data-index attribute on slider cards for IntersectionObserver targeting
* Use passive:true for scroll event listeners if needed for performance
* Header uses flex justify-between with items-center, icon + text column on left, text button on right