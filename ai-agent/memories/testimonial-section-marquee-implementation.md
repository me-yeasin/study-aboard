# Title: Testimonial Section Dual-Row Marquee Implementation with Reverse Scrolling
# Description: Implemented a dual-row testimonial marquee section with bidirectional infinite scrolling. Top row scrolls right-to-left, bottom row scrolls left-to-right. Key challenges included getting Tailwind v4 animation classes working and implementing opposite-direction scrolling. Used CSS keyframes with duplicated card arrays for seamless looping.
# Tags: [tailwind-v4, react, css-animation, marquee, infinite-scroll, nextjs, testimonial, glassmorphism]

---

### Context
The project is a Next.js 16.2.4 application with Tailwind CSS v4. A Brand Marquee section already existed with proven marquee animation patterns. The user wanted a new Testimonials section featuring student testimonials in a marquee-style layout.

### Goal
Create a Testimonials section with:
- Reusable TestimonialCard component with glass morphism styling
- Infinite horizontal marquee animation
- Mobile-optimized card sizing (min-w-[280px] max-w-[320px])
- Dual-row marquee with opposite scroll directions
- Gradient fade edges for visual polish

### The Implementation Journey
* **Initial Approach:** Created TestimonialCard component with glass effect (backdrop-blur-xl, semi-transparent background, gradient borders). Added star rating SVG, quote mark decoration, and avatar with initials.
* **Problems Encountered:**
  - Marquee animation not working: Card stayed frozen and static
  - Root cause: Missing `min-w-full shrink-0` on marquee track - following brand-marquee pattern fixed this
  - Second marquee (reverse direction) not animating: Only `animate-testimonial-marquee` had explicit CSS class; `animate-testimonial-marquee-reverse` relied solely on Tailwind theme variable which wasn't resolving properly
* **Solution Evolution:**
  - Added `min-w-full shrink-0` to marquee track following brand-marquee implementation
  - Created separate `@keyframes testimonial-marquee-reverse` with `from { transform: translateX(-50%) } to { transform: translateX(0) }`
  - Added explicit `.animate-testimonial-marquee-reverse` CSS class alongside the existing forward animation class
  - User manually removed box-shadow from card (preferred cleaner look without shadows)
* **User Modifications:**
  - Manually added second marquee row by copy-pasting first row
  - Manually removed `boxShadow` property from card style (preferred flat glass card without shadows)
* **Final Solution:**
  - Two-row marquee: top row uses `animate-testimonial-marquee` (right→left), bottom row uses `animate-testimonial-marquee-reverse` (left→right)
  - Duplicated testimonial array `[...testimonials, ...testimonials]` for seamless loop
  - Pure CSS animations (40s duration, linear timing, infinite loop)
  - Gradient fade edges using `bg-gradient-to-r/to-l from-background to-transparent`
  - Pause on hover for both marquees

### Coding Style & Conventions Established
* **Marquee animation pattern:** Use `min-w-full shrink-0` on flex track container to ensure full-width scrolling:
  ```tsx
  <div className="flex gap-4 animate-testimonial-marquee min-w-full shrink-0">
  ```
* **Bidirectional marquee:** Define separate keyframes for reverse direction. Forward: `translateX(0)` → `translateX(-50%)`. Reverse: `translateX(-50%)` → `translateX(0)`.
* **Seamless loop technique:** Duplicate content array `[...items, ...items]` with -50% translation
* **CSS class vs Tailwind theme:** When custom animation class isn't resolving, add explicit CSS class definition:
  ```css
  .animate-testimonial-marquee-reverse {
    animation: testimonial-marquee-reverse 40s linear infinite;
  }
  ```
* **Keyframe placement:** Define keyframes outside `@theme` block but after it closes, in order they are referenced
* **Card glassmorphism:** Use inline styles for precise control:
  ```tsx
  style={{
    background: "rgba(15, 10, 45, 0.08)",
    borderTop: "1px solid rgba(255, 255, 255, 0.65)",
    borderLeft: "1px solid rgba(255, 255, 255, 0.65)",
  }}
  ```
* **Gradient fade edges:** Use absolute positioned divs with `z-10 pointer-events-none` for fade overlays