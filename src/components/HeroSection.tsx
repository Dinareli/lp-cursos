import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import heroImage from "@/assets/hero-education.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-accent to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-hero rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-hero-light rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left side - Hero content */}
          <div className="space-y-8">
            <div className="inline-flex items-center bg-hero text-hero-foreground px-4 py-2 rounded-full text-sm font-medium">
              ✨ Educação
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Escola online com
                <span className="bg-gradient-to-r from-hero to-hero-light bg-clip-text text-transparent">
                  {" "}cursos profissionais
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Aprenda com os melhores especialistas e transforme sua carreira com nossos cursos online de alta qualidade.
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button variant="hero" size="lg" className="text-base px-8 py-3">
                Explorar Cursos
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 py-3">
                Saiba Mais
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Alunos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Cursos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>
          
          {/* Right side - Registration form */}
          <div className="flex justify-center lg:justify-end">
            <Card className="p-8 w-full max-w-md shadow-[var(--shadow-card)] bg-card/80 backdrop-blur-sm border-0">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold text-card-foreground">
                    Comece hoje mesmo
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Registre-se para ter acesso aos cursos
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input id="name" placeholder="Seu nome completo" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="seu.email@exemplo.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="(11) 99999-9999" />
                  </div>
                  
                  <Button className="w-full" variant="hero">
                    Criar Conta Grátis
                  </Button>
                </div>
                
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    Já tem uma conta?{" "}
                    <a href="#" className="text-hero hover:text-hero-dark transition-colors">
                      Fazer login
                    </a>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;