import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-hero to-hero-light rounded-lg flex items-center justify-center">
              <span className="text-hero-foreground font-bold text-sm">EC</span>
            </div>
            <span className="text-xl font-bold text-foreground">Escola Conecta</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-hero transition-colors">
              Cursos
            </a>
            <a href="#" className="text-foreground hover:text-hero transition-colors">
              Sobre
            </a>
            <a href="#" className="text-foreground hover:text-hero transition-colors">
              Instrutores
            </a>
            <a href="#" className="text-foreground hover:text-hero transition-colors">
              Contato
            </a>
          </nav>
          
          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Entrar
            </Button>
            <Button variant="hero">
              Começar Agora
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;