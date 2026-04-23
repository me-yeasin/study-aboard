"use client";

import CourseCard from "../ui/course-card";

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

        {/* Course Card */}
        <CourseCard />
      </div>
    </section>
  );
}
