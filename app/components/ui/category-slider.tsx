"use client";

import { useRef, useEffect, useState } from "react";

interface CardData {
  icon: string;
  prefix: string;
  keyword: string;
  suffix: string;
}

interface CategorySliderProps {
  sectionNumber: string;
  headerIcon: string;
  title: string;
  subtitle: string;
  cards: CardData[];
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function CategorySlider({
  sectionNumber,
  headerIcon,
  title,
  subtitle,
  cards,
  buttonText = "View All",
  onButtonClick,
}: CategorySliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
        const nextIndex = (prev + 1) % cards.length;
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
  }, []);

  return (
    <div className="w-full mx-auto p-2 rounded-2xl backdrop-blur-md bg-black/10 border border-black/5">
      <span className="text-xl font-sans font-medium text-black/60 ml-1">
        {sectionNumber}
      </span>
      <div className="bg-white rounded-xl px-4 py-6 mt-1">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src={headerIcon}
              alt={`${title} Icon`}
              className="w-12 h-12 object-contain"
            />
            <div className="flex flex-col max-w-40">
              <span className="font-sans text-sm font-medium text-gray-900">
                {title}
              </span>
              <span className="font-sans text-xs text-gray-500">{subtitle}</span>
            </div>
          </div>
          <button
            onClick={onButtonClick}
            className="font-sans text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            {buttonText}
          </button>
        </div>
        <div
          ref={scrollRef}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          className="flex overflow-x-auto snap-x snap-mandatory gap-3 mt-6 px-1 scrollbar-hide [&::-webkit-scrollbar]:hidden"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              data-index={index}
              className="slider-card shrink-0 w-[calc(100%-2rem)] snap-start"
            >
              <div className="bg-primary-50 rounded-xl h-40 w-full p-4 flex items-center justify-between">
                <div className="flex flex-col gap-1 font-sans text-base">
                  <span className="text-gray-500 italic text-xs">
                    {card.prefix}
                  </span>
                  <span className="text-gray-900 text-base font-bold">
                    {card.keyword}
                  </span>
                  <span className="text-gray-500 italic text-xs">
                    {card.suffix}
                  </span>
                </div>
                <img
                  src={card.icon}
                  alt="icon"
                  className="w-30 h-30 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-2 mt-4">
          {cards.map((_, index) => (
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
  );
}