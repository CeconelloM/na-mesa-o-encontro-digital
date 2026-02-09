import { useParams, Link } from "react-router-dom";
import { Play, Star, Clock, Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import CommentSection from "@/components/CommentSection";
import { getContentById, mockComments } from "@/data/mockData";

const typeLabel: Record<string, string> = {
  "video-aula": "Vídeo-aula",
  filme: "Filme",
  serie: "Série",
};

const ContentDetail = () => {
  const { id } = useParams();
  const content = getContentById(id || "");

  if (!content) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-16">
        <p className="text-muted-foreground">Conteúdo não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full">
        <img
          src={content.thumbnail}
          alt={content.title}
          className="h-full w-full object-cover"
        />
        <div className="overlay-full absolute inset-0" />
        <Link
          to="/"
          className="absolute left-4 top-16 flex h-9 w-9 items-center justify-center rounded-full bg-background/50 text-foreground backdrop-blur-sm transition-colors hover:bg-background/80"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
      </div>

      {/* Content info */}
      <div className="-mt-24 relative z-10 space-y-6 px-4 pb-8 md:px-8 lg:max-w-4xl">
        <div className="space-y-3">
          <span className="inline-block rounded-md bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            {typeLabel[content.type]}
          </span>
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            {content.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" /> {content.rating}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" /> {content.year}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" /> {content.duration}
            </span>
            <span className="rounded bg-secondary px-2 py-0.5 text-xs">{content.category}</span>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-secondary-foreground md:text-base">
          {content.description}
        </p>

        <div className="flex gap-3">
          <Button asChild className="gap-2 glow-warm">
            <Link to={`/player/${content.id}`}>
              <Play className="h-4 w-4 fill-primary-foreground" /> Assistir Agora
            </Link>
          </Button>
          <Button variant="secondary" className="gap-2">
            + Minha Lista
          </Button>
        </div>

        {/* Episodes if serie */}
        {content.type === "serie" && content.episodes && (
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-foreground">Episódios</h3>
            <div className="space-y-2">
              {Array.from({ length: content.episodes }, (_, i) => (
                <Link
                  key={i}
                  to={`/player/${content.id}`}
                  className="flex items-center gap-3 rounded-lg bg-card p-3 transition-colors hover:bg-secondary"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary/20 text-sm font-semibold text-primary">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Episódio {i + 1}</p>
                    <p className="text-xs text-muted-foreground">~25 min</p>
                  </div>
                  <Play className="h-4 w-4 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Comments */}
        <div className="border-t border-border pt-6">
          <CommentSection comments={mockComments} />
        </div>
      </div>
    </div>
  );
};

export default ContentDetail;
