import { useState } from "react";
import ContentCard from "@/components/ContentCard";
import { contents, categories } from "@/data/mockData";

const typeFilters = [
  { label: "Todos", value: "all" },
  { label: "Vídeo-aulas", value: "video-aula" },
  { label: "Filmes", value: "filme" },
  { label: "Séries", value: "serie" },
];

const Categories = () => {
  const [activeType, setActiveType] = useState("all");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = contents.filter((c) => {
    if (activeType !== "all" && c.type !== activeType) return false;
    if (activeCategory && c.category !== activeCategory) return false;
    return true;
  });

  return (
    <div className="min-h-screen space-y-6 px-4 pb-8 pt-20 md:px-8">
      <h1 className="font-serif text-2xl font-bold text-foreground">Explorar</h1>

      {/* Type filter */}
      <div className="scrollbar-hide flex gap-2 overflow-x-auto">
        {typeFilters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveType(f.value)}
            className={`flex-shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              activeType === f.value
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Category chips */}
      <div className="scrollbar-hide flex gap-2 overflow-x-auto">
        <button
          onClick={() => setActiveCategory(null)}
          className={`flex-shrink-0 rounded-full border px-3 py-1 text-xs transition-colors ${
            !activeCategory
              ? "border-primary bg-primary/10 text-primary"
              : "border-border text-muted-foreground hover:border-primary/50"
          }`}
        >
          Todas
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex-shrink-0 rounded-full border px-3 py-1 text-xs transition-colors ${
              activeCategory === cat
                ? "border-primary bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:border-primary/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {filtered.map((item) => (
          <div key={item.id} className="w-full">
            <ContentCard content={item} size="lg" />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-muted-foreground">
          Nenhum conteúdo encontrado com esses filtros.
        </p>
      )}
    </div>
  );
};

export default Categories;
