"use client";

import { useRef, useEffect, useState } from "react";
import PrimaryButton from "./components/ui/primary-button";
import SecondaryButton from "./components/ui/secondary-button";

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="white"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <line x1="8" y1="2" x2="8" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <line x1="3" y1="10" x2="21" y2="10" stroke="white" strokeWidth="2" />
  </svg>
);

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = 4;

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const cards = scrollContainer.querySelectorAll(".slider-card");
    const gap = 12;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setCurrentIndex(index);
          }
        });
      },
      {
        root: scrollContainer,
        threshold: 0.5,
      }
    );

    cards.forEach((card) => observer.observe(card));

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % totalCards;
        const cardWidth = scrollContainer.offsetWidth;
        scrollContainer.scrollTo({
          left: nextIndex * (cardWidth + gap),
          behavior: "smooth",
        });
        return nextIndex;
      });
    }, 3000);

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [totalCards]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-16 bg-transparent z-50">
        <nav className="flex items-center justify-between w-full h-full px-4">
          <span className="font-display text-white text-xl font-semibold tracking-wide">
            ACIC
          </span>
          <button
            className="flex flex-col justify-center items-center w-8 h-8 gap-3"
            aria-label="Open menu"
          >
            <span className="w-7 h-px bg-white rounded-full" />
            <span className="w-7 h-px bg-white rounded-full" />
          </button>
        </nav>
      </header>

      <section
        className="w-full h-dvh bg-[url('/images/hero-background.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center pt-20 px-2"
        aria-label="Hero section"
      >
        <div className="flex items-center gap-2 mt-10">
          <div className="flex flex-row-reverse items-center">
              <div className="w-7 h-7 rounded-full border-2 border-white bg-primary-600 flex items-center justify-center text-white text-xs font-sans font-medium -ml-3">
              +2k
            </div>
            <img
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop"
              alt="Student"
              className="w-7 h-7 rounded-full border-2 border-white object-cover -ml-3"
            />
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop"
              alt="Student"
              className="w-7 h-7 rounded-full border-2 border-white object-cover -ml-3"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop"
              alt="Student"
              className="w-7 h-7 rounded-full border-2 border-white object-cover -ml-3"
            />
          
          </div>
          <span className="font-sans text-white text-xs font-normal">
          Trusted Students
          </span>
        </div>
        <h1 className="font-heading text-white text-3xl font-medium text-center mt-10 leading-tight">
          Australia's most trusted education specialist
        </h1>
        <div className="flex flex-col gap-3 mt-10 max-w-sm px-4">
          <PrimaryButton icon={<PhoneIcon />} label="Request a callback" />
          <SecondaryButton icon={<CalendarIcon />} label="Free Consultation" />
        </div>
      </section>

      <section className="w-full bg-gray-100 py-20 px-4">
        <div className="w-full mx-auto p-2 rounded-2xl backdrop-blur-md bg-black/10 border border-black/5">
          <span className="text-xl font-sans font-medium text-black/60 ml-1">01</span>
          <div className="bg-white rounded-xl px-4 py-6 mt-1">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src="/icons/study-icon.png"
                  alt="Study Icon"
                  className="w-12 h-12 object-contain"
                />
                <div className="flex flex-col max-w-40">
                  <span className="font-sans text-sm font-medium text-gray-900">Study</span>
                  <span className="font-sans text-xs text-gray-500">I need help with my study plan</span>
                </div>
              </div>
              <button className="font-sans text-sm font-medium text-primary-600 hover:text-primary-700">
                View All
              </button>
            </div>
            <div ref={scrollRef} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="flex overflow-x-auto snap-x snap-mandatory gap-3 mt-6 px-1 scrollbar-hide [&::-webkit-scrollbar]:hidden">
              <div data-index="0" className="slider-card shrink-0 w-[calc(100%-2rem)] snap-start">
                <div className="bg-primary-50 rounded-xl h-40 w-full p-4 flex items-center justify-between">
                  <div className="flex flex-col gap-1 font-sans text-base">
                    <span className="text-gray-500 italic text-xs">I am a</span>
                    <span className="text-gray-900 text-base font-bold">tourist</span>
                    <span className="text-gray-500 italic text-xs">working holiday visa.</span>
                  </div>
                  <img src="/icons/city-icon.png" alt="icon" className="w-30 h-30 object-contain" />
                </div>
              </div>
              <div data-index="1" className="slider-card shrink-0 w-[calc(100%-2rem)] snap-start">
                <div className="bg-primary-50 rounded-xl h-40 w-full p-4 flex items-center justify-between">
                  <div className="flex flex-col gap-1 font-sans text-base">
                    <span className="text-gray-500 italic text-xs">I am a</span>
                    <span className="text-gray-900 text-base font-bold">student</span>
                    <span className="text-gray-500 italic text-xs">in Australia.</span>
                  </div>
                  <img src="/icons/student-australia-icon.png" alt="icon" className="w-30 h-30 object-contain" />
                </div>
              </div>
              <div data-index="2" className="slider-card shrink-0 w-[calc(100%-2rem)] snap-start">
                <div className="bg-primary-50 rounded-xl h-40 w-full p-4 flex items-center justify-between">
                  <div className="flex flex-col gap-1 font-sans text-base">
                    <span className="text-gray-500 italic text-xs">I am a</span>
                    <span className="text-gray-900 text-base font-bold">student</span>
                    <span className="text-gray-500 italic text-xs">currently overseas.</span>
                  </div>
                  <img src="/icons/overseas-icon.png" alt="icon" className="w-30 h-30 object-contain" />
                </div>
              </div>
              <div data-index="3" className="slider-card shrink-0 w-[calc(100%-2rem)] snap-start">
                <div className="bg-primary-50 rounded-xl h-40 w-full p-4 flex items-center justify-between">
                  <div className="flex flex-col gap-1 font-sans text-base">
                    <span className="text-gray-500 italic text-xs">I am a</span>
                    <span className="text-gray-900 text-base font-bold">high school student</span>
                    <span className="text-gray-500 italic text-xs">in Australia.</span>
                  </div>
                  <img src="/icons/high-school-australia-icon.png" alt="icon" className="w-30 h-30 object-contain" />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 mt-4">
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    currentIndex === index ? "bg-primary-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}