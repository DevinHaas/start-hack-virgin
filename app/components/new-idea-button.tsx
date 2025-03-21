"use client";

import { useState, useEffect } from "react";
import { Plus } from "lucide-react";

interface NewIdeaButtonProps {
  onClick: () => void;
}

export default function NewIdeaButton({ onClick }: NewIdeaButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Trigger animation on initial render
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative overflow-hidden group flex items-center gap-2 px-4 py-2 
        rounded-full bg-[#228b47] text-white font-medium shadow-md
        transition-all duration-300 ease-in-out
        hover:shadow-lg hover:cursor-pointer hover:scale-105
        ${isAnimating ? "animate-pulse" : ""}
      `}
    >
      {/* Background animation */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-r from-[#228b47] via-[#2ecc71] to-[#228b47]
          bg-size-200 transition-all duration-500
          ${isHovered ? "bg-pos-100" : "bg-pos-0"}
        `}
      />

      {/* Content */}
      <div className="relative flex items-center gap-2">
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-[#228b47] transition-transform duration-300 group-hover:rotate-90">
          <Plus size={16} />
        </div>
        <span className="hidden sm:inline">Create New Idea</span>
        <span className="sm:hidden">New Idea</span>
      </div>
    </button>
  );
}
