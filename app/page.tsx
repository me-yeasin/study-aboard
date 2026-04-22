"use client";

import PrimaryButton from "./components/ui/primary-button";
import SecondaryButton from "./components/ui/secondary-button";
import CategorySlider from "./components/ui/category-slider";
import { PhoneIcon, CalendarIcon } from "./components/ui/icons";

export default function Home() {
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
        <CategorySlider
          sectionNumber="01"
          headerIcon="/icons/study-icon.png"
          title="Study"
          subtitle="I need help with my study plan"
          buttonText="View All"
          onButtonClick={() => console.log("Study View All clicked")}
          cards={[
            {
              icon: "/icons/city-icon.png",
              prefix: "I am a",
              keyword: "tourist",
              suffix: "working holiday visa.",
            },
            {
              icon: "/icons/student-australia-icon.png",
              prefix: "I am a",
              keyword: "student",
              suffix: "in Australia.",
            },
            {
              icon: "/icons/overseas-icon.png",
              prefix: "I am a",
              keyword: "student",
              suffix: "currently overseas.",
            },
            {
              icon: "/icons/high-school-australia-icon.png",
              prefix: "I am a",
              keyword: "high school student",
              suffix: "in Australia.",
            },
          ]}
        />
        <div className="mt-8" />
        <CategorySlider
          sectionNumber="02"
          headerIcon="/icons/study-icon.png"
          title="Work"
          subtitle="I need help with my work plan"
          buttonText="View All"
          onButtonClick={() => console.log("Work View All clicked")}
          cards={[
            {
              icon: "/icons/city-icon.png",
              prefix: "I am a",
              keyword: "tourist",
              suffix: "working holiday visa.",
            },
            {
              icon: "/icons/student-australia-icon.png",
              prefix: "I am a",
              keyword: "student",
              suffix: "in Australia.",
            },
            {
              icon: "/icons/overseas-icon.png",
              prefix: "I am a",
              keyword: "student",
              suffix: "currently overseas.",
            },
            {
              icon: "/icons/high-school-australia-icon.png",
              prefix: "I am a",
              keyword: "high school student",
              suffix: "in Australia.",
            },
          ]}
        />
      </section>
    </>
  );
}