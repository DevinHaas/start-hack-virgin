import Image from "next/image";
import Link from "next/link";

interface ProgramCardProps {
  title: string;
  company: string;
  partner?: string;
  progress: number;
  daysAgo?: number;
  imageSrc: string;
}

export default function ProgramCard({
  title,
  company,
  partner,
  progress,
  daysAgo,
  imageSrc,
}: ProgramCardProps) {
  // Function to get the company logo based on company name
  const getCompanyLogo = (companyName: string) => {
    if (companyName.includes("Cruises")) return "🚢";
    if (companyName.includes("Atlantic")) return "✈️";
    if (companyName.includes("Mobile")) return "📱";
    if (companyName.includes("Hotels")) return "🏨";
    return "🔴";
  };

  return (
    <Link href={"/projects/${id}"}>
      <div className="bg-white rounded-xl overflow-hidden shadow-md mb-6">
        {/* Image */}
        <div className="relative h-48 w-full">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>

          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-2">
              {getCompanyLogo(company)}
            </div>
            <div>
              {partner ? (
                <span className="text-sm font-medium">
                  {company} x {partner}
                </span>
              ) : (
                <span className="text-sm font-medium">{company}</span>
              )}
              {daysAgo && (
                <span className="text-xs text-gray-500 ml-2">
                  {daysAgo} days ago
                </span>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">Progress: {progress}%</span>
            </div>
            <div className="h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#7ae195] rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
