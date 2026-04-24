# Title: CTA Section Implementation with Layered Background Images - Landing Page
# Description: Created a final CTA section for the ACIC landing page featuring a rounded card with dual-layered background images (gradient + plane illustration), centered title, and a gradient primary button with phone icon. Key decisions included using absolute positioning for image layering, opacity on overlay image, and preserving original button size while centering.
# Tags: [nextjs, tailwind-v4, cta-section, layered-backgrounds, mobile-first, gradient-button, react-icons]

---

### Context
The landing page had 11 complete sections (Header, HeroSection, ServicesSection, FeaturesSection, AboutUsSection, BrandMarquee, CoursesSection, OurProcessSection, TestimonialsSection, OurBlocksSection, FaqSection) following an established section-based architecture. The page ended with the FAQ section and needed a final CTA section to drive conversions before a potential footer.

### Goal
Create a Call to Action section placed at the end of the page (after FaqSection) containing:
1. A rounded card that takes full available width
2. White background for the card
3. Centered layout within the section
4. Title: "Start your Australian journey with ACIC today" (centered)
5. Primary button with gradient style
6. Button with phone call icon
7. Button label: "Get Free Consultation"

### The Implementation Journey
* **Initial Approach:** Created `cta-section.tsx` with a white rounded card (`rounded-3xl`), centered title using `font-heading text-2xl font-medium`, and gradient PrimaryButton with `PhoneIcon`. Used `flex flex-col items-center text-center` for centering content.
* **Background Image Addition:** User provided `cta-gradient-bg.png` and asked to set it as the card background filling 100% width and height. Added using `bg-[url('/images/cta-gradient-bg.png')] bg-cover bg-center`.
* **Second Layered Image:** User provided `plane-with-path.png` and requested it be added as a second layer above the gradient background. Implemented using absolute positioned `<img>` tag with `absolute inset-0 w-full h-full object-cover z-10`.
* **Content Z-Index:** Wrapped title and button in a `relative z-20` div to ensure content sits above both background images.
* **Button Alignment Issue:** User noticed button was left-aligned instead of centered. Initially added `fullWidth={true}` which made button too wide.
* **User Correction:** User clarified they wanted the button at its original size, just centered. Removed `fullWidth` prop and kept `flex justify-center w-full` on the container for centering only.

### User Modifications
* User provided two background images for layering effect
* User manually added `opacity-30` to the plane image (visible in current file) to ensure text readability
* User clarified button should NOT be full-width - only centered at original size

### Final Solution
```tsx
<div className="relative w-full bg-gray-200 rounded-3xl shadow-sm border border-gray-100/50 p-8 flex flex-col items-center text-center overflow-hidden">
  {/* Layer 1: Gradient background */}
  <div
    className="absolute inset-0 w-full h-full"
    style={{ backgroundImage: "url('/images/cta-gradient-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
  />
  {/* Layer 2: Plane illustration overlay */}
  <img
    src="/images/plane-with-path.png"
    alt=""
    className="absolute inset-0 opacity-30 w-full h-full object-cover z-10"
  />
  {/* Layer 3: Content */}
  <div className="relative z-20">
    <h2 className="font-heading text-2xl font-medium text-gray-900 leading-tight">
      Start your Australian journey with ACIC today
    </h2>
    <div className="mt-8 flex justify-center w-full">
      <PrimaryButton
        icon={<PhoneIcon />}
        label="Get Free Consultation"
        variant="gradient"
        rounded="lg"
      />
    </div>
  </div>
</div>
```

### Coding Style & Conventions Established
* **Layered Background Pattern:** Use absolute positioned div for gradient (via style prop) and img tag for overlay images, both with `absolute inset-0` for full coverage. Content wrapper uses `relative z-20` to sit above backgrounds.
* **Centering Pattern:** Use `flex justify-center w-full` on button container without `fullWidth` prop when wanting centered button at original size.
* **Opacity for Overlays:** Apply `opacity-30` or similar to secondary background images when layered over gradient to ensure text readability.
* **Section Placement:** CTA section should be placed at the end of the page, after FaqSection, as the final conversion point before footer.
* **Button Centering vs FullWidth:** `flex justify-center w-full` on container centers button without stretching it. Use `fullWidth={true}` only when button should stretch to container width.

### File Structure
```
app/
├── page.tsx                           # Added CtaSection at end
├── components/
│   ├── sections/
│   │   ├── cta-section.tsx           # New file - CTA section with layered backgrounds
│   │   └── index.ts                  # Added CtaSection export
```

### User Preferences Documented
* User wants buttons centered without stretching (no fullWidth unless explicitly requested)
* User prefers layered backgrounds using absolute positioning
* User may manually add opacity to overlay images for text readability
* User tests with preview before confirming - wait for approval on UI decisions
