"use client";

import { Building2, GraduationCap, School, BookOpen, Library, Landmark, BookMarked, ScrollText } from "lucide-react";

interface LogoItem {
  name: string;
  icon: React.ReactNode;
}

export default function BrandMarquee() {
  const logos: LogoItem[] = [
    {
      name: "University of Melbourne",
      icon: <Building2 className="w-8 h-8" />,
    },
    {
      name: "Monash University",
      icon: <GraduationCap className="w-8 h-8" />,
    },
    {
      name: "University of Sydney",
      icon: <School className="w-8 h-8" />,
    },
    {
      name: "UNSW Sydney",
      icon: <BookOpen className="w-8 h-8" />,
    },
    {
      name: "RMIT University",
      icon: <Library className="w-8 h-8" />,
    },
    {
      name: "University of Queensland",
      icon: <Landmark className="w-8 h-8" />,
    },
    {
      name: "Deakin University",
      icon: <BookMarked className="w-8 h-8" />,
    },
    {
      name: "University of Adelaide",
      icon: <ScrollText className="w-8 h-8" />,
    },
  ];

  return (
    <section className="w-full py-16 overflow-hidden bg-gray-50">
      {/* Section Label */}
      <div className="text-center mb-8 px-4">
        <span className="font-sans text-xs font-medium text-primary-800 uppercase tracking-wide">
          Trusted by
        </span>
      </div>

      {/* Marquee Container */}
      <div className="flex overflow-hidden select-none gap-8 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" style={{ '--marquee-gap': '2rem' } as React.CSSProperties}>
        {/* First set of logos */}
        <ul className="flex shrink-0 min-w-full items-center animate-marquee hover:[animation-play-state:paused] justify-around gap-8">
          {logos.map((logo, index) => (
            <li key={`first-${index}`} className="shrink-0">
              <div className="flex flex-col items-center gap-3 transition-all duration-300 hover:scale-105 group">
                <div className="text-gray-400 opacity-50 hover:opacity-100 hover:text-primary-600 transition-all duration-300">
                  {logo.icon}
                </div>
                <span className="font-sans text-xs font-medium text-gray-400 text-center max-w-[100px] leading-none">
                  {logo.name}
                </span>
              </div>
            </li>
          ))}
        </ul>

        {/* Duplicate set for seamless loop */}
        <ul className="flex shrink-0 min-w-full items-center animate-marquee hover:[animation-play-state:paused] justify-around gap-8" aria-hidden="true">
          {logos.map((logo, index) => (
            <li key={`second-${index}`} className="shrink-0">
              <div className="flex flex-col items-center gap-3 transition-all duration-300 hover:scale-105 group">
                <div className="text-gray-400 opacity-50 hover:opacity-100 hover:text-primary-600 transition-all duration-300">
                  {logo.icon}
                </div>
                <span className="font-sans text-xs font-medium text-gray-400 text-center max-w-[100px] leading-none">
                  {logo.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
