# Title: Courses Section with Reusable Card Component - Landing Page
# Description: Built a complete Courses section for ACIC landing page featuring a reusable CourseCard component with configurable content (image, location, duration, title, popularity badge), enhanced PrimaryButton with fullWidth/rounded/onClick props for backward compatibility, and a 3-card vertical layout using data-driven architecture with Unsplash placeholders.
# Tags: [nextjs, tailwind-v4, reusable-component, courses-section, landing-page, primary-button, mobile-first, data-driven]

---

### Context
The project was an ACIC (Australian education agency) landing page built with Next.js 16.2.4 and Tailwind v4. The landing page already had: Header, HeroSection, ServicesSection (with CategorySliders), FeaturesSection (2x2 grid), AboutUsSection, and BrandMarquee. The Courses section was missing entirely, and there was no reusable card component pattern established for displaying course offerings.

### Goal
Create a complete Courses section containing: (1) Section header with tiny text "Our Courses", title "Pathways for every student", and descriptive subtitle, (2) A reusable CourseCard component based on a provided screenshot design with image, "Popular Course" badge, location/duration metadata, course title, and CTA button, (3) Display 3 course cards in a single vertical column layout, (4) Make the card fully reusable with all content configurable via props.

### The Implementation Journey

**1. Section Header Creation:**
- Created `app/components/sections/courses.tsx` with centered header content
- Tiny text: `font-sans text-xs font-medium text-primary-800 uppercase tracking-wide`
- Title: `font-heading text-2xl font-medium text-gray-900`
- Subtitle: `font-sans text-sm text-gray-500`
- Used `max-w-xl mx-auto` for content width constraint

**2. Initial Card Implementation (Static):**
- Created `app/components/ui/course-card.tsx` based on user-provided screenshot
- Hardcoded all content initially to match the visual design
- Used Unsplash placeholder image for hospitality course
- Inline SVG icons for location pin, clock, and arrow (following no-npm-packages convention)
- Used PrimaryButton with gradient variant

**3. User-Requested Card Adjustments:**
- **Title alignment:** Changed from centered to left-aligned (`text-left`)
- **Button fullWidth:** PrimaryButton was stretching too much - added `fullWidth?: boolean` prop (default `false`) to control width behavior
- **Button rounded corners:** Changed from `rounded-full` (pill) to `rounded-md` (slightly rounded) - added `rounded?: "full" | "lg" | "md" | "sm"` prop
- **Icon position:** Ensured icon stays properly aligned with text (not pushed to far right)

**4. Reusable Component Refactoring:**
- Added `CourseCardProps` interface with all configurable content:
  ```tsx
  interface CourseCardProps {
    image: string;
    isPopular?: boolean;
    location: string;
    duration: string;
    title: string;
    onViewCourse?: () => void;
  }
  ```
- Made "Popular Course" badge conditional (`isPopular &&`)
- All text content now uses props instead of hardcoded values

**5. PrimaryButton Enhancement (Backward Compatible):**
- Added `fullWidth?: boolean` prop (default `false`) - preserves existing behavior
- Added `rounded?: "full" | "lg" | "md" | "sm"` prop (default `"full"`) - preserves existing pill shape
- Added `onClick?: () => void` prop for custom click handlers
- Applied `w-full` class conditionally based on `fullWidth` prop
- Applied border radius conditionally using ternary chain

**6. Three-Card Layout Implementation:**
- Created `COURSES` array with 3 course objects (Hospitality & Tourism, Business Administration, Information Technology)
- Used Unsplash images for each course (different images for variety)
- Wrapped cards in `flex flex-col gap-6` container for vertical stacking
- Mapped through array to render 3 CourseCard components
- Each card has unique `onViewCourse` handler logging course title

**7. Integration:**
- Added `CoursesSection` to barrel export in `app/components/sections/index.ts`
- Imported and placed `CoursesSection` in `app/page.tsx` after `BrandMarquee`

### Coding Style & Conventions Established

**1. Reusable Component Props Interface Pattern:**
```tsx
interface CourseCardProps {
  image: string;
  isPopular?: boolean;     // optional with default
  location: string;
  duration: string;
  title: string;
  onViewCourse?: () => void;  // optional callback
}

export default function CourseCard({
  image,
  isPopular = false,      // default in destructuring
  location,
  duration,
  title,
  onViewCourse,
}: CourseCardProps) {}
```

**2. Backward-Compatible Component Enhancement:**
- Always provide defaults that preserve existing behavior: `fullWidth = false`, `rounded = "full"`
- New props should be optional to avoid breaking existing usages
- Example from `primary-button.tsx`:
```tsx
export default function PrimaryButton({ 
  icon, 
  label, 
  variant = "glass", 
  fullWidth = false,      // preserves existing width behavior
  rounded = "full",       // preserves pill shape
  onClick 
}: PrimaryButtonProps) {}
```

**3. Data-Driven Section Pattern:**
- Extract all card/item data to constants array at top of section file:
```tsx
const COURSES = [
  {
    id: 1,
    image: "https://images.unsplash.com/...",
    isPopular: true,
    location: "Perth City",
    duration: "104 Weeks",
    title: "Hospitality & Tourism Management",
  },
  // ...
];
```
- Use `.map()` to render components from data array
- Pass data as props to reusable components

**4. Conditional Rendering Pattern:**
- Use logical AND (`&&`) for conditional elements:
```tsx
{isPopular && (
  <span className="absolute top-3 left-3 bg-primary-100 text-primary-800 text-xs font-medium px-3 py-1.5 rounded-full">
    Popular Course
  </span>
)}
```

**5. Vertical Card Layout Pattern:**
```tsx
<div className="flex flex-col gap-6 mt-8">
  {COURSES.map((course) => (
    <CourseCard
      key={course.id}
      image={course.image}
      isPopular={course.isPopular}
      location={course.location}
      duration={course.duration}
      title={course.title}
      onViewCourse={() => console.log(`Viewing course: ${course.title}`)}
    />
  ))}
</div>
```

**6. Card Component Structure Convention:**
- Image section with relative positioning for overlay badges
- Content section with padding
- Metadata row with icon + text pairs
- Title with left alignment
- Full-width CTA button at bottom

### File Structure
```
app/
├── page.tsx                           # Added CoursesSection to composition
├── components/
│   ├── ui/
│   │   ├── primary-button.tsx         # Enhanced with fullWidth, rounded, onClick props
│   │   └── course-card.tsx             # New reusable card component
│   └── sections/
│       ├── courses.tsx                 # New section with 3-course layout
│       └── index.ts                    # Added CoursesSection export
```

### User Preferences Documented
- **Button styling flexibility:** User wants ability to customize button width and border radius per use case
- **Left-aligned card titles:** Course titles should be left-aligned, not centered
- **Data-driven approach:** User prefers extracting data to arrays and mapping through them
- **Step-by-step implementation:** User prefers planning before implementation, and step-by-step execution
- **No section reordering:** Always add new sections at the end, never change existing order
