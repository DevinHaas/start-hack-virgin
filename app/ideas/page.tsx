"use client";
import MobileFooter from "@/components/mobile-footer";
import IdeaCard from "@/components/idea-card";
import NewIdeaButton from "@/components/new-idea-button";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { useCreateProject } from "@/hooks/useCreateProject";

export default function CommunityPage() {
  const [title, setTitle] = useState("");
  const [showNewIdeaForm, setShowNewIdeaForm] = useState(false);
  const mutation = useCreateProject();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(title, {
      onSuccess: () => setTitle(""),
    });
  };
  return (
    <main className="min-h-screen bg-white pb-24">
      <div className="px-4 py-6 space-y-4">
        <div className="sticky top-0 z-10">
          <div className="px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Community Ideas</h1>
            <NewIdeaButton onClick={() => setShowNewIdeaForm(true)} />
          </div>
        </div>

        {showNewIdeaForm && (
          <div className="px-4 py-4 mb-4 bg-gray-50 border-b">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-[#228b47]" />
                Share Your Sustainability Idea
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium mb-1"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-3 border rounded-lg"
                    placeholder="Give your idea a catchy title"
                  />
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium mb-1"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    className="w-full p-3 border rounded-lg"
                    placeholder="Describe your sustainability idea in detail..."
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#228b47] text-white rounded-lg font-medium"
                  >
                    Submit Idea
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 border border-gray-300 rounded-lg"
                    onClick={() => setShowNewIdeaForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        <IdeaCard
          title="Pedal-Powered Progress: 10,000 Free Bike Rentals for Green Commuting"
          description="I love cycling to the gym, but not everyone has a bike. This would be a great way to promote fitness and sustainability!"
          author="Emma Richard"
          daysAgo={12}
          comments={452}
          upvotes={3245}
        />

        <IdeaCard
          title="Solar-Powered Streaming: 100% Renewable Energy for Data Centers"
          description="Streaming is the future, but let's make it green! Running data centers on solar energy could make a huge impact."
          author="James Patel"
          daysAgo={12}
          comments={609}
          upvotes={4820}
        />

        <IdeaCard
          title="Plant a Tree for Every Ticket: 1 Million Trees for a Greener Future"
          description="Imagine if every train ride helped reforest the planet! This is an easy way to offset emissions."
          author="Celina Stuart"
          daysAgo={12}
          comments={721}
          upvotes={6157}
        />

        <IdeaCard
          title="Second Life for Fashion: 1 Million Items Recycled"
          description="We all have clothes we don't wear. A recycling program could make fashion more circular and less wasteful."
          author="Celina Stuart"
          daysAgo={12}
          comments={389}
          upvotes={2889}
        />

        <IdeaCard
          title="Green Stays: Carbon-Neutral Hotel Experiences"
          description="Hotels generate so much waste and energy use. What if staying at a Virgin Hotel meant zero carbon footprint?"
          author="Michael Chen"
          daysAgo={12}
          comments={215}
          upvotes={5490}
        />
      </div>

      <MobileFooter activeTab="community" />
    </main>
  );
}
