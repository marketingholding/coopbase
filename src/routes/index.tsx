import { createFileRoute } from "@tanstack/react-router";
import { Check, AlertTriangle, TrendingDown, Sparkles, BarChart3, Gift, Shield, Video, Target } from "lucide-react";
import logo from "@/assets/coopbase-logo.svg";
import logoWhite from "@/assets/coopbase-logo-white.svg";

const WHATSAPP_URL =
  "https://wa.me/5582999744041?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20planos%20da%20COOPBASE.";

const DIAGNOSTICO_URL =
  "https://wa.me/5582999744041?text=Ol%C3%A1%2C%20quero%20agendar%20meu%20diagn%C3%B3stico%20gratuito%20da%20COOPBASE.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "COOPBASE — Aceleração de Crescimento para Cooperativas" },
      {
        name: "description",
        content:
          "Atraia mais cooperados, reduza custos operacionais e transforme sua cooperativa em uma máquina de crescimento previsível com o Método CoopScale™.",
      },
      { property: "og:title", content: "COOPBASE — Aceleração para Cooperativas" },
      {
        property: "og:description",
        content:
          "Estratégia, tecnologia e execução para cooperativas crescerem, atraírem cooperados e reduzirem custos.",
      },
    ],
  }),
});

type Plan = {
  name: string;
  price: string;
  priceSuffix?: string;
  objective: string;
  features: string[];
  inherits?: string;
  highlight?: boolean;
  badge?: string;
  cta?: string;
};

const recurringPlans: Plan[] = [
  {
    name: "Essencial",
    price: "R$ 4.000",
    priceSuffix: "/ mês",
    objective:
      "Para cooperativas que precisam criar presença digital e começar a se posicionar.",
    features: [
      "Presença digital ativa e consistente",
      "Conteúdo estratégico que posiciona sua cooperativa",
      "Comunicação profissional com o público",
    ],
    cta: "Ideal para sair da estagnação e começar a crescer",
  },
  {
    name: "Tração",
    price: "R$ 8.000",
    priceSuffix: "/ mês",
    objective:
      "Para cooperativas que querem atrair novos cooperados continuamente.",
    inherits: "Tudo do Essencial, mais:",
    features: [
      "Geração de novos cooperados com tráfego pago",
      "Estratégias de aquisição previsível",
      "Estruturação de funil de crescimento",
      "Landing pages focadas em conversão",
    ],
    highlight: true,
    badge: "Mais escolhido",
    cta: "Ideal para crescimento acelerado",
  },
  {
    name: "Performance",
    price: "R$ 12.000",
    priceSuffix: "/ mês",
    objective:
      "Para cooperativas que querem escala e máxima eficiência.",
    inherits: "Tudo do Tração, mais:",
    features: [
      "Otimização contínua de conversão",
      "Estratégias avançadas de crescimento",
      "Acompanhamento estratégico",
      "Estrutura completa de escala",
    ],
    cta: "Ideal para cooperativas que querem liderança no mercado",
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={
        "flex flex-col h-full rounded-lg border p-5 sm:p-6 lg:p-8 xl:p-10 transition-colors relative " +
        (plan.highlight
          ? "bg-primary text-primary-foreground border-primary"
          : "bg-card text-card-foreground border-border hover:border-primary/40")
      }
    >
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] sm:text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
          ⭐ {plan.badge}
        </span>
      )}
      <div className="mb-5 sm:mb-6">
        <p
          className={
            "text-[11px] sm:text-xs uppercase tracking-[0.2em] mb-2 sm:mb-3 " +
            (plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground")
          }
        >
          Plano
        </p>
        <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold">{plan.name}</h3>
      </div>

      <div className="mb-6 sm:mb-8">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight">
            {plan.price}
          </span>
          {plan.priceSuffix && (
            <span
              className={
                "text-xs sm:text-sm " +
                (plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground")
              }
            >
              {plan.priceSuffix}
            </span>
          )}
        </div>
      </div>

      <p
        className={
          "text-sm leading-relaxed mb-8 " +
          (plan.highlight ? "text-primary-foreground/85" : "text-muted-foreground")
        }
      >
        {plan.objective}
      </p>

      {plan.inherits && (
        <p
          className={
            "text-xs uppercase tracking-wider font-medium mb-4 " +
            (plan.highlight ? "text-primary-foreground" : "text-foreground")
          }
        >
          {plan.inherits}
        </p>
      )}

      <ul className="space-y-4 flex-1">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed">
            <Check
              className={
                "h-4 w-4 mt-0.5 shrink-0 " +
                (plan.highlight ? "text-primary-foreground" : "text-primary")
              }
              strokeWidth={2.5}
            />
            <span
              className={
                plan.highlight ? "text-primary-foreground/90" : "text-foreground/80"
              }
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {plan.cta && (
        <p
          className={
            "mt-6 pt-6 border-t text-sm font-medium " +
            (plan.highlight
              ? "border-primary-foreground/20 text-primary-foreground"
              : "border-border text-foreground")
          }
        >
          👉 {plan.cta}
        </p>
      )}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-primary">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-5 sm:py-6 flex items-center justify-between">
          <img src={logoWhite} alt="COOPBASE" className="h-8 sm:h-10 md:h-12 w-auto" />
          <a
            href="#planos"
            className="inline-flex text-xs sm:text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
          >
            Ver planos
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 pt-14 sm:pt-20 md:pt-32 pb-12 sm:pb-16 md:pb-24">
        <div className="max-w-3xl">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-primary mb-5 sm:mb-6 font-medium">
            Aceleração de crescimento para cooperativas
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 sm:mb-8">
            Atraia mais cooperados, reduza custos operacionais e transforme sua cooperativa em uma{" "}
            <span className="text-primary">máquina de crescimento previsível</span>.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 sm:mb-10">
            Enquanto outras cooperativas crescem e se modernizam, muitas ainda dependem de
            indicação e processos lentos. Nós ajudamos você a mudar isso com estratégia,
            tecnologia e execução.
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href={DIAGNOSTICO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Quero atrair mais cooperados
            </a>
            <a
              href={DIAGNOSTICO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-border px-6 sm:px-8 py-3 sm:py-4 text-sm font-medium rounded-md hover:bg-muted/50 transition-colors"
            >
              Agendar diagnóstico gratuito
            </a>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-14 sm:py-20 md:py-24">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <AlertTriangle className="h-5 w-5 text-primary" strokeWidth={2.5} />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-primary font-medium">
                Diagnóstico
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Sua cooperativa está enfrentando isso?
            </h2>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-8">
            {[
              "Dificuldade para atrair novos cooperados",
              "Baixo engajamento dos membros atuais",
              "Dependência de indicação para crescer",
              "Processos internos lentos e desorganizados",
              "Falta de presença digital estruturada",
            ].map((pain, i) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-card border border-border rounded-lg p-4 sm:p-5"
              >
                <span className="text-primary text-lg leading-none mt-0.5">✗</span>
                <span className="text-sm sm:text-base text-foreground/90">{pain}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm sm:text-base text-muted-foreground italic max-w-3xl">
            👉 Se você se identificou com 2 ou mais pontos, sua cooperativa está perdendo
            oportunidades todos os dias.
          </p>
        </div>
      </section>

      {/* Consequence */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 py-14 sm:py-20 md:py-24">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <TrendingDown className="h-5 w-5 text-primary" strokeWidth={2.5} />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-primary font-medium">
              Consequência
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            Se nada mudar, o cenário é esse:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-4xl">
          {[
            "Crescimento abaixo do potencial",
            "Perda de competitividade no mercado",
            "Cooperados desengajados",
            "Ineficiência operacional aumentando custos",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 border-l-2 border-primary pl-4 py-2"
            >
              <span className="text-sm sm:text-base text-foreground/90">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Solution — CoopScale */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-14 sm:py-20 md:py-28">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <Sparkles className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-primary-foreground/80 font-medium">
                A solução
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight mb-5 sm:mb-6">
              Conheça o Método CoopScale™
            </h2>
            <p className="text-base sm:text-lg text-primary-foreground/85 leading-relaxed">
              Um sistema estruturado que combina marketing, tecnologia e processos para
              transformar cooperativas em organizações modernas, eficientes e com crescimento
              previsível.
            </p>
          </div>

          <div className="mb-6">
            <p className="text-xs sm:text-sm uppercase tracking-wider text-primary-foreground/70 font-medium mb-5">
              Com ele você consegue:
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {[
              "Atrair novos cooperados de forma constante",
              "Aumentar o engajamento dos membros",
              "Automatizar processos internos",
              "Criar previsibilidade de crescimento",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 border border-primary-foreground/20 rounded-lg p-4 sm:p-5"
              >
                <Check className="h-5 w-5 mt-0.5 shrink-0 text-primary-foreground" strokeWidth={2.5} />
                <span className="text-sm sm:text-base text-primary-foreground/95">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Proof */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 py-14 sm:py-20 md:py-24">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <BarChart3 className="h-5 w-5 text-primary" strokeWidth={2.5} />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-primary font-medium">
              Resultados
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            Resultados que cooperativas podem alcançar
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {[
            "Aumento na entrada de novos cooperados",
            "Redução de custos operacionais",
            "Melhoria na comunicação e engajamento",
            "Estrutura digital profissional",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg p-5 sm:p-6 hover:border-primary/40 transition-colors"
            >
              <Check className="h-6 w-6 text-primary mb-4" strokeWidth={2.5} />
              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section id="planos" className="max-w-6xl mx-auto px-5 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="max-w-3xl mb-10 sm:mb-12 md:mb-16">
          <div className="flex items-center gap-4 mb-5 sm:mb-6">
            <span className="text-sm font-semibold text-primary">Planos de Aceleração</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-3 sm:mb-4">
            Escolha o plano ideal para sua cooperativa
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Soluções recorrentes desenhadas para o momento e ambição de cada cooperativa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-2xl lg:max-w-none mx-auto pt-4">
          {recurringPlans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </section>

      {/* Irresistible Offer */}
      <section className="bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-14 sm:py-20 md:py-24">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <Gift className="h-5 w-5 text-primary" strokeWidth={2.5} />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-primary font-medium">
                Oferta gratuita
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Receba um diagnóstico gratuito da sua cooperativa
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Nós vamos analisar:
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-10 max-w-4xl">
            {[
              "Como sua cooperativa está atraindo novos membros",
              "Onde você está perdendo oportunidades",
              "Quais são os gargalos de crescimento",
              "O que pode ser feito para acelerar resultados",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="h-5 w-5 mt-0.5 shrink-0 text-primary" strokeWidth={2.5} />
                <span className="text-sm sm:text-base text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm sm:text-base font-medium text-foreground mb-8">
            👉 E você recebe um plano claro de ação
          </p>

          <a
            href={DIAGNOSTICO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            Quero meu diagnóstico gratuito
          </a>
        </div>
      </section>

      {/* Differential */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 py-14 sm:py-20 md:py-24">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <Target className="h-5 w-5 text-primary" strokeWidth={2.5} />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-primary font-medium">
              Diferencial
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Não somos uma agência comum
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {[
            "Trabalhamos exclusivamente com cooperativas",
            "Entendemos os desafios reais do modelo cooperativista",
            "Aplicamos estratégias específicas para esse mercado",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg p-5 sm:p-6"
            >
              <Check className="h-6 w-6 text-primary mb-4" strokeWidth={2.5} />
              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm sm:text-base text-muted-foreground italic max-w-3xl">
          👉 Você não precisa explicar seu negócio — nós já entendemos.
        </p>
      </section>

      {/* Positioning */}
      <section className="bg-foreground text-background">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-14 sm:py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-background/60 mb-5 sm:mb-6 font-medium">
              Posicionamento
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight mb-5 sm:mb-6">
              Especialistas em crescimento de cooperativas no Brasil
            </h2>
            <p className="text-base sm:text-lg text-background/80 leading-relaxed">
              Ajudamos cooperativas a se modernizarem, crescerem e se tornarem referências no
              seu setor.
            </p>
          </div>
        </div>
      </section>

      {/* Disruptive Idea — Video Analysis */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 py-14 sm:py-20 md:py-24">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <Video className="h-5 w-5 text-primary" strokeWidth={2.5} />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-primary font-medium">
              Exclusivo
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Receba uma análise em vídeo da sua cooperativa
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Você envia suas informações e nós gravamos um vídeo personalizado mostrando:
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-10">
          {[
            "Os erros que estão travando seu crescimento",
            "Oportunidades que você não está aproveitando",
            "Como melhorar seus resultados rapidamente",
          ].map((item, i) => (
            <li
              key={i}
              className="bg-card border border-border rounded-lg p-5 sm:p-6"
            >
              <span className="text-2xl font-semibold text-primary block mb-3">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>

        <a
          href={DIAGNOSTICO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
        >
          Solicitar análise personalizada
        </a>
      </section>

      {/* Risk Reduction */}
      <section className="bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-14 sm:py-20 md:py-24">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <Shield className="h-5 w-5 text-primary" strokeWidth={2.5} />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-primary font-medium">
                Sem riscos
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
              Compromisso com resultado real
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {[
              "Sem promessas genéricas",
              "Estratégias aplicadas e testadas",
              "Foco total em resultado real",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-card border border-border rounded-lg p-5"
              >
                <Check className="h-5 w-5 mt-0.5 shrink-0 text-primary" strokeWidth={2.5} />
                <span className="text-sm sm:text-base text-foreground/90">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-20 md:py-32">
        <div className="border-t border-border pt-12 sm:pt-16 md:pt-20 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-5 sm:mb-6">
            Pronto para acelerar sua cooperativa?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 leading-relaxed">
            Pare de depender do acaso para crescer. Comece a construir um sistema
            previsível de crescimento.
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href={DIAGNOSTICO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Quero meu diagnóstico gratuito
            </a>
            <a
              href={DIAGNOSTICO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-border px-6 sm:px-8 py-3 sm:py-4 text-sm font-medium rounded-md hover:bg-muted/50 transition-colors"
            >
              Quero atrair mais cooperados agora
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-6 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs sm:text-sm text-foreground font-medium">Coopbase © 2026</p>
            <p className="text-xs text-muted-foreground mt-1">
              Especialistas em aceleração de cooperativas
            </p>
          </div>
          <img src={logo} alt="COOPBASE" className="h-5 sm:h-6 w-auto opacity-60" />
        </div>
      </footer>

      {/* WhatsApp floating button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a COOPBASE no WhatsApp"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 active:scale-95 transition-transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path d="M19.11 4.91A10.05 10.05 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.78 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.84-7.02ZM12.04 20.15h-.01a8.23 8.23 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.8-.23-.08-.4-.12-.56.13-.16.25-.64.8-.79.97-.15.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43-.14-.01-.31-.01-.48-.01-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.37 1 2.54.12.16 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.51.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.18-.48-.3Z" />
        </svg>
      </a>
    </div>
  );
}
