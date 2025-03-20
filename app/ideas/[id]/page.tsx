import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronUp } from "lucide-react";

interface IdeaDetailPageProps {
  params: Promise<{ id: number }>;
}

export default async function IdeaDetailPage({ params }: IdeaDetailPageProps) {
  // In a real app, you would fetch the idea details based on the ID
  // For this example, we'll use hardcoded data
  const { id } = await params;
  const ideaDetails = {
    id: id,
    title: "Clean 5 Tonnes of plastic from the ocean",
    upvotes: 155,
    date: "5 days ago",
    author: {
      name: "Virgin Vines",
      image: "/placeholder.svg?height=32&width=32",
    },
    executor: {
      name: "Celina Stuart",
      image: "/placeholder.svg?height=32&width=32",
    },
    comments: [],
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="px-6 py-6">
        <Link href="/ideas" className="flex items-center text-black mb-8">
          <ArrowLeft className="mr-2" size={20} />
          <span>back to all posts</span>
        </Link>

        <h1 className="text-4xl font-bold mb-8">{ideaDetails.title}</h1>

        <div className="space-y-4 mb-8">
          {/* Upvoaters */}
          <div className="flex items-center">
            <div className="w-1/3">
              <span className="text-lg font-medium">Upvoaters</span>
            </div>
            <div className="w-2/3">
              <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 p-3">
                <ChevronUp className="mr-2" size={20} />
                <span className="font-medium">{ideaDetails.upvotes}</span>
              </div>
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center">
            <div className="w-1/3">
              <span className="text-lg font-medium">Date</span>
            </div>
            <div className="w-2/3">
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-3">
                <span>{ideaDetails.date}</span>
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
                <div className="relative w-6 h-6 mr-2 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-xs">🍷</span>
                </div>
                <span>{ideaDetails.author.name}</span>
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
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    src={ideaDetails.executor.image || "/placeholder.svg"}
                    alt={ideaDetails.executor.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                </div>
                <span>{ideaDetails.executor.name}</span>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Comments</h2>

        {/* Comments would go here */}
        <div className="space-y-4">
          {ideaDetails.comments.length === 0 ? (
            <p className="text-gray-500">
              No comments yet. Be the first to comment!
            </p>
          ) : (
            ideaDetails.comments.map((comment, index) => (
              <div key={index} className="p-4 border rounded-lg">
                {/* Comment content would go here */}
              </div>
            ))
          )}
        </div>

        {/* Comment input */}
        <div className="mt-6">
          <textarea
            className="w-full p-3 border rounded-lg"
            rows={3}
            placeholder="Add a comment..."
          />
          <button className="mt-2 px-4 py-2 bg-[#228b47] text-white rounded-lg">
            Post Comment
          </button>
        </div>
      </div>
    </main>
  );
}
