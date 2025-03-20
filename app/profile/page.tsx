import Image from "next/image";
import MobileFooter from "@/components/mobile-footer";

export default function ProfilePage() {
  // In a real app, you would fetch the user profile data
  // For this example, we'll use hardcoded data
  const userProfile = {
    name: "James Clear",
    avatar: "/placeholder.svg?height=200&width=200",
    points: 255,
    level: "Gold",
    levelBadge: "/placeholder.svg?height=100&width=100",
  };

  return (
    <main className="min-h-screen bg-white pb-24">
      <div className="flex flex-col items-center px-4 py-10">
        {/* Profile Picture */}
        <div className="relative w-40 h-40 mb-6">
          <Image
            src={userProfile.avatar || "/placeholder.svg"}
            alt={userProfile.name}
            fill
            className="rounded-full object-cover"
          />
        </div>

        {/* User Name */}
        <h1 className="text-4xl font-bold mb-10">{userProfile.name}</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          {/* Points Card */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col items-center">
            <h2 className="text-lg font-bold mb-4">Red Points</h2>
            <div className="w-12 h-12 mb-2">
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
            <span className="text-5xl font-bold">{userProfile.points}</span>
          </div>

          {/* Level Card */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col items-center">
            <h2 className="text-lg font-bold mb-4">Level</h2>
            <div className="relative w-16 h-16 mb-2">
              <Image
                src={userProfile.levelBadge || "/placeholder.svg"}
                alt="Level Badge"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-4xl font-bold">{userProfile.level}</span>
          </div>
        </div>

        {/* Additional profile content could go here */}
      </div>

      <MobileFooter activeTab="none" />
    </main>
  );
}
