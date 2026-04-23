"use client";

import PrimaryButton from "../ui/primary-button";
import SecondaryButton from "../ui/secondary-button";
import { PhoneIcon, CalendarIcon } from "../ui/icons";

const AVATARS = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop",
];

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-dvh bg-[url('/images/hero-background.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center pt-20 px-2 pb-8"
      aria-label="Hero section"
    >
      {/* Avatars with +2k badge */}
      <div className="flex items-center gap-2 mt-10">
        <div className="flex flex-row-reverse items-center">
          <div className="w-7 h-7 rounded-full border-2 border-white bg-primary-600 flex items-center justify-center text-white text-xs font-sans font-medium -ml-3">
            +2k
          </div>
          {AVATARS.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Student"
              className="w-7 h-7 rounded-full border-2 border-white object-cover -ml-3"
            />
          ))}
        </div>
        <span className="font-sans text-white text-xs font-normal">
          Trusted Students
        </span>
      </div>

      {/* Heading */}
      <h1 className="font-heading text-white text-3xl font-medium text-center mt-10 leading-tight">
        Australia&apos;s most trusted education specialist
      </h1>

      {/* CTA Buttons */}
      <div className="flex flex-col gap-3 mt-10 max-w-sm px-4">
        <PrimaryButton icon={<PhoneIcon />} label="Request a callback" />
        <SecondaryButton icon={<CalendarIcon />} label="Free Consultation" />
      </div>
    </section>
  );
}
