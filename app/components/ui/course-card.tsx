"use client";

import PrimaryButton from "./primary-button";
import { LuMapPin, LuClock, LuArrowRight } from "react-icons/lu";

interface CourseCardProps {
  image: string;
  isPopular?: boolean;
  location: string;
  duration: string;
  title: string;
  onViewCourse?: () => void;
}

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
            <LuMapPin size={14} />
            <span className="text-xs">{location}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-500">
            <LuClock size={14} />
            <span className="text-xs">{duration}</span>
          </div>
        </div>

        {/* Course Title */}
        <h3 className="font-sans text-base font-semibold text-gray-900 mb-4 leading-snug text-left">
          {title}
        </h3>

        {/* CTA Button */}
        <PrimaryButton
          icon={<LuArrowRight size={16} color="white" />}
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
