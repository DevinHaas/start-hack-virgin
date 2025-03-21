"use client";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

interface HeaderProps {
  showPoints?: boolean;
  points?: number;
}

export default function Header({
  showPoints = true,
  points = 455,
}: HeaderProps) {
  return (
    <header className="w-full bg-white shadow-sm z-50 fixed top-0 left-0 right-0">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-12 h-12">
            <Image
              src="/LogoStartHack.png"
              alt="Virgin Logo"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
          <span className="text-2xl font-thin text-virgin-primary">Planet</span>
        </Link>

        <div className="flex items-center gap-6">
          {showPoints && (
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold">{points}</span>
              <div className="w-6 h-6">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z"
                    fill="#ff0000"
                  />
                </svg>
              </div>
            </div>
          )}

          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
