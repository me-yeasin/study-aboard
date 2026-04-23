"use client";

export default function Header() {
  return (
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
  );
}
