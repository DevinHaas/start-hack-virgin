"use client";

import ProgramCard from "@/components/program-card";
import MobileFooter from "@/components/mobile-footer";

export default function ProjectsPage() {
  return (
    <main>
      <div className="px-4 py-6 gap-6">
        <ProgramCard
          title="Removing 5 Tonnes of Plastic from the ocean"
          company="Virgin Cruises"
          partner="THE OCEAN CLEANUP"
          progress={30}
          imageSrc="https://12mu47ig67.ufs.sh/f/7SxMDdJDmLgIqIESdQEZL4rtsd5UoiW1VAhZcl2Sa7wCfOQg"
        />

        <ProgramCard
          title="Flying 1 Million Miles on Sustainable Aviation Fuel"
          company="Virgin Atlantic"
          daysAgo={29}
          progress={50}
          imageSrc="https://12mu47ig67.ufs.sh/f/7SxMDdJDmLgIwGGKCgB1nSNlZRhxL97Jup6EGkQ2aFWed4iz"
        />

        <ProgramCard
          title="Giving 20K Phones a Second Life"
          company="Virgin Mobile"
          daysAgo={56}
          progress={90}
          imageSrc="https://12mu47ig67.ufs.sh/f/7SxMDdJDmLgIX0Hh97iY1U8d7zlpCwqBVRHI42ErYf6kFyAi"
        />
      </div>

      <MobileFooter activeTab="projects" />
    </main>
  );
}
