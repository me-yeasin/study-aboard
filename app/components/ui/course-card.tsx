"use client";

import PrimaryButton from "./primary-button";

interface CourseCardProps {
  image: string;
  isPopular?: boolean;
  location: string;
  duration: string;
  title: string;
  onViewCourse?: () => void;
}

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function CourseCard({
  image,
  isPopular = false,
  location,
  duration,
  title,
  onViewCourse,
}: CourseCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden mt-8">
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        {/* Popular Course Tag */}
        {isPopular && (
          <span className="absolute top-3 left-3 bg-primary-100 text-primary-800 text-xs font-medium px-3 py-1.5 rounded-full">
            Popular Course
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Location and Duration */}
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-1.5 text-gray-500">
            <LocationIcon />
            <span className="text-xs">{location}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-500">
            <ClockIcon />
            <span className="text-xs">{duration}</span>
          </div>
        </div>

        {/* Course Title */}
        <h3 className="font-sans text-base font-semibold text-gray-900 mb-4 leading-snug text-left">
          {title}
        </h3>

        {/* CTA Button */}
        <PrimaryButton
          icon={<ArrowRightIcon />}
          label="View Course"
          variant="gradient"
          fullWidth={true}
          rounded="md"
          onClick={onViewCourse}
        />
      </div>
    </div>
  );
}
