"use client";

import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";

interface AccordionItemProps {
  question: string;
  answer: string;
}

function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-sm font-medium text-gray-900 pr-4 leading-relaxed">
          {question}
        </span>
        <LuChevronDown
          size={20}
          className={`text-primary-600 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-4" : "max-h-0"}`}
      >
        <p className="font-sans text-sm text-gray-500 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

const FAQS = [
  {
    id: 1,
    question: "How much does it cost to study in Australia?",
    answer:
      "Tuition fees for international students range from AUD 20,000 to 45,000 per year for undergraduate programs, and AUD 25,000 to 55,000 for postgraduate courses. Living expenses average between AUD 21,000 and 28,000 annually, depending on your city and lifestyle. Many universities offer scholarships that can significantly reduce these costs.",
  },
  {
    id: 2,
    question: "Can I work while studying in Australia?",
    answer:
      "Yes, international students on a Subclass 500 visa can work up to 48 hours per fortnight during semester and unlimited hours during holidays. The minimum wage is AUD 24.95 per hour (2025), making part-time work a viable way to cover living expenses. Popular student jobs include hospitality, retail, tutoring, and administrative roles.",
  },
  {
    id: 3,
    question: "What are the post-study work options after graduation?",
    answer:
      "Australia offers the Temporary Graduate Visa (Subclass 485), allowing graduates to stay and work for 2 to 6 years depending on qualification level and location. This provides excellent opportunities to gain international work experience and potentially transition to permanent residency through skilled migration pathways.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full mt-20 px-4 pb-16">
      <div className="max-w-xl mx-auto text-center">
        <span className="font-sans text-xs font-medium text-primary-800 uppercase tracking-wide">
          FAQ
        </span>
        <h2 className="font-heading text-2xl font-medium text-gray-900 mt-2 leading-tight">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="max-w-2xl mx-auto mt-10 bg-white rounded-2xl p-5 shadow-sm border border-gray-100/50">
        {FAQS.map((faq) => (
          <AccordionItem
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
}