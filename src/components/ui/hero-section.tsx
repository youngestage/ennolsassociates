
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  cta: {
    primary: {
      text: string;
      href: string;
    };
    secondary?: {
      text: string;
      href: string;
    };
  };
  imageUrl: string;
  className?: string;
}

export function HeroSection({
  title,
  subtitle,
  cta,
  imageUrl,
  className,
}: HeroSectionProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-white",
        className
      )}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt="Enors Associates Hero Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-enors-blue/90 to-black/50" />
      </div>
      
      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg text-gray-100">
            {subtitle}
          </p>
          
          <div className="mt-10 flex items-center gap-x-6">
            <Button 
              asChild
              className="bg-enors-orange hover:bg-enors-red text-white rounded-md px-8 py-6 text-base"
            >
              <a href={cta.primary.href}>
                {cta.primary.text}
              </a>
            </Button>
            
            {cta.secondary && (
              <Button 
                asChild
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-enors-blue rounded-md"
              >
                <a href={cta.secondary.href} className="flex items-center">
                  {cta.secondary.text}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
