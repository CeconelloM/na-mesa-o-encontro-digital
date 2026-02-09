import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import type { ContentItem } from "@/data/mockData";

interface ContentCardProps {
  content: ContentItem;
  size?: "sm" | "md" | "lg";
}

const typeLabel: Record<string, string> = {
  "video-aula": "Vídeo-aula",
  filme: "Filme",
  serie: "Série",
};

const ContentCard = ({ content, size = "md" }: ContentCardProps) => {
  const sizeClasses = {
    sm: "w-36 min-w-[9rem]",
    md: "w-44 min-w-[11rem]",
    lg: "w-56 min-w-[14rem]",
  };

  return (
    <Link
      to={`/content/${content.id}`}
      className={`${sizeClasses[size]} group flex-shrink-0 cursor-pointer`}
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
        <img
          src={content.thumbnail}
          alt={content.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/90 shadow-lg">
            <Play className="h-5 w-5 fill-primary-foreground text-primary-foreground" />
          </div>
        </div>
        <div className="absolute left-2 top-2">
          <span className="rounded-md bg-primary/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
            {typeLabel[content.type]}
          </span>
        </div>
      </div>
      <div className="mt-2 space-y-0.5">
        <h3 className="line-clamp-1 text-sm font-medium text-foreground">
          {content.title}
        </h3>
        <p className="text-xs text-muted-foreground">{content.duration}</p>
      </div>
    </Link>
  );
};

export default ContentCard;
