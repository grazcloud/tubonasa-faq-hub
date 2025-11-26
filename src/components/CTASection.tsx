import { Button } from "@/components/ui/button";
import { MessageCircle, FileText } from "lucide-react";

const CTASection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=551129540299", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-industrial-darker to-industrial-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Precisa de Tubos Industriais de Qualidade?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Nossa equipe técnica está pronta para ajudar você a encontrar a solução ideal para seu projeto
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
            >
              <FileText className="mr-2 h-5 w-5" />
              Solicitar Orçamento Agora
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={handleWhatsAppClick}
              className="border-2 border-white text-white hover:bg-white hover:text-industrial-darker bg-white text-industrial-darker text-lg px-8 py-6"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-gray-300 text-sm">
              Atendimento especializado de segunda a sexta, das 8h às 18h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
