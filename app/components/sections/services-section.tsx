"use client";

import CategorySlider from "../ui/category-slider";

const STUDY_CARDS = [
  { icon: "/icons/city-icon.png", prefix: "I am a", keyword: "tourist", suffix: "working holiday visa." },
  { icon: "/icons/student-australia-icon.png", prefix: "I am a", keyword: "student", suffix: "in Australia." },
  { icon: "/icons/overseas-icon.png", prefix: "I am a", keyword: "student", suffix: "currently overseas." },
  { icon: "/icons/high-school-australia-icon.png", prefix: "I am a", keyword: "high school student", suffix: "in Australia." },
];

const VISA_CARDS = [
  { icon: "/icons/expire-icon.png", prefix: "My current visa will", keyword: "Expire Soon", suffix: "" },
  { icon: "/icons/problems.png", prefix: "I have", keyword: "Problems", suffix: "with my visa." },
  { icon: "/icons/report-icon.png", prefix: "I am being", keyword: "Reported", suffix: "to the Immigration Department." },
];

const MIGRATION_CARDS = [
  { icon: "/icons/resident-icon.png", prefix: "Temporary & Parmanent", keyword: "Residency", suffix: "" },
  { icon: "/icons/sponsership-icon.png", prefix: "Employer", keyword: "Sponsorship", suffix: "" },
  { icon: "/icons/family-visa-icon.png", prefix: "Partner &", keyword: "Family Visa", suffix: "" },
  { icon: "/icons/invesment-icon.png", prefix: "Business", keyword: "Investment Visa", suffix: "" },
];

export default function ServicesSection() {
  return (
    <section className="relative -mt-54 z-20 px-4 overflow-visible">
      {/* Decorative Background Circles */}
      <div className="absolute inset-0 overflow-visible pointer-events-none">
        <div className="absolute -left-20 top-0 w-48 h-48 rounded-full bg-primary-500/20 blur-2xl" />
        <div className="absolute right-0 top-40 w-56 h-56 rounded-full bg-primary-500/20 blur-2xl" />
        <div className="absolute left-1/2 -translate-x-1/2 top-80 w-44 h-44 rounded-full bg-primary-500/20 blur-2xl" />
        <div className="absolute -left-16 top-160 w-52 h-52 rounded-full bg-primary-500/30 blur-2xl" />
        <div className="absolute right-0 top-220 w-48 h-48 rounded-full bg-primary-500/50 blur-2xl" />
      </div>

      {/* Sliders */}
      <div className="relative z-10 flex flex-col gap-4 max-w-xl mx-auto">
        <CategorySlider
          sectionNumber="01"
          sectionNumberColor="text-white/70"
          backdropBlur="backdrop-blur-2xl"
          headerIcon="/icons/study-icon.png"
          title="Study"
          subtitle="I need help with my study plan"
          buttonText="View All"
          onButtonClick={() => console.log("Study View All clicked")}
          cards={STUDY_CARDS}
        />

        <CategorySlider
          sectionNumber="02"
          headerIcon="/icons/visa-issue-icon.png"
          title="Visa Issues"
          subtitle="I have problem with my visa"
          buttonText="View All"
          onButtonClick={() => console.log("Visa Issues View All clicked")}
          cards={VISA_CARDS}
        />

        <CategorySlider
          sectionNumber="03"
          headerIcon="/icons/migration-icon.png"
          title="Migration & Visa"
          subtitle="I have question about migration and visa"
          buttonText="View All"
          onButtonClick={() => console.log("Migration View All clicked")}
          cards={MIGRATION_CARDS}
        />
      </div>
    </section>
  );
}
