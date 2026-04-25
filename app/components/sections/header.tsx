"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1 right-1 z-50 transition-all duration-300 rounded-full ${
        isScrolled ? "bg-black/90 top-4 left-1 right-1" : "bg-transparent top-0 left-0 right-0"
      }`}
    >
      <nav className="flex items-center justify-between w-full h-full px-4 py-2">
        <span className="font-display text-white text-base font-semibold tracking-wide">
          ACIC
        </span>
        <button
          className="flex flex-col justify-center items-center w-8 h-8 gap-2"
          aria-label="Open menu"
        >
          <span className="w-7 h-px bg-white rounded-full" />
          <span className="w-7 h-px bg-white rounded-full" />
        </button>
      </nav>
    </header>
  );
}
