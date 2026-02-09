import { Settings, LogOut, Heart, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Profile = () => {
  return (
    <div className="min-h-screen space-y-6 px-4 pb-8 pt-20 md:px-8 lg:max-w-2xl lg:mx-auto">
      {/* User info */}
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
          EU
        </div>
        <div>
          <h1 className="font-serif text-xl font-bold text-foreground">Usuário</h1>
          <p className="text-sm text-muted-foreground">usuario@namesa.com</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: Heart, label: "Favoritos", value: "12" },
          { icon: Clock, label: "Assistidos", value: "28" },
          { icon: BookOpen, label: "Cursos", value: "3" },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex flex-col items-center gap-1 rounded-lg bg-card p-4">
            <Icon className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold text-foreground">{value}</span>
            <span className="text-xs text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>

      {/* Menu */}
      <div className="space-y-1">
        {[
          { icon: Heart, label: "Meus Favoritos" },
          { icon: Clock, label: "Continuar Assistindo" },
          { icon: BookOpen, label: "Meus Cursos" },
          { icon: Settings, label: "Configurações" },
        ].map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-foreground transition-colors hover:bg-secondary"
          >
            <Icon className="h-5 w-5 text-muted-foreground" />
            {label}
          </button>
        ))}
      </div>

      <Button variant="secondary" className="w-full gap-2 text-destructive">
        <LogOut className="h-4 w-4" /> Sair
      </Button>
    </div>
  );
};

export default Profile;
