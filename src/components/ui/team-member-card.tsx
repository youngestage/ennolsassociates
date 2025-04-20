
import { cn } from "@/lib/utils";

interface SocialLink {
  platform: string;
  url: string;
}

interface TeamMemberCardProps {
  name: string;
  title: string;
  imageUrl: string;
  bio?: string;
  socialLinks?: SocialLink[];
  className?: string;
}

export function TeamMemberCard({
  name,
  title,
  imageUrl,
  bio,
  socialLinks,
  className,
}: TeamMemberCardProps) {
  return (
    <div
      className={cn(
        "group overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md",
        className
      )}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        
        {socialLinks && socialLinks.length > 0 && (
          <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white p-2 text-enors-blue hover:bg-enors-orange hover:text-white transition-colors"
                  aria-label={`${name}'s ${link.platform}`}
                >
                  {link.platform === "linkedin" && (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  )}
                  {link.platform === "twitter" && (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  )}
                  {link.platform === "facebook" && (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="mb-1 text-xl font-bold text-gray-900">{name}</h3>
        <p className="mb-3 text-sm font-medium text-enors-orange">{title}</p>
        {bio && <p className="text-gray-600 text-sm">{bio}</p>}
      </div>
    </div>
  );
}
