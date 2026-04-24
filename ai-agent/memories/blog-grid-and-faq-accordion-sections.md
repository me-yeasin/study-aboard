# Title: Blog Cards Grid and FAQ Accordion Section Implementation
# Description: Created reusable BlogCard component with responsive grid layout (3 blog entries) and implemented FAQ accordion section with smooth expand/collapse animations and research-backed content about studying in Australia. Both sections follow existing design system conventions with white rounded cards and consistent spacing.
# Tags: [tailwind-v4, react, nextjs, accordion, blog-grid, responsive-design, faq-section]

---

### Context
The page already had several sections including Testimonials (with dual marquee), Our Process, and Brand Marquee. The Blog section was initially created as "Our Blocks" with a single static blog card. The FAQ section did not exist.

### Goal
1. Rename "Our Blocks" to "Our Blogs" and analyze the existing blog card structure
2. Refactor the static blog card into a reusable component with multiple blog entries in a responsive grid
3. Create a new FAQ section with accordion-style questions and research-backed answers about studying in Australia

### The Implementation Journey
* **Initial Approach:** Examined the existing blog card with shadow-sm, rounded-[32px] container, and rounded-2xl image for styling conventions
* **Blog Card Refactor:** Extracted BlogCard as reusable function with BlogCardProps interface, added 3 blog entries with Unsplash images, changed layout from single centered card to responsive grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
* **FAQ Research:** Conducted web searches on Australian study abroad topics to gather accurate FAQ content covering: tuition costs (AUD 20,000-55,000/year), work rights (48 hrs/fortnight, AUD 24.95/hr minimum), and post-study visa options (Subclass 485, 2-6 years)
* **FAQ Implementation:** Created AccordionItem component with useState toggle, chevron rotation animation (rotate-180 on expand), max-height transition for smooth content reveal
* **User Modifications:** User manually changed "Our Blocks" to "Our Blogs" in the label text

### Coding Style & Conventions Established
* **Section header pattern:** Centered label + heading with consistent spacing:
  ```tsx
  <div className="max-w-xl mx-auto text-center">
    <span className="font-sans text-xs font-medium text-primary-800 uppercase tracking-wide">Label</span>
    <h2 className="font-heading text-2xl font-medium text-gray-900 mt-2 leading-tight">Heading</h2>
  </div>
  ```
* **Card container styling:** White background with nested rounded corners and subtle shadow:
  ```tsx
  className="bg-white p-4 rounded-[32px] shadow-sm border border-gray-100/50"
  ```
* **Image styling in cards:** Full-width with fixed height and object-cover:
  ```tsx
  className="w-full h-56 object-cover rounded-2xl"
  ```
* **Accordion animation:** Use max-height transition with overflow-hidden:
  ```tsx
  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-4" : "max-h-0"}`}
  ```
* **Accordion chevron:** Rotate 180° on open state with transition:
  ```tsx
  className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
  ```
* **Responsive grid for cards:** Use Tailwind grid with gap and responsive columns:
  ```tsx
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  ```
* **Section spacing:** Consistent margins and padding:
  ```tsx
  className="w-full mt-20 px-4 pb-16"
  ```