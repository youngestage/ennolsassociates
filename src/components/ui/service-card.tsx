
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  icon,
  link,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md",
        className
      )}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-enors-blue/10 text-enors-blue">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mb-6 text-gray-600">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-enors-orange font-medium transition-colors hover:text-enors-red"
      >
        Learn More
        <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
}
