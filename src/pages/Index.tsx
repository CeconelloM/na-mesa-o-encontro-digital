import HeroSection from "@/components/HeroSection";
import ContentCarousel from "@/components/ContentCarousel";
import { contents, getContentsByType } from "@/data/mockData";

const Index = () => {
  const videoAulas = getContentsByType("video-aula");
  const filmes = getContentsByType("filme");
  const series = getContentsByType("serie");

  return (
    <div className="space-y-8 pb-6">
      <HeroSection />
      <ContentCarousel title="Populares" items={contents} linkTo="/categories" />
      <ContentCarousel title="Vídeo-aulas" items={videoAulas} linkTo="/categories?type=video-aula" />
      <ContentCarousel title="Filmes" items={filmes} linkTo="/categories?type=filme" />
      <ContentCarousel title="Séries" items={series} linkTo="/categories?type=serie" />
    </div>
  );
};

export default Index;
