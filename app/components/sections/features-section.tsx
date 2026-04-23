"use client";

import { ExpertIcon, VisaIcon, PartnershipIcon, LifetimeIcon } from "../ui/icons";

const FEATURES = [
  {
    icon: ExpertIcon,
    iconBg: "bg-secondary-100",
    iconColor: "text-secondary-600",
    title: "Expert Education Counselors",
    description: "Get personalized advice from certified education consultants.",
  },
  {
    icon: VisaIcon,
    iconBg: "bg-primary-100",
    iconColor: "text-primary-600",
    title: "End-to-End Visa Support",
    description: "From paperwork to visa approval, we handle the entire process seamlessly.",
  },
  {
    icon: PartnershipIcon,
    iconBg: "bg-tertiary-100",
    iconColor: "text-tertiary-600",
    title: "Partnerships with Top Institutions",
    description: "We're Proudly connected with leading Australian universities and College.",
  },
  {
    icon: LifetimeIcon,
    iconBg: "bg-accent-100",
    iconColor: "text-accent-600",
    title: "Lifetime Assistance",
    description: "Our support doesn't end after enrollment. We continue to guide you.",
  },
];

export default function FeaturesSection() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-4 max-w-xl mx-auto px-4">
      {FEATURES.map((feature, index) => (
        <div key={index} className="flex flex-col items-center text-center p-4">
          <div className={`w-14 h-14 rounded-full ${feature.iconBg} flex items-center justify-center mb-3`}>
            <feature.icon className={feature.iconColor} />
          </div>
          <h3 className="font-sans text-sm font-semibold text-gray-900 mb-1">
            {feature.title}
          </h3>
          <p className="font-sans text-xs text-gray-500 leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
