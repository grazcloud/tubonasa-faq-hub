import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Phone } from "lucide-react";
import heroImage from "@/assets/hero-industrial-pipes.jpg";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=551129540299", "_blank");
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Tubos industriais modernos em operação" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-darker/95 via-industrial-darker/85 to-industrial-darker/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <Badge className="mb-6 bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-4 py-2">
            ✓ 45 Anos de Experiência
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Tubos Industriais: Perguntas e Respostas
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Tire suas dúvidas com especialistas que têm 45 anos de experiência
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Fale com Nossos Especialistas
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={handleWhatsAppClick}
              className="border-2 border-white text-white hover:bg-white hover:text-industrial-darker text-lg px-8 py-6"
            >
              <Phone className="mr-2 h-5 w-5" />
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
