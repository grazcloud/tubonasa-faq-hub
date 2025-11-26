import { Award, Building2, Package, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const differentials = [
  {
    icon: Building2,
    title: "45 Anos de Experiência",
    description: "Mais de quatro décadas fornecendo soluções em tubos industriais para o mercado brasileiro"
  },
  {
    icon: Award,
    title: "Qualidade Certificada ISO 9001",
    description: "Sistema de gestão da qualidade certificado, garantindo excelência em todos os processos"
  },
  {
    icon: Package,
    title: "Estoque Estratégico",
    description: "Principais dimensões disponíveis para pronta entrega em todo o território nacional"
  },
  {
    icon: Headphones,
    title: "Suporte Técnico Especializado",
    description: "Equipe qualificada para orientação técnica e dimensionamento"
  }
];

const DifferentialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que Escolher a Tubonasa?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Diferenciais que fazem da Tubonasa referência em tubos industriais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, index) => (
            <Card 
              key={index} 
              className="border border-border hover:border-primary transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="pt-8 pb-6 px-6 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
