"use client";

import MobileFooter from "./components/mobile-footer";
import GroupStats from "./components/group-stats";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-24">
      <GroupStats
        title="Flourishing People"
        description="Empowering individuals to take action towards sustainability."
        participants={43598}
        dollarsInvested={789}
        projectsCompleted={546}
      />

      {/* Radical Collaboration */}
      <GroupStats
        title="Radical Collaboration"
        description="Creating spaces for collective action and innovation in sustainability."
        participants={55890}
        dollarsInvested={498000}
        projectsCompleted={4876}
      />

      {/* A Healthy Planet */}
      <GroupStats
        title="A Healthy Planet for All"
        description="This objective has the goal to keep our planet safe and healthy with a combined effort."
        participants={50412}
        dollarsInvested={739000}
        projectsCompleted={5678}
      />
      <MobileFooter></MobileFooter>
    </main>
  );
}
