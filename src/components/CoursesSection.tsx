import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import instructor1 from "@/assets/instructor-1.jpg";
import instructor2 from "@/assets/instructor-2.jpg";
import { Clock, Users, Star } from "lucide-react";

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "Desenvolvimento Web Completo",
      description: "Aprenda HTML, CSS, JavaScript e React do zero ao avançado",
      instructor: "Maria Silva",
      instructorImage: instructor1,
      students: 234,
      rating: 4.8,
      duration: "40h",
      price: "R$ 297",
      category: "Tecnologia"
    },
    {
      id: 2,
      title: "Marketing Digital Estratégico",
      description: "Domine as estratégias de marketing digital mais eficazes",
      instructor: "João Santos",
      instructorImage: instructor2,
      students: 189,
      rating: 4.9,
      duration: "25h",
      price: "R$ 197",
      category: "Marketing"
    },
    {
      id: 3,
      title: "Design UX/UI Profissional",
      description: "Crie interfaces incríveis e experiências do usuário memoráveis",
      instructor: "Ana Costa",
      instructorImage: instructor1,
      students: 156,
      rating: 4.7,
      duration: "35h",
      price: "R$ 347",
      category: "Design"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Cursos em Destaque
          </Badge>
          <h2 className="text-4xl font-bold text-foreground">
            Nossos Cursos Mais Populares
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Desenvolvidos por especialistas da indústria para acelerar sua carreira
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 bg-card border">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="text-xs">
                    {course.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-hero transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                  {course.description}
                </p>
                
                <div className="flex items-center gap-3 mb-6">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={course.instructorImage} alt={course.instructor} />
                    <AvatarFallback>{course.instructor.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-card-foreground">{course.instructor}</p>
                    <p className="text-xs text-muted-foreground">Instrutor especialista</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students} alunos
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-hero">{course.price}</span>
                  <Button variant="hero" size="sm">
                    Inscrever-se
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Ver Todos os Cursos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;