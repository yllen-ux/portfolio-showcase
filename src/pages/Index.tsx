import { MessageCircle, ClipboardCheck, BookOpen, Brain, Heart, Star, ChevronRight, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import yllenPhoto from "@/assets/yllen.jpg";
import logoAios from "@/assets/logo-aios.png";

const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os atendimentos do Espaço AIOS.")}`;

const professionals = [
  {
    name: "Yllen Canarines",
    photo: yllenPhoto,
    credentials: "Pedagoga | Professora | Psicopedagoga | Neuropsicopedagoga Clínica",
    badge: "Graduanda em Análise do Comportamento Aplicada (ABA)",
    bio: [
      "Profissional da área da educação e desenvolvimento infantil, com atuação especializada em processos de aprendizagem, avaliação e intervenção psicopedagógica e neuropsicopedagógica clínica.",
      "Pedagoga e professora, com experiência no acompanhamento de crianças em suas necessidades educacionais e cognitivas, promovendo estratégias individualizadas para o fortalecimento das habilidades de aprendizagem, atenção, memória, linguagem e desenvolvimento socioemocional.",
      "Atua como Psicopedagoga e Neuropsicopedagoga Clínica, realizando atendimentos voltados à identificação e intervenção em dificuldades de aprendizagem, atrasos no desenvolvimento e estímulo das funções cognitivas.",
    ],
    bioHighlights: [
      {
        text: "Atualmente, é graduanda em Análise do Comportamento Aplicada (ABA), com foco em intervenções para ",
        highlights: ["Transtorno do Espectro Autista (TEA)", " e ", "Deficiência Intelectual"],
        suffix: ", ampliando sua formação para oferecer um atendimento ainda mais especializado, humanizado e baseado em evidências.",
      },
      {
        text: "Comprometida com o desenvolvimento integral da criança, busca promover ",
        highlights: ["autonomia", ", ", "aprendizagem significativa"],
        suffix: " e qualidade de vida às famílias atendidas pelo Espaço AIOS.",
      },
    ],
    registrations: [
      "Psicopedagogia — CBO: 2394-25",
      "Neuropsicopedagogia Clínica — CBO: 2394-40",
      "ABPp: 838",
    ],
  },
];

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
        <div className="relative max-w-5xl mx-auto px-6 pt-16 pb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--accent))] px-4 py-2 text-sm font-medium text-accent-foreground">
            <Sparkles className="h-4 w-4 text-[hsl(var(--soft-gold))]" />
            Desenvolvimento integral de crianças
          </div>

          <h1 className="mb-2 flex justify-center">
            <img
              src={logoAios}
              alt="Espaço AIOS"
              className="w-auto h-44 md:h-64 object-contain"
            />
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
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
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

      {/* Profissionais Section */}
      <section className="bg-gradient-to-b from-background to-[hsl(var(--warm-cream))]">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
              Profissionais
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Conheça quem cuida do desenvolvimento do seu filho com dedicação e técnica.
            </p>
          </div>

          <div className="space-y-16">
            {professionals.map((pro, index) => (
              <div
                key={pro.name}
                className={`flex flex-col md:flex-row items-start gap-10 md:gap-16 ${
                  index > 0 ? "pt-16 border-t border-border/50" : ""
                }`}
              >
                <div className="shrink-0 mx-auto md:mx-0">
                  <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-md ring-4 ring-[hsl(var(--accent))]">
                    <img
                      src={pro.photo}
                      alt={`${pro.name}, ${pro.credentials}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-2xl md:text-3xl font-semibold text-primary mb-2 font-heading">
                    {pro.name}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">{pro.credentials}</p>

                  {pro.badge && (
                    <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--accent))] px-4 py-1.5 text-xs font-medium text-accent-foreground mb-6">
                      <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--soft-gold))]" />
                      {pro.badge}
                    </div>
                  )}

                  <div className="space-y-3 text-base text-muted-foreground leading-relaxed">
                    {pro.bio.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                    {pro.bioHighlights?.map((block, i) => (
                      <p key={`h-${i}`}>
                        {block.text}
                        {block.highlights.map((h, j) =>
                          j % 2 === 0 ? (
                            <strong key={j} className="text-foreground">
                              {h}
                            </strong>
                          ) : (
                            <span key={j}>{h}</span>
                          )
                        )}
                        {block.suffix}
                      </p>
                    ))}
                  </div>

                  {pro.registrations.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-border/50 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground justify-center md:justify-start">
                      {pro.registrations.map((reg) => (
                        <span key={reg}>{reg}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferencial Section */}
      <section className="bg-gradient-to-b from-[hsl(var(--warm-cream))] to-background">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
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
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
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
