"use client";

import CourseCard from "../ui/course-card";

const COURSES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    isPopular: true,
    location: "Perth City",
    duration: "104 Weeks",
    title: "Hospitality & Tourism Management",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    isPopular: false,
    location: "Sydney CBD",
    duration: "52 Weeks",
    title: "Business Administration",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    isPopular: true,
    location: "Melbourne",
    duration: "156 Weeks",
    title: "Information Technology",
  },
];

export default function CoursesSection() {
  return (
    <section className="w-full mt-12 px-4">
      <div className="max-w-xl mx-auto text-center">
        {/* Tiny text */}
        <span className="font-sans text-xs font-medium text-primary-800 uppercase tracking-wide">
          Our Courses
        </span>

        {/* Title */}
        <h2 className="font-heading text-2xl font-medium text-gray-900 mt-2 leading-tight">
          Pathways for every student
        </h2>

        {/* Subtitle */}
        <p className="font-sans text-sm text-gray-500 mt-3 leading-relaxed">
          Start your journey at any level: foundation, diploma, bachelor, or master degree. Our expert consultants help you find the perfect pathway to success.
        </p>

        {/* Course Cards */}
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
      </div>
    </section>
  );
}
