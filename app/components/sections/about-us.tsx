"use client";

import PrimaryButton from "../ui/primary-button";
import { PhoneIcon } from "../ui/icons";
import { LuCheck } from "react-icons/lu";

export default function AboutUsSection() {
  return (
    <section className="w-full mt-12">
      {/* Full-width GIF - no padding */}
      <div className="w-full overflow-hidden">
        <img
          src="/gifs/student-abroad.gif"
          alt="Student abroad"
          className="w-full h-auto"
        />
      </div>

      {/* Content area with padding */}
      <div className="px-4 mt-6">
        {/* Label */}
        <span className="font-sans text-xs font-medium text-primary-800 uppercase tracking-wide">
          About Us
        </span>

        {/* Title */}
        <h2 className="font-heading text-2xl font-medium text-gray-900 mt-2 leading-tight">
          The Most Recommended Education and Migration Expert - ACIC
        </h2>

        {/* Subtitle */}
        <p className="font-sans text-sm text-gray-500 mt-3 leading-relaxed">
          ACIC is an industry-leading education consulting firm that has specialized in Australian education since its establishment in 1998. ACIC has helped over 90 international students from more than 40 countries study in Australia, with many also successfully obtaining work and residency.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center shrink-0 mt-0.5">
              <LuCheck size={12} className="text-primary-600" strokeWidth={3} />
            </div>
            <span className="font-sans text-xs text-gray-700">Trusted Guidance Since 1988</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center shrink-0 mt-0.5">
              <LuCheck size={12} className="text-primary-600" strokeWidth={3} />
            </div>
            <span className="font-sans text-xs text-gray-700">Partnered with Leading Institutions</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center shrink-0 mt-0.5">
              <LuCheck size={12} className="text-primary-600" strokeWidth={3} />
            </div>
            <span className="font-sans text-xs text-gray-700">Comprehensive Support Services</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center shrink-0 mt-0.5">
              <LuCheck size={12} className="text-primary-600" strokeWidth={3} />
            </div>
            <span className="font-sans text-xs text-gray-700">Global Presence, Local Expertise</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <PrimaryButton icon={<PhoneIcon />} label="Request a Call Back" variant="gradient" />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center justify-center text-center">
            <p className="font-heading text-3xl font-bold text-primary-700">120+</p>
            <p className="font-sans text-sm text-gray-600 mt-2">Partner Institutions</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center justify-center text-center">
            <p className="font-heading text-3xl font-bold text-primary-700">30+</p>
            <p className="font-sans text-sm text-gray-600 mt-2">Years of Experience</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center justify-center text-center">
            <p className="font-heading text-3xl font-bold text-primary-700">50K</p>
            <p className="font-sans text-sm text-gray-600 mt-2">Students Assisted</p>
          </div>
        </div>
      </div>
    </section>
  );
}
