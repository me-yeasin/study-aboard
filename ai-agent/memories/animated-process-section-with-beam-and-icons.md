# Title: Animated Three-Step Process Section with Vertical Beam and React Icons Integration
# Description: Implemented a vertical three-step "Our Process" section for the mobile landing page featuring an animated traveling beam. Integrated react-icons for a consistent design language and established a staggered animation pattern to synchronize the beam's travel with icon pulse effects.
# Tags: [nextjs, tailwind-v4, react-icons, css-animations, mobile-first, animated-beam, animation-sync]

---

### Context
The project is a mobile-first landing page for ACIC (Australian education agency) built with Next.js 16.2.4 and Tailwind CSS v4. Prior to this task, the landing page had several sections (Hero, Services, About Us, Courses, Brand Marquee) following a established design system (Inter/Playfair Display/Poppins fonts and a purple-based primary palette). The "Our Process" section was missing its core step-by-step content and the sequential animation logic.

### Goal
The goal was to create a mobile-first, vertical three-step sequence in the "Our Process" section for mobile view. The implementation required:
1.  Extracting content for three steps (Consultation, Application, Pre-Departure) from a reference screenshot.
2.  Creating a vertical column layout with significant gaps between steps.
3.  Implementing an animated "beam" that travels from Step 1 to Step 2, then from Step 2 to Step 3, in a continuous loop.
4.  Ensuring consistent styling with the existing project's mobile text sizes and icon container patterns.
5.  Migrating all icons in the project to the `react-icons` library for a cleaner and more consistent visual appearance.

### The Implementation Journey
*   **Initial Approach:** Planned a vertical layout using a single column of "Step Cards" with a custom `BeamConnector` component. The beam was initially designed as an SVG line, but shifted to a structural div-based "rail and particle" system for better control over the animation phases in a 4s loop.
*   **Animated Beam Technique:** Used two CSS keyframe sets (`beam1Travel` and `beam2Travel`) defined in `globals.css`. Each keyframe handles a specific segment of the 4s loop, allowing the beam to "pause" at each icon before continuing its journey.
*   **Staggered Pulse Animations:** To enhance the "hit" effect, three unique pulse keyframes (`iconPulse1`, `iconPulse2`, `iconPulse3`) were created. These are synchronized via `animation-delay` (e.g., Step 2 pulses at 37% of the loop) to match the beam's arrival time at each step's icon circle.
*   **Icon Library Migration:** Swapped all existing inline SVGs (CTAs, features, cards, and process steps) with `react-icons`. Used Bootstrap Icons (`Bs`) for filled/solid variants and Lucide (`Lu`) for stroke-based icons to maintain the project's premium aesthetic.
*   **User Modifications:** 
    *   The user manually updated the Step 3 icon from `BsHeadsetFill` to `BsThreadsFill` to better fit their vision.
    *   The user preferred a 4s total loop duration for the process sequence to ensure a smooth, readable flow.
*   **Final Solution:** A robust vertical sequence where a glowing purple particle travels down a static rail. The sequence is fully mobile-responsive and uses `react-icons` throughout for a unified look.

### Coding Style & Conventions Established
*   **Sequence Beam Pattern:** Use a `BeamConnector` component for vertical step sequences. It should contain a static rail (`w-[1.5px] bg-primary-100`) and an absolute-positioned animated particle for sequence beams.
    ```tsx
    // Example from our-process.tsx
    <div className="relative flex justify-center" style={{ height: 96 }}>
      <div className="absolute top-0 bottom-0 w-[1.5px] bg-primary-100" />
      <div className="absolute w-[3px] rounded-full overflow-hidden">
        <div className="animate-beam1" style={{ background: "linear-gradient(...)" }} />
      </div>
    </div>
    ```
*   **Staggered Keyframe Animation:** Define complex sequential animations in `globals.css` using percentage-based timing within a shared total duration (e.g., 4s). Synchronize multiple elements by aligning their keyframe percentage triggers (0% for Step 1, 37% for Step 2, etc.).
*   **Icon Sizing Convention:**
    *   **Process Steps:** 30px (`size={30}`) inside 64px circles (`w-16 h-16`).
    *   **Feature Benefits:** 24px (`size={24}`) inside 56px circles (`w-14 h-14`).
    *   **CTA Buttons:** 16px-18px for icons within buttons or smaller metadata rows.
*   **React Icons Usage:** Prefer `Bs` (Bootstrap) for filled icons and `Lu` (Lucide) for stroke/outline icons. Always pass `size` and `className`/`color` explicitly for consistency.
*   **Reduced Motion Support:** Always include `.animate-beam*` and `.animate-icon-pulse*` classes in the `prefers-reduced-motion` media query in `globals.css` to ensure accessibility.
