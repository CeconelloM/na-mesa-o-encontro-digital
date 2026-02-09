import { Play, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
      <img
        src={heroBanner}
        alt="Na Mesa - comunhão e aprendizado"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="overlay-full absolute inset-0" />
      <div className="absolute bottom-0 left-0 right-0 p-6 pb-10 md:p-12 md:pb-16">
        <div className="max-w-lg animate-fade-in space-y-4">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Na Mesa
          </h1>
          <p className="text-sm leading-relaxed text-secondary-foreground md:text-base">
            Um espaço de comunhão, aprendizado e conversa. Vídeo-aulas, filmes e séries
            cristãs que transformam vidas.
          </p>
          <div className="flex gap-3">
            <Button asChild className="gap-2 glow-warm">
              <Link to="/content/1">
                <Play className="h-4 w-4 fill-primary-foreground" /> Assistir
              </Link>
            </Button>
            <Button variant="secondary" asChild className="gap-2">
              <Link to="/content/1">
                <Info className="h-4 w-4" /> Mais Info
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
