import Image from "next/image";
import { MessageSquare, ChevronUp } from "lucide-react";
import Link from "next/link";

interface IdeaCardProps {
  title: string;
  description: string;
  author: string;
  daysAgo: number;
  comments: number;
  upvotes: number;
}

export default function IdeaCard({
  title,
  description,
  author,
  daysAgo,
  comments,
  upvotes,
}: IdeaCardProps) {
  return (
    <Link className="block" href={"/ideas/${id}"}>
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        <div className="grid grid-cols-[1fr_auto] gap-4">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-700 mb-4">{description}</p>

            <div className="flex items-center">
              <div className="relative w-8 h-8 mr-2">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt={author}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>
              <span className="font-medium mr-4">{author}</span>
              <span className="text-sm text-gray-500">{daysAgo} days ago</span>

              <div className="flex items-center ml-auto">
                <MessageSquare className="w-4 h-4 mr-1 text-gray-500" />
                <span className="font-medium">{comments}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 flex flex-col items-center justify-center p-4 border-l border-gray-200">
            <button className="text-gray-700 hover:text-[#228b47] transition-colors">
              <ChevronUp className="w-6 h-6" />
            </button>
            <span className="font-bold text-lg">
              {upvotes.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
