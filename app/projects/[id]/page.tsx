import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";

interface ProgramDetailPageProps {
  params: Promise<{ id: number }>;
}

export default async function ProgramDetailPage({
  params,
}: ProgramDetailPageProps) {
  // In a real app, you would fetch the program details based on the ID
  // For this example, we'll use hardcoded data
  const { id } = await params;
  const programDetails = {
    id: id,
    title: "Clean 5 Tonnes of plastic from the ocean",
    date: "5 days ago",
    author: {
      name: "Celina Stuart",
      image: "/placeholder.svg?height=40&width=40",
    },
    executor: {
      name: "Virgin Vines",
      image: "/placeholder.svg?height=40&width=40",
    },
    tasks: [
      {
        name: "Collecting 5 tonnes of bottles from the beach",
        progress: 85,
      },
      {
        name: "Recycling 5000 plastic bottles",
        progress: 45,
      },
    ],
    activities: [
      {
        user: {
          name: "Samira from Virgin Vines",
          image: "/placeholder.svg?height=48&width=48",
        },
        message:
          "Hey we have just managed to combine enough people for this project",
        date: "December 2025",
      },
      {
        user: {
          name: "Samira from Virgin Vines",
          image: "/placeholder.svg?height=48&width=48",
        },
        message:
          "Hey guys we have now started collecting bottles on the beach of Long Island",
        date: "December 2025",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white pb-8">
      <div className="px-6 py-6">
        <Link href="/projects" className="flex items-center text-black mb-8">
          <ArrowLeft className="mr-2" size={20} />
          <span>back to all posts</span>
        </Link>

        <h1 className="text-4xl font-bold mb-8">{programDetails.title}</h1>

        <div className="space-y-4 mb-8">
          {/* Date */}
          <div className="flex items-center">
            <div className="w-1/3">
              <span className="text-lg font-medium">Date</span>
            </div>
            <div className="w-2/3">
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-3">
                <span>{programDetails.date}</span>
              </div>
            </div>
          </div>

          {/* Author */}
          <div className="flex items-center">
            <div className="w-1/3">
              <span className="text-lg font-medium">Author</span>
            </div>
            <div className="w-2/3">
              <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 p-3">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    src={programDetails.author.image || "/placeholder.svg"}
                    alt={programDetails.author.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                </div>
                <span>{programDetails.author.name}</span>
              </div>
            </div>
          </div>

          {/* Executor */}
          <div className="flex items-center">
            <div className="w-1/3">
              <span className="text-lg font-medium">Executor</span>
            </div>
            <div className="w-2/3">
              <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 p-3">
                <div className="relative w-6 h-6 mr-2 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-xs">🍷</span>
                </div>
                <span>{programDetails.executor.name}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-8">
          <button className="flex-1 bg-[#0f172a] text-white py-3 px-4 rounded-lg font-medium">
            Participate
          </button>
          <button className="flex-1 bg-[#0f172a] text-white py-3 px-4 rounded-lg font-medium">
            Donate
          </button>
          <button className="flex-1 bg-[#0f172a] text-white py-3 px-4 rounded-lg font-medium">
            Share
          </button>
        </div>

        {/* Tasks with Progress */}
        <div className="space-y-4 mb-8">
          {programDetails.tasks.map((task, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-4"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{task.name}</span>
                <span className="font-bold">{task.progress} %</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#7ae195] rounded-full"
                  style={{ width: `${task.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Activity Feed */}
        <h2 className="text-2xl font-bold mb-4">Activity</h2>
        <div className="space-y-4">
          {programDetails.activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-4"
            >
              <div className="flex items-start gap-3">
                <div className="relative w-12 h-12 shrink-0">
                  <Image
                    src={activity.user.image || "/placeholder.svg"}
                    alt={activity.user.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{activity.user.name}</h3>
                  <p className="mb-2">{activity.message}</p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{activity.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
