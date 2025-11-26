import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "O que são tubos industriais e qual a diferença para tubos comuns?",
    answer: "Os tubos industriais são produtos especialmente fabricados para suportar condições extremas de pressão, temperatura e corrosão em ambientes industriais. Diferentemente dos tubos comuns, eles seguem normas técnicas rigorosas como ASTM A106, NBR 5590 e API 5L. Principais diferenças: Resistência superior (suportam pressões até 400 bar), tolerâncias rigorosas para conexões críticas, materiais especiais com composição controlada, e certificações com documentação completa para aplicações críticas."
  },
  {
    question: "Quais normas técnicas os tubos industriais Tubonasa atendem?",
    answer: "A Tubonasa fabrica tubos industriais conforme as principais normas nacionais e internacionais: ASTM A106 (tubos sem costura para alta temperatura), ASTM A53 (tubos de aço carbono preto e galvanizado), NBR 5590 (tubos para condução de fluidos Schedule), API 5L (transporte de petróleo e gás natural), e ASME B36.10 (dimensões padronizadas). Possuímos certificação ISO 9001:2015, certificados de conformidade PED, laudos de ensaios mecânicos e químicos, e rastreabilidade completa da matéria-prima."
  },
  {
    question: "Quais são as principais aplicações dos tubos industriais?",
    answer: "Os tubos industriais Tubonasa são utilizados em diversas aplicações críticas: Indústria Petroquímica (refinarias, plantas petroquímicas, transporte de hidrocarbonetos), Geração de Energia (caldeiras de alta pressão, sistemas de vapor, usinas termelétricas), Indústria Química (reatores químicos, sistemas de refrigeração, linhas de produtos químicos agressivos), além de aplicações em siderurgia, metalurgia, indústria alimentícia, sistemas de ar comprimido e infraestrutura de gás natural."
  },
  {
    question: "Como escolher o tubo industrial correto para minha aplicação?",
    answer: "A seleção adequada depende de vários fatores técnicos: Condições de Processo (pressão de trabalho máxima, temperatura e variações térmicas, fluido transportado e sua compatibilidade química, velocidade de escoamento para evitar erosão); Fatores Ambientais (corrosão externa da atmosfera industrial, vibração de equipamentos próximos, suportação adequada, expansão térmica). Nossa equipe técnica oferece consultoria gratuita para dimensionamento e seleção do tubo industrial ideal para sua aplicação específica."
  },
  {
    question: "Qual a diferença entre tubos Schedule 40, 80 e sem costura?",
    answer: "Schedule 40: Pressão até 150 bar, aplicação em sistemas gerais de processo, espessura de parede média, custo mais econômico. Schedule 80: Pressão até 310 bar, aplicação em alta pressão e sistemas críticos, espessura de parede mais espessa, resistência superior ao Schedule 40. Sem Costura: Pressão até 400 bar, aplicação em caldeiras e alta temperatura, qualidade superior sem solda longitudinal, confiabilidade máxima para aplicações críticas. A Tubonasa oferece todos os tipos com certificação completa e suporte técnico especializado."
  },
  {
    question: "Os tubos industriais Tubonasa podem ser galvanizados?",
    answer: "Sim! A Tubonasa oferece tubos industriais com galvanização a fogo: Proteção de até 25 anos contra corrosão, espessura mínima de 85 μm de zinco, ideal para ambientes externos e agressivos, conforme normas NBR 6323 e ASTM A123. Também oferecemos outros tratamentos: primer anticorrosivo, jateamento Sa 2½, pintura industrial com sistemas epóxi/poliuretano, e tratamento fosfatizante. Vantagens: resistência superior à corrosão, baixa manutenção, aderência excepcional e proteção catódica."
  },
  {
    question: "Qual o prazo de entrega dos tubos industriais?",
    answer: "Produtos em Estoque: Entrega em 24 a 48 horas na Grande São Paulo, principais bitolas Schedule 40 e 80 disponíveis, materiais em aço carbono preto e galvanizado, certificação e documentação completa disponível. Produtos Sob Encomenda: Prazo de 15 a 30 dias úteis, tubos sem costura e inoxidáveis especiais, grandes volumes com cronograma personalizado. Contamos com logística eficiente: frota própria para entregas regionais, parcerias com transportadoras nacionais, rastreamento em tempo real e seguro total da carga."
  },
  {
    question: "Como é feito o controle de qualidade dos tubos industriais?",
    answer: "A Tubonasa mantém rigoroso controle de qualidade em todas as etapas. Matéria-Prima: seleção criteriosa de fornecedores certificados, análise química por espectrometria, ensaios mecânicos de tração, dobramento e dureza. Processo Produtivo: monitoramento contínuo dos parâmetros, inspeção dimensional com tolerâncias rigorosas, soldagem controlada e tratamento térmico quando especificado. Produto Final: ensaios não destrutivos (ultrassom e radiografia), teste hidrostático, inspeção visual, certificação completa. Contamos com laboratório próprio com equipamentos calibrados e rastreabilidade total."
  },
  {
    question: "A Tubonasa oferece suporte técnico para instalação?",
    answer: "Sim! Oferecemos suporte técnico completo: Consultoria Técnica (dimensionamento com cálculos de pressão/temperatura, seleção de materiais, procedimentos de soldagem WPS qualificados, orientações de suportação). Suporte à Instalação: orientações técnicas com melhores práticas, procedimentos de montagem adequados, controle de qualidade de soldas, testes de pressão seguros. Treinamento: capacitação de equipes técnicas, qualificação de soldadores conforme normas, técnicas de inspeção para inspetores, procedimentos operacionais. Além de assistência pós-venda continuada."
  },
  {
    question: "Qual a vida útil esperada dos tubos industriais Tubonasa?",
    answer: "A vida útil varia conforme a aplicação. Fatores que influenciam: ambiente de instalação (interno, externo ou agressivo), condições de processo (pressão, temperatura e fluido), manutenção preventiva adequada, qualidade da instalação. Expectativa de Vida Útil: Ambiente controlado (30 a 40 anos), Aplicações gerais (25 a 30 anos), Ambiente agressivo (15 a 25 anos com proteção), Alta temperatura (20 a 25 anos). Para maximizar a vida útil: seleção adequada do material, instalação qualificada, manutenção preventiva e proteção anticorrosiva adequada."
  },
  {
    question: "Como solicitar orçamento para tubos industriais?",
    answer: "Solicitar orçamento é simples e rápido! Informações necessárias: especificação técnica (norma, material e dimensões), quantidade necessária, aplicação pretendida, prazo de necessidade, local de entrega. Canais: WhatsApp 11 2954-0299 (mais rápido), Telefone 11 2954-0299, E-mail vendas@tubonasa.com.br. Nosso compromisso: resposta em até 2 horas úteis, orçamento detalhado, suporte técnico especializado, melhor preço garantido. Vantagens: 45+ anos de experiência, qualidade certificada, estoque estratégico, suporte técnico e logística eficiente."
  },
  {
    question: "A Tubonasa trabalha com projetos especiais ou sob medida?",
    answer: "Absolutamente! Atendemos projetos customizados: dimensões especiais fora do padrão, materiais específicos (ligas especiais sob consulta), tratamentos diferenciados conforme especificação, volumes grandes com contratos de fornecimento. Exemplos: refinarias (tubulações para unidades de processo), usinas (sistemas de vapor de alta pressão), petroquímicas (linhas para produtos agressivos). Nosso diferencial: 45+ anos de experiência, equipe técnica especializada, parcerias estratégicas, flexibilidade. Processo: análise técnica, proposta customizada, aprovação, produção com controle rigoroso, entrega com logística especializada."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-secondary/30" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perguntas Frequentes sobre Tubos Industriais
            </h2>
            <p className="text-lg text-muted-foreground">
              Encontre respostas para as principais dúvidas sobre tubos industriais
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
