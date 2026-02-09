import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import ContentCard from "./ContentCard";
import type { ContentItem } from "@/data/mockData";

interface ContentCarouselProps {
  title: string;
  items: ContentItem[];
  linkTo?: string;
}

const ContentCarousel = ({ title, items, linkTo }: ContentCarouselProps) => {
  if (items.length === 0) return null;

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between px-4">
        <h2 className="font-serif text-xl font-semibold text-foreground">{title}</h2>
        {linkTo && (
          <Link
            to={linkTo}
            className="flex items-center gap-1 text-sm text-primary transition-colors hover:text-primary/80"
          >
            Ver tudo <ChevronRight className="h-4 w-4" />
          </Link>
        )}
      </div>
      <div className="scrollbar-hide flex gap-3 overflow-x-auto px-4 pb-2">
        {items.map((item) => (
          <ContentCard key={item.id} content={item} />
        ))}
      </div>
    </section>
  );
};

export default ContentCarousel;
