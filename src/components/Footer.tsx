import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import tuboLogo from "@/assets/tubonasa-logo.png";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=551129540299&text=Gostaria%20de%20solicitar%20or%C3%A7amento%20sobre%20Tubos%20Industriais.", "_blank");
  };

  return (
    <footer className="bg-industrial-darker text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <img 
              src={tuboLogo} 
              alt="Tubonasa" 
              className="h-12 mb-4 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed mb-4">
              Mais de 45 anos fornecendo tubos industriais de qualidade para o mercado brasileiro.
            </p>
          </div>

          {/* Quick Links */}
          <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://tubonasa.com.br" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="https://tubonasa.com.br" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">
                  Sobre a Empresa
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <button 
                  onClick={handleWhatsAppClick}
                  className="text-sm hover:text-primary transition-colors text-left"
                >
                  WhatsApp: (11) 2954-0299
                </button>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <a 
                  href="tel:1129540299" 
                  className="text-sm hover:text-primary transition-colors"
                >
                  (11) 2954-0299
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <a 
                  href="mailto:vendas@tubonasa.com.br" 
                  className="text-sm hover:text-primary transition-colors"
                >
                  vendas@tubonasa.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Localização</h3>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <address className="text-sm not-italic leading-relaxed">
                Av. Amadeu Poli, 60<br />
                Vila Guilherme<br />
                São Paulo/SP
              </address>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2026 Tubonasa - Todos os direitos reservados
            </p>
            <p className="text-sm text-gray-400">
              Desenvolvido com tecnologia e qualidade
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
