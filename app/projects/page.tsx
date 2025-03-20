"use client";

import ProgramCard from "@/components/program-card";
import MobileFooter from "@/components/mobile-footer";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white pb-24">
      <div className="px-4 py-6 space-y-6">
        <ProgramCard
          title="Removing 5 Tonnes of Plastic from the ocean"
          company="Virgin Cruises"
          partner="THE OCEAN CLEANUP"
          progress={30}
          imageSrc="/placeholder.svg?height=200&width=600"
        />

        <ProgramCard
          title="Flying 1 Million Miles on Sustainable Aviation Fuel"
          company="Virgin Atlantic"
          daysAgo={29}
          progress={50}
          imageSrc="/placeholder.svg?height=200&width=600"
        />

        <ProgramCard
          title="Giving 20K Phones a Second Life"
          company="Virgin Mobile"
          daysAgo={56}
          progress={90}
          imageSrc="/placeholder.svg?height=200&width=600"
        />

        <ProgramCard
          title="Beach Cleanup Initiative"
          company="Virgin Hotels"
          daysAgo={14}
          progress={65}
          imageSrc="/placeholder.svg?height=200&width=600"
        />
      </div>

      <MobileFooter activeTab="projects" />
    </main>
  );
}
