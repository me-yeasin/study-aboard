"use client";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  initials: string;
}

function StarRating() {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="#c9a227"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ quote, author, role, initials }: TestimonialCardProps) {
  return (
    <div
      className="min-w-[280px] max-w-[320px] shrink-0 backdrop-blur-xl rounded-2xl p-5 text-left"
      style={{
        background: "rgba(15, 10, 45, 0.08)",
        borderTop: "1px solid rgba(255, 255, 255, 0.65)",
        borderLeft: "1px solid rgba(255, 255, 255, 0.65)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.10)",
        borderRight: "1px solid rgba(0, 0, 0, 0.10)",
      }}
    >
      <div className="flex items-start justify-between">
        <StarRating />
        <span className="font-heading text-4xl text-primary-300 leading-none">
          "
        </span>
      </div>

      <p className="font-sans text-sm text-gray-700 mt-4 leading-relaxed">
        {quote}
      </p>

      <div className="flex items-center gap-3 mt-5 pt-4 border-t border-black/[0.07]">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
          style={{
            background: "rgba(124, 92, 255, 0.12)",
            border: "1px solid rgba(124, 92, 255, 0.25)",
          }}
        >
          <span className="font-sans text-sm font-semibold text-primary-700">
            {initials}
          </span>
        </div>
        <div>
          <p className="font-sans text-sm font-semibold text-gray-800">
            {author}
          </p>
          <p className="font-sans text-xs text-gray-500">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote: "ACIC made my dream of studying in Australia a reality. Their team guided me through every step of the visa application and helped me find the perfect university program.",
    author: "Maria Johnson",
    role: "University of Melbourne",
    initials: "MJ",
  },
  {
    quote: "The counselors at ACIC were incredibly supportive throughout my application process. I received my offer from three top universities and couldn't be happier with their service.",
    author: "James Chen",
    role: "Monash University",
    initials: "JC",
  },
  {
    quote: "From choosing the right course to settling in Sydney, ACIC was there at every step. Their expertise in student visas is unmatched.",
    author: "Priya Sharma",
    role: "University of Sydney",
    initials: "PS",
  },
  {
    quote: "I highly recommend ACIC to anyone planning to study abroad. They made the entire process stress-free and smooth.",
    author: "Ahmed Hassan",
    role: "UNSW Sydney",
    initials: "AH",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full mt-20 px-4 pb-16">
      <div className="max-w-xl mx-auto text-center">
        <span className="font-sans text-xs font-medium text-primary-800 uppercase tracking-wide">
          Our Testimonial
        </span>
        <h2 className="font-heading text-2xl font-medium text-gray-900 mt-2 leading-tight">
          What our students say
        </h2>
      </div>

      <div className="mt-8 relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div className="flex gap-4 animate-testimonial-marquee min-w-full shrink-0">
            {[...testimonials, ...testimonials].map((item, index) => (
              <TestimonialCard
                key={`${item.initials}-${index}`}
                quote={item.quote}
                author={item.author}
                role={item.role}
                initials={item.initials}
              />
            ))}
          </div>
        </div>
        <div className="overflow-hidden mt-6">
          <div className="flex gap-4 animate-testimonial-marquee-reverse min-w-full shrink-0">
            {[...testimonials, ...testimonials].map((item, index) => (
              <TestimonialCard
                key={`${item.initials}-${index}`}
                quote={item.quote}
                author={item.author}
                role={item.role}
                initials={item.initials}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}