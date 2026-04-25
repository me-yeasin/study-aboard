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
    <>
      {isScrolled && (
        <div className="fixed top-0 left-0 right-0 h-16 z-40 backdrop-blur-md bg-white/20 pointer-events-none rounded-bl-4xl rounded-br-4xl" />
      )}
      <header
        className={`fixed top-4 left-1 right-1 z-50 transition-all duration-300 rounded-full ${
          isScrolled ? "bg-black/90" : "bg-transparent"
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
    </>
  );
}
