import { Search, Bell } from "lucide-react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-gradient-to-b from-background/95 to-transparent px-4 py-3 md:px-8">
      <Link to="/" className="font-serif text-xl font-bold text-primary">
        Na Mesa
      </Link>
      <nav className="hidden items-center gap-6 md:flex">
        <Link to="/" className="text-sm text-foreground transition-colors hover:text-primary">
          Início
        </Link>
        <Link to="/categories" className="text-sm text-muted-foreground transition-colors hover:text-primary">
          Categorias
        </Link>
        <Link to="/my-list" className="text-sm text-muted-foreground transition-colors hover:text-primary">
          Minha Lista
        </Link>
      </nav>
      <div className="flex items-center gap-3">
        <button className="text-muted-foreground transition-colors hover:text-foreground">
          <Search className="h-5 w-5" />
        </button>
        <button className="text-muted-foreground transition-colors hover:text-foreground">
          <Bell className="h-5 w-5" />
        </button>
        <Link
          to="/profile"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground"
        >
          EU
        </Link>
      </div>
    </header>
  );
};

export default TopNav;
