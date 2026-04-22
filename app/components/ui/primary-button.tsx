"use client";

import { useState } from "react";

interface PrimaryButtonProps {
  icon: React.ReactNode;
  label: string;
}

export default function PrimaryButton({ icon, label }: PrimaryButtonProps) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  };

  return (
    <button
      className="relative flex items-center justify-center gap-3 h-12 px-5 rounded-full backdrop-blur-md bg-white/20 border border-white/20 text-white font-sans font-medium text-base overflow-hidden transition-all duration-200 hover:bg-white/30 hover:backdrop-blur-xl hover:border-white/30"
      type="button"
      onClick={handleClick}
      style={{
        WebkitTapHighlightColor: "transparent",
      }}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 10,
            height: 10,
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            transform: "translate(-50%, -50%) scale(0)",
            animation: "rippleEffect 0.6s ease-out forwards",
          }}
        />
      ))}
      <style jsx>{`
        @keyframes rippleEffect {
          to {
            transform: translate(-50%, -50%) scale(40);
            opacity: 0;
          }
        }
      `}</style>
      <span className="flex items-center justify-center z-10">{icon}</span>
      <span className="font-sans font-medium text-sm z-10">{label}</span>
    </button>
  );
}