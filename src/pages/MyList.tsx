import ContentCard from "@/components/ContentCard";
import { contents } from "@/data/mockData";

const MyList = () => {
  // Mock: show first 3 items as "saved"
  const savedItems = contents.slice(0, 3);

  return (
    <div className="min-h-screen space-y-6 px-4 pb-8 pt-20 md:px-8">
      <h1 className="font-serif text-2xl font-bold text-foreground">Minha Lista</h1>
      {savedItems.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {savedItems.map((item) => (
            <div key={item.id} className="w-full">
              <ContentCard content={item} size="lg" />
            </div>
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-muted-foreground">
          Você ainda não adicionou nada à sua lista.
        </p>
      )}
    </div>
  );
};

export default MyList;
