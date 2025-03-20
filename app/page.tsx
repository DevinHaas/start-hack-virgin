"use client";

import { useState } from "react";
import Header from "./components/header";
import MobileFooter from "./components/mobile-footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"community" | "home" | "projects">(
    "home",
  );

  return (
    <main className="min-h-screen bg-white pb-24">
      <div className="px-6 py-8">
        <h1 className="text-4xl font-bold mb-8">Virgin Group Stats</h1>

        {/* Flourishing People Card */}
        <div className="mb-6 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold">Flourishing People</h2>
          <p className="text-gray-600 mb-6">
            Empowering individuals to take action towards sustainability.
          </p>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-center text-gray-600 mb-2">
                Participants
              </p>
              <p className="text-3xl font-bold text-center">48,732</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-center text-gray-600 mb-2">
                Dollars invested
              </p>
              <p className="text-3xl font-bold text-center">526K $</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-center text-gray-600 mb-2">
                Projects completed
              </p>
              <p className="text-3xl font-bold text-center">4,576</p>
            </div>
          </div>
        </div>

        {/* Radical Collaboration Card */}
        <div className="mb-6 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold">Radical Collaboration</h2>
          <p className="text-gray-600 mb-6">
            Creating spaces for collective action and innovation in
            sustainability.
          </p>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-center text-gray-600 mb-2">
                Participants
              </p>
              <p className="text-3xl font-bold text-center">55,890</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-center text-gray-600 mb-2">
                Dollars invested
              </p>
              <p className="text-3xl font-bold text-center">498K $</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-center text-gray-600 mb-2">
                Projects completed
              </p>
              <p className="text-3xl font-bold text-center">4,876</p>
            </div>
          </div>
        </div>

        {/* A Healthy Planet Card */}
        <div className="mb-6 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold">A healthy planet for all</h2>
          <p className="text-gray-600 mb-6">
            This objective has the goal to keep our planet safe and healthy with
            a combined effort.
          </p>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-center text-gray-600 mb-2">
                Participants
              </p>
              <p className="text-3xl font-bold text-center">50,412</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-center text-gray-600 mb-2">
                Dollars invested
              </p>
              <p className="text-3xl font-bold text-center">739K $</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-center text-gray-600 mb-2">
                Projects completed
              </p>
              <p className="text-3xl font-bold text-center">5,678</p>
            </div>
          </div>
        </div>
      </div>

      <MobileFooter activeTab={activeTab} onTabChange={setActiveTab} />
    </main>
  );
}
