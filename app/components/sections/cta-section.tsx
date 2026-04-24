"use client";

import PrimaryButton from "../ui/primary-button";
import { PhoneIcon } from "../ui/icons";

export default function CtaSection() {
  return (
    <section className="w-full mt-20 px-4 pb-16">
      <div className="relative w-full bg-gray-200 rounded-3xl shadow-sm border border-gray-100/50 px-8 py-12 flex flex-col items-center text-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{ backgroundImage: "url('/images/cta-gradient-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <img
          src="/images/plane-with-path.png"
          alt=""
          className="absolute inset-0 opacity-30 w-full h-full object-cover z-10"
        />
        <div className="relative z-20">
          <h2 className="font-heading text-2xl font-medium text-gray-900 leading-tight">
            Start your Australian journey with ACIC today
          </h2>
          <div className="mt-8 flex justify-center w-full">
            <PrimaryButton
              icon={<PhoneIcon />}
              label="Get Free Consultation"
              variant="gradient"
              rounded="lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}