import { View, Text } from "react-native";
import React from "react";

interface GroupStatsProps {
  title: string;
  description: string;
  participants: number;
  dollarsInvested: number;
  projectsCompleted: number;
}

export default function GroupStats({
  title,
  description,
  participants,
  dollarsInvested,
  projectsCompleted,
}: GroupStatsProps) {
  return (
    <div className="mb-6 bg-white rounded-lg shadow-md p-3">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-sm text-center text-gray-600 mb-2">Participants</p>
          <p className="text-xl font-bold text-center">{participants}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-sm text-center text-gray-600 mb-2">
            Dollars invested
          </p>
          <p className="text-xl font-bold text-center">{dollarsInvested}K $</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-sm text-center text-gray-600 mb-2">
            Projects completed
          </p>
          <p className="text-xl font-bold text-center">{projectsCompleted}</p>
        </div>
      </div>
    </div>
  );
}
