import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import logo from "@/assets/coopbase-logo.svg";
import logoWhite from "@/assets/coopbase-logo-white.svg";

const WHATSAPP_URL =
  "https://wa.me/5582999744041?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20planos%20da%20COOPBASE.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "COOPBASE — Planos de Aceleração Digital para Cooperativas" },
      {
        name: "description",
        content:
          "Planos de aceleração digital e otimização de processos desenhados exclusivamente para a realidade do modelo cooperativista.",
      },
      { property: "og:title", content: "COOPBASE — Planos para Cooperativas" },
      {
        property: "og:description",
        content:
          "Comunicação autêntica e tecnologia de ponta para sua cooperativa crescer, atrair associados e reduzir custos.",
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
};

const structuringProjects: Plan[] = [
  {
    name: "Consultoria Starter",
    price: "R$ 5.000",
    objective:
      "Avaliação inicial para diagnosticar o momento da cooperativa e mapear as primeiras oportunidades de evolução.",
    features: [
      "Diagnóstico completo da operação atual.",
      "Identificação de gargalos e oportunidades de melhoria.",
      "Entrega de um Plano de Ação (Roadmap) detalhado para a cooperativa.",
    ],
  },
  {
    name: "Reestruturação Operacional",
    price: "R$ 20.000",
    objective:
      "Projeto de implantação e acompanhamento por 3 meses para mapear gargalos e redesenhar fluxos comerciais e técnicos.",
    features: [
      "Mapeamento completo de gargalos operacionais.",
      "Redesenho de fluxos comerciais e técnicos.",
      "6 encontros ao longo de 3 meses para implementação acompanhada.",
    ],
    highlight: true,
  },
  {
    name: "Inovação & IA",
    price: "R$ 30.000",
    objective:
      "Upgrade do projeto de reestruturação com implantação de automações de Inteligência Artificial para ganho de produtividade.",
    inherits: "Tudo da Reestruturação Operacional, mais:",
    features: [
      "3 meses de acompanhamento com 12 encontros.",
      "Implantação de automações com Inteligência Artificial.",
      "Treinamento e capacitação da equipe técnica para operar o novo ecossistema automatizado.",
    ],
  },
];

const recurringPlans: Plan[] = [
  {
    name: "Essencial",
    price: "R$ 4.000",
    priceSuffix: "/ mês",
    objective:
      "Profissionalizar a presença digital da cooperativa e criar uma vitrine atrativa para a comunidade.",
    features: [
      "Gestão de mídias sociais — planejamento, criação e publicação de 12 postagens estratégicas por mês.",
      "Cobertura audiovisual in loco — 5 horas mensais de captação profissional externa (vídeos e fotos) para registrar a força da sua cooperativa em ação.",
      "Desenvolvimento de 1 landing page — página de conversão sob medida para a cooperativa.",
    ],
  },
  {
    name: "Tração",
    price: "R$ 8.000",
    priceSuffix: "/ mês",
    objective:
      "Transformar a presença digital em uma máquina de aquisição de novos cooperados e oportunidades comerciais.",
    inherits: "Tudo do plano Essencial, mais:",
    features: [
      "Gestão de mídias sociais ampliada — 16 postagens estratégicas por mês.",
      "Gestão de mídia paga — estratégia e otimização de campanhas (Google Ads, Meta Ads) para captar leads qualificados.",
      "Estruturação de CRM — estruturação do funil de relacionamento e vendas para a equipe comercial.",
      "Desenvolvimento de até 10 landing pages — páginas de conversão dedicadas para diferentes públicos, campanhas ou serviços.",
    ],
    highlight: true,
  },
  {
    name: "Performance",
    price: "R$ 12.000",
    priceSuffix: "/ mês",
    objective:
      "Máximo alinhamento entre o volume de oportunidades geradas pelo marketing e a eficiência dos processos técnicos da equipe.",
    inherits: "Tudo do plano Tração, mais:",
    features: [
      "Gestão de tráfego avançada com otimização de conversão (CRO).",
      "Automação de E-mail Marketing.",
      "Dashboards de Business Intelligence (BI).",
      "Comitê estratégico de crescimento (1x ao mês).",
    ],
  },
];

/* ---------- UI primitives (Apple-style) ---------- */

function PillButton({
  href,
  variant = "primary",
  external = false,
  children,
}: {
  href: string;
  variant?: "primary" | "ghost";
  external?: boolean;
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center px-6 py-2.5 text-[15px] font-medium rounded-full transition-all duration-200";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:opacity-90"
      : "text-primary hover:opacity-70";
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${styles}`}
    >
      {children}
      {variant === "ghost" && <span aria-hidden className="ml-1">›</span>}
    </a>
  );
}

function SectionEyebrow({ label }: { label: string }) {
  return (
    <p className="text-sm sm:text-[15px] font-medium text-primary mb-3">
      {label}
    </p>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const isHighlight = plan.highlight;
  return (
    <div
      className={
        "flex flex-col h-full rounded-3xl p-8 sm:p-10 transition-all duration-300 " +
        (isHighlight
          ? "bg-primary text-primary-foreground"
          : "bg-background text-foreground border border-border/60")
      }
    >
      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight mb-6">
        {plan.name}
      </h3>

      <div className="mb-8">
        <div className="flex items-baseline gap-1.5 flex-wrap">
          <span className="text-4xl sm:text-5xl font-semibold tracking-tight">
            {plan.price}
          </span>
          {plan.priceSuffix && (
            <span
              className={
                "text-sm " +
                (isHighlight ? "text-primary-foreground/60" : "text-muted-foreground")
              }
            >
              {plan.priceSuffix}
            </span>
          )}
        </div>
      </div>

      <p
        className={
          "text-[15px] leading-[1.55] mb-10 " +
          (isHighlight ? "text-primary-foreground/75" : "text-muted-foreground")
        }
      >
        {plan.objective}
      </p>

      {plan.inherits && (
        <p
          className={
            "text-[13px] font-medium mb-5 " +
            (isHighlight ? "text-primary-foreground" : "text-foreground")
          }
        >
          {plan.inherits}
        </p>
      )}

      <ul className="space-y-4 flex-1 mb-8">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex gap-3 text-[15px] leading-[1.55]">
            <Check
              className={
                "h-[18px] w-[18px] mt-1 shrink-0 " +
                (isHighlight ? "text-primary-foreground" : "text-primary")
              }
              strokeWidth={2.5}
            />
            <span
              className={
                isHighlight ? "text-primary-foreground/85" : "text-foreground/80"
              }
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={
          "inline-flex items-center justify-center w-full px-5 py-3 text-[15px] font-medium rounded-full transition-all " +
          (isHighlight
            ? "bg-background text-foreground hover:opacity-90"
            : "bg-primary text-primary-foreground hover:opacity-90")
        }
      >
        Falar com a COOPBASE
      </a>
    </div>
  );
}

/* ---------- Page ---------- */

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top nav — Apple-style: thin, blurred, centered */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-primary/95 border-b border-primary-foreground/10 my-0 py-[16px]">
        <div className="max-w-[1024px] mx-auto px-6 h-12 flex items-center justify-between">
          <a href="#top" className="flex items-center">
            <img src={logoWhite} alt="COOPBASE" className="h-10 w-auto" />
          </a>
          <nav className="hidden sm:flex items-center gap-8 text-[13px] text-primary-foreground/80">
            <a href="#projetos" className="hover:text-primary-foreground transition-colors text-lg">
              Projetos
            </a>
            <a href="#planos" className="hover:text-primary-foreground transition-colors text-lg">
              Planos
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground transition-colors text-lg"
            >
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* Hero — large centered display, breathing room */}
      <section
        id="top"
        className="relative overflow-hidden"
      >
        <div className="max-w-[1024px] mx-auto px-6 pt-24 sm:pt-32 md:pt-40 pb-20 sm:pb-28 md:pb-36 text-center">
          <h1 className="text-[44px] sm:text-6xl md:text-7xl lg:text-[88px] font-semibold tracking-[-0.045em] leading-[1.02] mb-6">
            Aceleração digital
            <br />
            <span className="text-primary">para cooperativas.</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-[28px] text-muted-foreground leading-[1.3] max-w-2xl mx-auto mb-10 font-normal tracking-[-0.02em]">
            Tecnologia de ponta com comunicação autêntica.
            Pensada para a realidade do cooperativismo.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <PillButton href={WHATSAPP_URL} external>
              Falar com a COOPBASE
            </PillButton>
            <PillButton href="#planos" variant="ghost">
              Ver planos
            </PillButton>
          </div>
        </div>
      </section>

      {/* Section 1 — Structuring projects (alt background block) */}
      <section id="projetos" className="bg-muted/40 py-24 sm:py-32 md:py-40">
        <div className="max-w-[1024px] mx-auto px-6">
          <div className="text-center mb-16 sm:mb-20">
            <SectionEyebrow label="Projetos" />
            <h2 className="text-3xl sm:text-5xl md:text-[56px] font-semibold tracking-[-0.04em] leading-[1.05] mb-5">
              Projetos de estruturação.
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-[1.4] max-w-xl mx-auto">
              Diagnóstico, reestruturação e inovação — com entregas claras e
              prazos definidos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
            {structuringProjects.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Recurring plans */}
      <section id="planos" className="py-24 sm:py-32 md:py-40">
        <div className="max-w-[1024px] mx-auto px-6">
          <div className="text-center mb-16 sm:mb-20">
            <SectionEyebrow label="Recorrência" />
            <h2 className="text-3xl sm:text-5xl md:text-[56px] font-semibold tracking-[-0.04em] leading-[1.05] mb-5">
              Planos de aceleração contínua.
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-[1.4] max-w-xl mx-auto">
              Contratos de 12 meses para construir autoridade, atrair cooperados
              e gerar negócios recorrentes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
            {recurringPlans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      

      {/* Section 4 — Closing CTA, Apple-style centered statement */}
      <section className="py-28 sm:py-36 md:py-44">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-5xl md:text-[64px] font-semibold tracking-[-0.045em] leading-[1.05] mb-6">
            Pronto para a próxima fase
            <br />
            <span className="text-primary">da sua cooperativa?</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-[1.4] mb-10 max-w-xl mx-auto">
            Vamos conversar sobre o seu momento e construir, juntos, o plano
            certo para os próximos 12 meses.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <PillButton href={WHATSAPP_URL} external>
              Falar com a COOPBASE
            </PillButton>
            <PillButton href="#planos" variant="ghost">
              Rever planos
            </PillButton>
          </div>
        </div>
      </section>

      {/* Footer — minimal, like apple.com */}
      <footer className="bg-primary/95 border-t border-primary-foreground/10">
        <div className="max-w-[1024px] mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logoWhite} alt="COOPBASE" className="h-10 w-auto" />
          </div>
          <p className="text-xs text-primary-foreground/80">
            Copyright © 2026 COOPBASE. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* WhatsApp floating button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a COOPBASE no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 active:scale-95 transition-transform"
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

      {/* logoWhite kept referenced to satisfy import; could be used in dark themes */}
      <span className="hidden">
        <img src={logoWhite} alt="" />
      </span>
    </div>
  );
}
