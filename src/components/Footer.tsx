import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-hero-foreground rounded-lg flex items-center justify-center">
                <span className="text-hero font-bold text-sm">EC</span>
              </div>
              <span className="text-xl font-bold">Escola Conecta</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Transformando vidas através da educação online de qualidade. 
              Conectamos você ao conhecimento que precisa para evoluir profissionalmente.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <div className="space-y-2">
              <button onClick={() => document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' })} className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm text-left">
                Todos os Cursos
              </button>
              <button onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })} className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm text-left">
                Sobre Nós
              </button>
              <button onClick={() => document.getElementById('instrutores')?.scrollIntoView({ behavior: 'smooth' })} className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm text-left">
                Nossa Equipe
              </button>
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm text-left">
                Início
              </button>
              <button onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })} className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm text-left">
                Contato
              </button>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">contato@escolaconecta.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">(11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">São Paulo, SP</span>
              </div>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-primary-foreground/80 text-sm">
              Receba novidades sobre novos cursos e promoções exclusivas.
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="Seu e-mail" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" className="w-full">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Escola Conecta. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;