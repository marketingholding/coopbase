import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Video,
  PlayCircle,
  Star,
} from "lucide-react";
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
    objective: "Para cooperativas que querem atrair novos cooperados continuamente.",
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
    objective: "Para cooperativas que querem escala e máxima eficiência.",
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
  const isHighlight = plan.highlight;
  return (
    <div
      className={
        "group relative flex h-full flex-col rounded-2xl p-6 sm:p-8 transition-all duration-300 " +
        (isHighlight
          ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/20 lg:-translate-y-4 lg:scale-[1.02]"
          : "bg-card text-card-foreground border border-border hover:border-primary/40 hover:-translate-y-1")
      }
    >
      {plan.badge && (
        <span className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-background">
          <Star className="h-3 w-3 fill-current" /> {plan.badge}
        </span>
      )}

      <div className="mb-6">
        <h3 className="mb-1 text-xl font-semibold">{plan.name}</h3>
        <p
          className={
            "text-sm leading-relaxed " +
            (isHighlight ? "text-primary-foreground/80" : "text-muted-foreground")
          }
        >
          {plan.objective}
        </p>
      </div>

      <div
        className={
          "mb-6 flex items-baseline gap-2 border-b pb-6 " +
          (isHighlight ? "border-primary-foreground/20" : "border-border")
        }
      >
        <span className="text-4xl font-semibold tracking-tight sm:text-5xl">{plan.price}</span>
        {plan.priceSuffix && (
          <span
            className={
              "text-sm " + (isHighlight ? "text-primary-foreground/70" : "text-muted-foreground")
            }
          >
            {plan.priceSuffix}
          </span>
        )}
      </div>

      {plan.inherits && (
        <p
          className={
            "mb-4 text-xs font-semibold uppercase tracking-wider " +
            (isHighlight ? "text-primary-foreground" : "text-foreground")
          }
        >
          {plan.inherits}
        </p>
      )}

      <ul className="mb-6 flex-1 space-y-3">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed">
            <span
              className={
                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full " +
                (isHighlight
                  ? "bg-primary-foreground/15 text-primary-foreground"
                  : "bg-primary/10 text-primary")
              }
            >
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            <span className={isHighlight ? "text-primary-foreground/95" : "text-foreground/85"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={DIAGNOSTICO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={
          "group/btn inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-all " +
          (isHighlight
            ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            : "border border-border bg-background hover:border-primary hover:bg-primary hover:text-primary-foreground")
        }
      >
        Começar com {plan.name}
        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
      </a>

      {plan.cta && (
        <p
          className={
            "mt-4 text-center text-xs italic " +
            (isHighlight ? "text-primary-foreground/70" : "text-muted-foreground")
          }
        >
          {plan.cta}
        </p>
      )}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Sticky Nav */}
      <header className="glass sticky top-0 z-40 border-b border-border/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
          <img src={logo} alt="COOPBASE" className="h-8 w-auto sm:h-9" />
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#metodo" className="text-sm text-muted-foreground transition hover:text-foreground">
              Método
            </a>
            <a href="#planos" className="text-sm text-muted-foreground transition hover:text-foreground">
              Planos
            </a>
            <a href="#diagnostico" className="text-sm text-muted-foreground transition hover:text-foreground">
              Diagnóstico
            </a>
          </nav>
          <a
            href={DIAGNOSTICO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition hover:bg-foreground/90 sm:text-sm"
          >
            Diagnóstico grátis
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      {/* Hero — assimétrico com glow */}
      <section className="relative overflow-hidden">
        <div className="bg-radial-primary absolute inset-0 -z-10" />
        <div className="bg-grid absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />

        <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 md:pb-36 md:pt-32">
          <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Aceleração para cooperativas modernas
          </div>

          <h1
            className="animate-fade-up mt-6 max-w-5xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.1s" }}
          >
            Atraia mais cooperados,{" "}
            <span className="text-gradient">reduza custos</span> e cresça com{" "}
            <span className="italic text-primary">previsibilidade</span>.
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg md:text-xl"
            style={{ animationDelay: "0.2s" }}
          >
            Enquanto outras cooperativas crescem e se modernizam, muitas ainda dependem de
            indicação e processos lentos. Nós mudamos isso com{" "}
            <span className="font-medium text-foreground">estratégia, tecnologia e execução</span>.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href={DIAGNOSTICO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition hover:shadow-xl hover:shadow-primary/30 sm:px-8 sm:py-4"
            >
              Quero atrair mais cooperados
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#planos"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-6 py-3.5 text-sm font-medium backdrop-blur transition hover:border-foreground/30 sm:px-8 sm:py-4"
            >
              <PlayCircle className="h-4 w-4" />
              Conheça o método
            </a>
          </div>

          {/* Stats faixa */}
          <div
            className="animate-fade-up mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-10 sm:mt-20 sm:grid-cols-4 sm:gap-x-10"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { v: "+ cooperados", l: "Crescimento previsível" },
              { v: "− custos", l: "Eficiência operacional" },
              { v: "100%", l: "Foco em cooperativas" },
              { v: "3 frentes", l: "Marketing · Tech · Processos" },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-2xl font-semibold tracking-tight sm:text-3xl">{s.v}</p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee de "dores" — movimento, leveza */}
      <section className="border-y border-border bg-muted/30 py-6">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12 text-sm text-muted-foreground">
            {[
              "Dificuldade para atrair novos cooperados",
              "Baixo engajamento dos membros",
              "Dependência de indicação",
              "Processos internos lentos",
              "Falta de presença digital",
              "Crescimento abaixo do potencial",
            ]
              .concat([
                "Dificuldade para atrair novos cooperados",
                "Baixo engajamento dos membros",
                "Dependência de indicação",
                "Processos internos lentos",
                "Falta de presença digital",
                "Crescimento abaixo do potencial",
              ])
              .map((t, i) => (
                <span key={i} className="flex items-center gap-3 whitespace-nowrap">
                  <span className="text-primary">✗</span>
                  {t}
                </span>
              ))}
          </div>
        </div>
      </section>

      {/* Pain x Solution — split */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              O problema
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Sua cooperativa pode estar{" "}
              <span className="text-muted-foreground">perdendo oportunidades</span> todos os dias.
            </h2>
            <ul className="mt-8 space-y-3">
              {[
                "Crescimento abaixo do potencial",
                "Perda de competitividade no mercado",
                "Cooperados desengajados",
                "Ineficiência operacional aumentando custos",
              ].map((t, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                    ✗
                  </span>
                  <span className="text-sm text-foreground/90 sm:text-base">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:pl-8 md:pt-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              A virada
            </span>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Com método e execução, o jogo muda em poucos meses.
            </h3>
            <p className="mt-4 text-muted-foreground">
              Não é sorte. É um sistema testado, aplicado por uma equipe que vive o universo
              cooperativista todos os dias.
            </p>

            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold">Diagnóstico gratuito</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Em 1 conversa identificamos os 3 maiores gargalos da sua cooperativa — e o
                caminho para destravar cada um.
              </p>
              <a
                href={DIAGNOSTICO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2 transition-all"
              >
                Quero meu diagnóstico
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Método CoopScale — bento */}
      <section id="metodo" className="bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-background/20 px-3 py-1 text-xs uppercase tracking-wider text-background/70">
              <Sparkles className="h-3 w-3" />
              Método CoopScale™
            </span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Marketing, tecnologia e processos —{" "}
              <span className="text-background/60">orquestrados</span>.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-background/70 sm:text-lg">
              Um sistema estruturado para transformar cooperativas em organizações modernas,
              eficientes e com crescimento previsível.
            </p>
          </div>

          {/* Bento grid */}
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {/* Card grande */}
            <div className="md:col-span-2 md:row-span-2 rounded-2xl border border-background/10 bg-background/5 p-6 sm:p-8">
              <Users className="h-7 w-7 text-primary" strokeWidth={1.8} />
              <h3 className="mt-6 text-xl font-semibold sm:text-2xl">
                Atrair novos cooperados de forma constante
              </h3>
              <p className="mt-3 max-w-md text-background/70">
                Funis de aquisição, conteúdo posicionador e tráfego pago alinhados ao perfil de
                cooperado ideal — sem depender de indicação.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {["Conteúdo", "Tráfego", "Conversão"].map((t) => (
                  <div
                    key={t}
                    className="rounded-lg border border-background/10 bg-background/5 px-3 py-2 text-center text-xs text-background/80"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-background/10 bg-background/5 p-6">
              <TrendingUp className="h-6 w-6 text-primary" strokeWidth={1.8} />
              <h3 className="mt-5 text-base font-semibold">Engajamento dos membros</h3>
              <p className="mt-2 text-sm text-background/70">
                Comunicação contínua que mantém o cooperado ativo e participativo.
              </p>
            </div>

            <div className="rounded-2xl border border-background/10 bg-background/5 p-6">
              <Zap className="h-6 w-6 text-primary" strokeWidth={1.8} />
              <h3 className="mt-5 text-base font-semibold">Processos automatizados</h3>
              <p className="mt-2 text-sm text-background/70">
                Menos retrabalho, menos custo, mais agilidade nas operações internas.
              </p>
            </div>

            <div className="rounded-2xl border border-background/10 bg-background/5 p-6 md:col-span-3">
              <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-base font-semibold">Previsibilidade de crescimento</h3>
                  <p className="mt-1 text-sm text-background/70">
                    Você sabe quanto entra, quanto custa e o que esperar de cada mês.
                  </p>
                </div>
                <a
                  href={DIAGNOSTICO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-background/90 transition"
                >
                  Aplicar à minha cooperativa
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Planos de aceleração
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Escolha o ritmo do seu crescimento.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Soluções recorrentes desenhadas para o momento e a ambição de cada cooperativa.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-center lg:gap-6">
          {recurringPlans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Não sabe qual escolher?{" "}
          <a
            href={DIAGNOSTICO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
          >
            Fale conosco
          </a>{" "}
          — recomendamos o ideal no diagnóstico.
        </p>
      </section>

      {/* Diferencial — split com texto grande */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Diferencial
              </span>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Não somos uma agência comum.
              </h2>
              <p className="mt-5 text-muted-foreground">
                Você não precisa explicar seu negócio — nós já entendemos.
              </p>
            </div>

            <div className="md:col-span-7">
              <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border">
                {[
                  {
                    t: "Exclusivo para cooperativas",
                    d: "Trabalhamos só com cooperativas — sem distrações de outros mercados.",
                  },
                  {
                    t: "Conhecimento real do modelo",
                    d: "Entendemos governança, conselho, assembleias e a cultura cooperativista.",
                  },
                  {
                    t: "Estratégias específicas",
                    d: "Aplicamos táticas validadas no setor, não fórmulas genéricas.",
                  },
                ].map((d, i) => (
                  <div key={i} className="bg-background p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl font-semibold tabular-nums text-primary">
                        0{i + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold">{d.t}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{d.d}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Análise em vídeo — destaque diferenciador */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12 md:p-16">
          <div className="bg-radial-primary absolute inset-0 -z-10 opacity-50" />
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                <Video className="h-3.5 w-3.5" />
                Exclusivo
              </span>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Receba uma análise{" "}
                <span className="italic text-primary">em vídeo</span> da sua cooperativa.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Você envia suas informações e gravamos um vídeo personalizado com diagnóstico e
                plano de ação.
              </p>
              <a
                href={DIAGNOSTICO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:shadow-lg hover:shadow-primary/30"
              >
                Solicitar minha análise
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <ul className="space-y-3">
              {[
                "Erros que estão travando seu crescimento",
                "Oportunidades que você não está aproveitando",
                "Como melhorar resultados rapidamente",
              ].map((t, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 rounded-xl border border-border/60 bg-background/60 p-4 backdrop-blur"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="pt-1 text-sm text-foreground/90 sm:text-base">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Risk reduction — minimal */}
      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6 sm:pb-24">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { i: Shield, t: "Sem promessas genéricas" },
            { i: Check, t: "Estratégias testadas" },
            { i: TrendingUp, t: "Foco em resultado real" },
          ].map((d, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4"
            >
              <d.i className="h-5 w-5 text-primary" strokeWidth={2} />
              <span className="text-sm font-medium">{d.t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA — grande */}
      <section id="diagnostico" className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="bg-grid absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 text-center sm:px-6 sm:py-32">
          <h2 className="mx-auto max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Pronto para acelerar sua cooperativa?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-primary-foreground/80 sm:text-lg">
            Pare de depender do acaso. Comece a construir um sistema previsível de crescimento.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href={DIAGNOSTICO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-background px-7 py-4 text-sm font-medium text-foreground transition hover:bg-background/90"
            >
              Quero meu diagnóstico gratuito
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-4 text-sm font-medium text-primary-foreground transition hover:bg-primary-foreground/10"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background/70">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 sm:flex-row sm:items-center sm:px-6">
          <div className="flex items-center gap-4">
            <img src={logoWhite} alt="COOPBASE" className="h-8 w-auto" />
            <div className="hidden h-6 w-px bg-background/20 sm:block" />
            <p className="text-xs sm:text-sm">
              Especialistas em aceleração de cooperativas
            </p>
          </div>
          <p className="text-xs text-background/50">© 2026 Coopbase. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* WhatsApp floating */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/30 transition hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6"
      >
        <span className="absolute inset-0 -z-10 animate-pulse-slow rounded-full bg-primary/40 blur-xl" />
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
