import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Tubos Industriais FAQ - Tubonasa | 45 Anos de Experiência</title>
        <meta 
          name="description" 
          content="Perguntas e respostas sobre tubos industriais com especialistas da Tubonasa. 45 anos de experiência em tubos Schedule 40, 80, sem costura e galvanizados para indústria." 
        />
        <meta name="keywords" content="tubos industriais, tubos schedule, tubos galvanizados, tubos sem costura, tubonasa, ASTM A106, NBR 5590, API 5L" />
        <link rel="canonical" href="https://tubonasa.com.br/faq" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Tubos Industriais FAQ - Tubonasa | 45 Anos de Experiência" />
        <meta property="og:description" content="Tire suas dúvidas sobre tubos industriais com especialistas que têm 45 anos de experiência no mercado brasileiro" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tubonasa.com.br/faq" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "O que são tubos industriais e qual a diferença para tubos comuns?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Os tubos industriais são produtos especialmente fabricados para suportar condições extremas de pressão, temperatura e corrosão em ambientes industriais."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main>
          <HeroSection />
          <DifferentialsSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
