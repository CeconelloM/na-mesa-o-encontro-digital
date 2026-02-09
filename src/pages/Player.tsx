import { useParams, Link } from "react-router-dom";
import { ArrowLeft, SkipBack, Play, Pause, SkipForward, Maximize, Volume2 } from "lucide-react";
import { useState } from "react";
import { getContentById } from "@/data/mockData";

const Player = () => {
  const { id } = useParams();
  const content = getContentById(id || "");
  const [playing, setPlaying] = useState(false);

  if (!content) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">Conteúdo não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      {/* Video area */}
      <div className="relative flex flex-1 items-center justify-center bg-muted">
        <img
          src={content.thumbnail}
          alt={content.title}
          className="absolute inset-0 h-full w-full object-cover opacity-30 blur-sm"
        />
        <div className="absolute inset-0 bg-background/60" />

        {/* Back button */}
        <Link
          to={`/content/${content.id}`}
          className="absolute left-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-background/50 text-foreground backdrop-blur-sm transition-colors hover:bg-background/80"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>

        {/* Center play button */}
        <button
          onClick={() => setPlaying(!playing)}
          className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-primary/90 shadow-2xl transition-transform hover:scale-110"
        >
          {playing ? (
            <Pause className="h-8 w-8 fill-primary-foreground text-primary-foreground" />
          ) : (
            <Play className="h-8 w-8 translate-x-0.5 fill-primary-foreground text-primary-foreground" />
          )}
        </button>

        {/* Title overlay */}
        <div className="absolute bottom-20 left-4 right-4 z-10">
          <h2 className="font-serif text-lg font-semibold text-foreground">{content.title}</h2>
          <p className="text-xs text-muted-foreground">{content.category} • {content.duration}</p>
        </div>

        {/* Controls bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 space-y-2 bg-gradient-to-t from-background/90 to-transparent p-4 pt-8">
          {/* Progress */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>12:34</span>
            <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-secondary">
              <div className="absolute left-0 top-0 h-full w-1/3 rounded-full bg-primary" />
            </div>
            <span>38:00</span>
          </div>
          {/* Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="text-muted-foreground hover:text-foreground">
                <Volume2 className="h-5 w-5" />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-muted-foreground hover:text-foreground">
                <SkipBack className="h-5 w-5" />
              </button>
              <button
                onClick={() => setPlaying(!playing)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground"
              >
                {playing ? <Pause className="h-4 w-4 fill-primary-foreground" /> : <Play className="h-4 w-4 translate-x-0.5 fill-primary-foreground" />}
              </button>
              <button className="text-muted-foreground hover:text-foreground">
                <SkipForward className="h-5 w-5" />
              </button>
            </div>
            <button className="text-muted-foreground hover:text-foreground">
              <Maximize className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
