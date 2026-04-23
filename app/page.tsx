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
        className="relative w-full min-h-dvh bg-[url('/images/hero-background.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center pt-20 px-2 pb-8"
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

      <section className="relative -mt-48 z-20 px-4 overflow-visible">
        {/* Decorative Background Circles */}
        <div className="absolute inset-0 overflow-visible pointer-events-none">
          {/* Circle #1 - Left */}
          <div className="absolute -left-20 top-0 w-48 h-48 rounded-full bg-primary-500/20 blur-2xl" />
          {/* Circle #2 - Right */}
          <div className="absolute right-0 top-40 w-56 h-56 rounded-full bg-primary-500/20 blur-2xl" />
          {/* Circle #3 - Center */}
          <div className="absolute left-1/2 -translate-x-1/2 top-80 w-44 h-44 rounded-full bg-primary-500/20 blur-2xl" />
          {/* Circle #4 - Left (lower) */}
          <div className="absolute -left-16 top-160 w-52 h-52 rounded-full bg-primary-500/30 blur-2xl" />
          {/* Circle #5 - Right (lower) */}
          <div className="absolute right-0 top-220 w-48 h-48 rounded-full bg-primary-500/50 blur-2xl" />
        </div>
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
        <CategorySlider
          sectionNumber="02"
          headerIcon="/icons/visa-issue-icon.png"
          title="Visa Issues"
          subtitle="I have problem with my visa"
          buttonText="View All"
          onButtonClick={() => console.log("Work View All clicked")}
          cards={[
            {
              icon: "/icons/expire-icon.png",
              prefix: "My current visa will",
              keyword: "Expire Soon",
              suffix: "",
            },
            {
              icon: "/icons/problems.png",
              prefix: "I have",
              keyword: "Problems",
              suffix: "with my visa.",
            },
            {
              icon: "/icons/report-icon.png",
              prefix: "I am being",
              keyword: "Reported",
              suffix: "to the Immigration Department.",
            }
          ]}
        />
        <CategorySlider
          sectionNumber="03"
          headerIcon="/icons/migration-icon.png"
          title="Migration & Visa"
          subtitle="I have question about migration and visa"
          buttonText="View All"
          onButtonClick={() => console.log("Work View All clicked")}
          cards={[
            {
              icon: "/icons/resident-icon.png",
              prefix: "Temporary & Parmanent",
              keyword: "Residency",
              suffix: "",
            },
            {
              icon: "/icons/sponsership-icon.png",
              prefix: "Employer",
              keyword: "Sponsorship",
              suffix: "",
            },
            {
              icon: "/icons/family-visa-icon.png",
              prefix: "Partner &",
              keyword: "Family Visa",
              suffix: "",
            },
            {
              icon: "/icons/invesment-icon.png",
              prefix: "Business",
              keyword: "Investment Visa",
              suffix: "",
            },
          ]}
        />

        {/* Feature Benefits Section */}
        <div className="mt-12 grid grid-cols-2 gap-4">
          {/* Feature 1 - Expert Education Counselors */}
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-14 h-14 rounded-full bg-secondary-100 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary-600">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 12v.01"/>
              </svg>
            </div>
            <h3 className="font-sans text-sm font-semibold text-gray-900 mb-1">Expert Education Counselors</h3>
            <p className="font-sans text-xs text-gray-500 leading-relaxed">Get personalized advice from certified education consultants.</p>
          </div>

          {/* Feature 2 - End-to-End Visa Support */}
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                <polyline points="14 2 14 8 20 8"/>
                <path d="M9 15l2 2 4-4"/>
              </svg>
            </div>
            <h3 className="font-sans text-sm font-semibold text-gray-900 mb-1">End-to-End Visa Support</h3>
            <p className="font-sans text-xs text-gray-500 leading-relaxed">From paperwork to visa approval, we handle the entire process seamlessly.</p>
          </div>

          {/* Feature 3 - Partnerships with Top Institutions */}
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-14 h-14 rounded-full bg-tertiary-100 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tertiary-600">
                <path d="m4 6 8-4 8 4"/>
                <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/>
                <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"/>
                <path d="M18 5v17"/>
                <path d="M6 5v17"/>
                <circle cx="12" cy="9" r="2"/>
              </svg>
            </div>
            <h3 className="font-sans text-sm font-semibold text-gray-900 mb-1">Partnerships with Top Institutions</h3>
            <p className="font-sans text-xs text-gray-500 leading-relaxed">We're Proudly connected with leading Australian universities and College.</p>
          </div>

          {/* Feature 4 - Lifetime Assistance */}
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-14 h-14 rounded-full bg-accent-100 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-600">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </div>
            <h3 className="font-sans text-sm font-semibold text-gray-900 mb-1">Lifetime Assistance</h3>
            <p className="font-sans text-xs text-gray-500 leading-relaxed">Our support doesn't end after enrollment. We continue to guide you.</p>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}