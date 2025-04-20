
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  location: string;
  imageUrl: string;
  completed?: boolean;
  className?: string;
}

export function ProjectCard({
  id,
  title,
  category,
  location,
  imageUrl,
  completed = true,
  className,
}: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${id}`}
      className={cn(
        "group block overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md",
        className
      )}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="absolute top-4 right-4">
          <span className={cn(
            "rounded-full px-3 py-1 text-xs font-medium text-white",
            completed ? "bg-green-500" : "bg-enors-orange"
          )}>
            {completed ? "Completed" : "Ongoing"}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="mb-2 text-sm font-medium text-enors-orange">{category}</div>
        <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-enors-blue">
          {title}
        </h3>
        <div className="flex items-center text-gray-600">
          <MapPin className="mr-1 h-4 w-4 text-enors-orange" />
          <span className="text-sm">{location}</span>
        </div>
      </div>
    </Link>
  );
}
