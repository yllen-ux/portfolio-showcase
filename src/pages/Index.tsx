import { MessageCircle, ClipboardCheck, BookOpen, Brain, Heart, Star, ChevronRight, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os atendimentos do Espaço AIOS.")}`;

const services = [
  {
    icon: ClipboardCheck,
    title: "Avaliação Completa",
    description: "Avaliação detalhada e profissional para compreender as necessidades de cada criança.",
    items: [
      "Anamnese com a família ou responsáveis",
      "Levantamento do histórico escolar",
      "Observação das habilidades cognitivas",
      "Aplicação de instrumentos específicos",
      "Relatório final com devolutiva",
      "Orientações para família e escola",
    ],
  },
  {
    icon: BookOpen,
    title: "Dificuldades de Aprendizagem",
    description: "Atendimento direcionado para superar barreiras no processo de aprendizagem.",
    items: [
      "Leitura e escrita",
      "Interpretação de textos",
      "Atenção e concentração",
      "Raciocínio lógico",
      "Organização das tarefas escolares",
      "Desenvolvimento acadêmico global",
    ],
  },
  {
    icon: Brain,
    title: "Estímulo Cognitivo",
    description: "Fortalecimento e desenvolvimento das habilidades cognitivas essenciais.",
    items: [
      "Memória e atenção",
      "Linguagem e comunicação",
      "Funções executivas",
      "Raciocínio lógico",
      "Percepção visual e auditiva",
      "Coordenação e organização mental",
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--warm-cream))] to-background" />
        <div className="relative max-w-5xl mx-auto px-6 pt-20 pb-24 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--accent))] px-4 py-2 text-sm font-medium text-accent-foreground">
            <Sparkles className="h-4 w-4 text-[hsl(var(--soft-gold))]" />
            Desenvolvimento integral de crianças e adolescentes
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-2 tracking-tight">
            Espaço{" "}
            <span className="text-primary">AIOS</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 font-light">
            Atendimentos Psicopedagógicos e Neuropsicopedagógicos
          </p>

          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-10">
            Um olhar individualizado, acolhedor e técnico, promovendo avanços nas áreas cognitiva, emocional e educacional.
          </p>

          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-[hsl(130,45%,42%)] hover:bg-[hsl(130,45%,36%)] text-white gap-3"
            asChild
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Agendar Atendimento
            </a>
          </Button>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-16 left-8 w-20 h-20 rounded-full bg-[hsl(var(--soft-sage)/0.3)] blur-2xl" />
        <div className="absolute top-32 right-12 w-28 h-28 rounded-full bg-[hsl(var(--soft-lavender)/0.3)] blur-2xl" />
        <div className="absolute bottom-10 left-1/4 w-16 h-16 rounded-full bg-[hsl(var(--soft-gold)/0.2)] blur-2xl" />
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Atendimentos
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Cada atendimento é planejado com carinho e embasamento técnico, respeitando o ritmo e a singularidade de cada criança.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-card"
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--accent))] flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <ChevronRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Diferencial Section */}
      <section className="bg-gradient-to-b from-[hsl(var(--warm-cream))] to-background">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <Heart className="h-5 w-5 text-primary" />
            <Star className="h-5 w-5 text-[hsl(var(--soft-gold))]" />
            <Heart className="h-5 w-5 text-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Nosso Diferencial
          </h2>

          <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
            Atendimento <strong className="text-foreground">humanizado, ético e personalizado</strong>, respeitando a singularidade de cada criança e família.
          </p>

          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Nosso objetivo é promover o desenvolvimento das potencialidades de cada indivíduo, favorecendo a <strong className="text-foreground">aprendizagem</strong>, a <strong className="text-foreground">autoestima</strong> e a <strong className="text-foreground">autonomia</strong>.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="rounded-3xl bg-card border border-border/50 shadow-sm p-10 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vamos conversar?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Entre em contato pelo WhatsApp e agende uma avaliação. Estamos prontos para acolher você e sua família.
          </p>
          <Button
            size="lg"
            className="rounded-full px-10 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-[hsl(130,45%,42%)] hover:bg-[hsl(130,45%,36%)] text-white gap-3"
            asChild
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Fale Conosco no WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Espaço AIOS — Atendimentos Psicopedagógicos e Neuropsicopedagógicos
        </p>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(130,45%,42%)] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        aria-label="Contato pelo WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
};

export default Index;
