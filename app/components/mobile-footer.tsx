"use client";
import Link from "next/link";
import { House, Leaf, Lightbulb } from "lucide-react";

interface MobileFooterProps {
  activeTab?: "ideas" | "home" | "projects" | "none";
  onTabChange?: (tab: "ideas" | "home" | "projects" | "none") => void;
}

export default function MobileFooter({
  activeTab = "home",
  onTabChange,
}: MobileFooterProps) {
  const handleTabChange = (tab: "ideas" | "home" | "projects" | "none") => {
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <div className="fixed bottom-4 left-0 right-0 rounded-4xl m-3 bg-white border-gray-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="flex justify-around items-center h-20 px-6">
        <Link
          href="/ideas"
          className="flex flex-col items-center"
          onClick={() => handleTabChange("ideas")}
        >
          <Lightbulb
            size={28}
            className={activeTab === "ideas" ? "text-[#228b47]" : "text-black"}
          />
        </Link>

        <Link
          href="/"
          className="flex flex-col items-center relative"
          onClick={() => handleTabChange("home")}
        >
          <House
            size={28}
            className={activeTab === "home" ? "text-[#228b47]" : "text-black"}
          />
          {activeTab === "home" && (
            <div className="absolute -bottom-6 w-12 h-1 bg-black rounded-full"></div>
          )}
        </Link>

        <Link
          href="/projects"
          className="flex flex-col items-center"
          onClick={() => handleTabChange("projects")}
        >
          <Leaf
            size={28}
            className={
              activeTab === "projects" ? "text-[#228b47]" : "text-black"
            }
          />
        </Link>
      </div>
    </div>
  );
}
