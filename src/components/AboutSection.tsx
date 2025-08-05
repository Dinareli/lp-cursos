import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import instructor1 from "@/assets/instructor-1.jpg";
import instructor2 from "@/assets/instructor-2.jpg";
import { Users, GraduationCap, Award, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Users, value: "5000+", label: "Alunos formados" },
    { icon: GraduationCap, value: "150+", label: "Cursos disponíveis" },
    { icon: Award, value: "98%", label: "Taxa de satisfação" },
    { icon: TrendingUp, value: "85%", label: "Melhoraram de carreira" }
  ];

  const instructors = [
    {
      name: "Maria Silva",
      role: "Especialista em Desenvolvimento",
      experience: "10+ anos",
      students: "2500+",
      image: instructor1
    },
    {
      name: "João Santos", 
      role: "Expert em Marketing Digital",
      experience: "8+ anos",
      students: "1800+",
      image: instructor2
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        
        {/* About Content */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Sobre a Escola Conecta
          </Badge>
          <h2 className="text-4xl font-bold text-foreground">
            Transformando Vidas Através da Educação
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Há mais de 5 anos conectamos pessoas ao conhecimento de qualidade. 
            Nossa missão é democratizar o acesso à educação profissional de excelência, 
            preparando nossos alunos para os desafios do mercado atual.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-hero rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-hero-foreground" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Instructors Section */}
        <div id="instrutores" className="space-y-8">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-bold text-foreground">
              Nossos Instrutores Especialistas
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Aprenda com profissionais experientes que já transformaram milhares de carreiras
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {instructors.map((instructor, index) => (
              <Card key={index} className="p-8 text-center bg-card hover:shadow-[var(--shadow-card)] transition-all duration-300">
                <Avatar className="w-24 h-24 mx-auto mb-6">
                  <AvatarImage src={instructor.image} alt={instructor.name} />
                  <AvatarFallback className="text-lg">
                    {instructor.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <h4 className="text-xl font-semibold text-card-foreground mb-2">
                  {instructor.name}
                </h4>
                
                <p className="text-hero font-medium mb-4">{instructor.role}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div>
                    <div className="font-medium text-card-foreground">{instructor.experience}</div>
                    <div>Experiência</div>
                  </div>
                  <div>
                    <div className="font-medium text-card-foreground">{instructor.students}</div>
                    <div>Alunos formados</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;