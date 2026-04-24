"use client";

import { BsChatDotsFill, BsThreadsFill } from "react-icons/bs";
import { LuClipboardList } from "react-icons/lu";

/* ─────────────────────────────────────────────
   Step data
───────────────────────────────────────────── */

const STEPS = [
  {
    id: 1,
    number: "/ 01 /",
    title: "Consultation & Career Planning",
    description:
      "Discuss your goals and choose the right course and university.",
    icon: <BsChatDotsFill size={30} color="#7c5cff" />,
    pulseAnimation: "iconPulse1 4s ease-out infinite",
  },
  {
    id: 2,
    number: "/ 02 /",
    title: "Application & Visa Assistance",
    description:
      "Get expert help with applications and visa documentation.",
    icon: <LuClipboardList size={30} color="#7c5cff" strokeWidth={1.5} />,
    pulseAnimation: "iconPulse2 4s ease-out infinite",
  },
  {
    id: 3,
    number: "/ 03 /",
    title: "Pre-Departure & Ongoing Support",
    description:
      "Receive pre-departure guidance and ongoing student support.",
    icon: <BsThreadsFill size={30} color="#7c5cff" />,
    pulseAnimation: "iconPulse3 4s ease-out infinite",
  },
];

/* ─────────────────────────────────────────────
   Beam Connector
   A structural div sitting BETWEEN two step cards.
   Height = the visible gap (h-24 = 96px).
   Contains:
     · A thin static rail (always visible)
     · A glowing beam particle that travels down
───────────────────────────────────────────── */

function BeamConnector({
  particleAnimation,
}: {
  particleAnimation: string;
}) {
  return (
    <div className="relative flex justify-center" style={{ height: 96 }}>
      {/* Static rail */}
      <div
        className="absolute top-0 bottom-0 w-[1.5px] bg-primary-100"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      />

      {/* Glowing beam particle — travels from top to bottom */}
      <div
        className="absolute w-[3px] rounded-full overflow-hidden"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          top: 0,
          height: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, transparent 0%, #7c5cff 40%, #a894ff 60%, transparent 100%)",
            animation: particleAnimation,
            filter: "drop-shadow(0 0 4px #7c5cff)",
          }}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Section
───────────────────────────────────────────── */

export default function OurProcessSection() {
  return (
    <section className="w-full mt-12 px-4">
      {/* Header — label + title (unchanged) */}
      <div className="max-w-xl mx-auto text-center">
        <span className="font-sans text-xs font-medium text-primary-800 uppercase tracking-wide">
          Our Process
        </span>
        <h2 className="font-heading text-2xl font-medium text-gray-900 mt-2 leading-tight">
          Our simple three-step process to study and migrate in Australia
        </h2>
      </div>

      {/* Steps column */}
      <div className="flex flex-col items-center mt-10 max-w-xs mx-auto">
        {STEPS.map((step, index) => {
          const isLast = index === STEPS.length - 1;

          return (
            <div key={step.id} className="w-full flex flex-col items-center">
              {/* ── Step card ─────────────────── */}
              <div className="flex flex-col items-center text-center w-full">
                {/* Step number tag */}
                <span className="font-sans text-xs text-gray-400 tracking-widest">
                  {step.number}
                </span>

                {/* Step title */}
                <h3 className="font-sans text-sm font-semibold text-gray-900 mt-1 max-w-[220px]">
                  {step.title}
                </h3>

                {/* Step description */}
                <p className="font-sans text-xs text-gray-500 mt-1 leading-relaxed max-w-[210px]">
                  {step.description}
                </p>

                {/* Icon circle */}
                <div
                  className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mt-5"
                  style={{ animation: step.pulseAnimation }}
                >
                  {step.icon}
                </div>
              </div>

              {/* ── Beam connector (between steps, not after last) ── */}
              {!isLast && (
                <BeamConnector
                  particleAnimation={
                    index === 0
                      ? "beam1Travel 4s linear infinite"
                      : "beam2Travel 4s linear infinite"
                  }
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
