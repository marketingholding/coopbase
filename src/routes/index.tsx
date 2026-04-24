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
      "Recomendações estratégicas para os próximos passos.",
    ],
  },
  {
    name: "Reestruturação Operacional",
    price: "R$ 20.000",
    objective:
      "Projeto de acompanhamento por 3 meses para mapear gargalos e redesenhar fluxos comerciais e técnicos.",
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
      "Implantação de automações de Inteligência Artificial.",
      "Otimização de produtividade com tecnologias de ponta.",
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
      "Gestão de mídias sociais ampliada — 20 postagens estratégicas por mês.",
      "Implantação de processos com I.A. — automações inteligentes para otimizar fluxos operacionais e ganhar produtividade.",
    ],
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={
        "flex flex-col h-full rounded-lg border p-6 sm:p-8 lg:p-10 transition-colors " +
        (plan.highlight
          ? "bg-primary text-primary-foreground border-primary"
          : "bg-card text-card-foreground border-border hover:border-primary/40")
      }
    >
      <div className="mb-8">
        <p
          className={
            "text-[10px] sm:text-[11px] uppercase tracking-[0.24em] mb-3 font-medium " +
            (plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground")
          }
        >
          Plano
        </p>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight">
          {plan.name}
        </h3>
      </div>

      <div className="mb-8 sm:mb-10">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
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
          "text-sm leading-[1.7] mb-10 " +
          (plan.highlight ? "text-primary-foreground/85" : "text-muted-foreground")
        }
      >
        {plan.objective}
      </p>

      {plan.inherits && (
        <p
          className={
            "text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium mb-5 " +
            (plan.highlight ? "text-primary-foreground" : "text-foreground")
          }
        >
          {plan.inherits}
        </p>
      )}

      <ul className="space-y-5 flex-1">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex gap-3 text-sm leading-[1.7]">
            <Check
              className={
                "h-4 w-4 mt-1 shrink-0 " +
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
      <section className="max-w-6xl mx-auto px-5 sm:px-6 pt-20 sm:pt-28 md:pt-40 pb-16 sm:pb-24 md:pb-32">
        <div className="max-w-3xl">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-primary mb-7 sm:mb-8 font-medium">
            Aceleração digital para cooperativas
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-8 sm:mb-10">
            Tecnologia de ponta com{" "}
            <span className="text-primary">comunicação autêntica</span>.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-[1.65] mb-10 sm:mb-12 max-w-2xl">
            Para que a sua cooperativa acompanhe o ritmo do mercado, atraia novos
            associados e reduza custos operacionais, a COOPBASE apresenta planos de
            aceleração digital e otimização de processos — desenhados exclusivamente
            para a realidade do modelo cooperativista.
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-7 sm:px-8 py-3.5 sm:py-4 text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Falar com a COOPBASE
            </a>
            <a
              href="#planos"
              className="inline-flex items-center justify-center border border-border px-7 sm:px-8 py-3.5 sm:py-4 text-sm font-medium rounded-md hover:bg-muted/50 transition-colors"
            >
              Ver planos
            </a>
          </div>
        </div>
      </section>

      {/* Section 1 — Structuring projects */}
      <section id="projetos" className="max-w-6xl mx-auto px-5 sm:px-6 py-20 sm:py-24 md:py-32">
        <div className="max-w-3xl mb-14 sm:mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] font-medium text-primary">
              01 — Projetos
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-5 sm:mb-6">
            Projetos de estruturação
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-[1.65] max-w-2xl">
            Projetos pontuais para diagnosticar, reestruturar e inovar a
            operação da sua cooperativa — com entregas claras e prazos definidos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 max-w-2xl lg:max-w-none mx-auto">
          {structuringProjects.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </section>

      {/* Section 2 — Recurring plans */}
      <section id="planos" className="max-w-6xl mx-auto px-5 sm:px-6 py-20 sm:py-24 md:py-32">
        <div className="border-t border-border pt-20 sm:pt-24 md:pt-32">
          <div className="max-w-3xl mb-14 sm:mb-16 md:mb-20">
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] font-medium text-primary">
                02 — Recorrência
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-5 sm:mb-6">
              Planos de aceleração contínua
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-[1.65] max-w-2xl">
              Contratos de 12 meses com soluções focadas em construir autoridade
              digital, atrair cooperados e gerar negócios recorrentes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 max-w-2xl lg:max-w-none mx-auto">
            {recurringPlans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>

          {/* Comparison table */}
          <div className="mt-24 sm:mt-28 md:mt-32">
            <div className="max-w-3xl mb-10 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                Compare os planos
              </h3>
              <p className="text-base text-muted-foreground leading-[1.65] max-w-2xl">
                Veja em um relance o que está incluso em cada plano recorrente.
              </p>
            </div>

            <div className="overflow-x-auto -mx-5 sm:mx-0 px-5 sm:px-0">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-5 sm:py-6 pr-4 text-[10px] sm:text-[11px] font-medium text-muted-foreground uppercase tracking-[0.18em]">
                      Recursos
                    </th>
                    <th className="py-5 sm:py-6 px-3 sm:px-4 text-center">
                      <div className="text-sm sm:text-base font-semibold">Essencial</div>
                      <div className="text-xs text-muted-foreground mt-1.5">R$ 4.000/mês</div>
                    </th>
                    <th className="py-5 sm:py-6 px-3 sm:px-4 text-center bg-primary/[0.04] border-x border-primary/20">
                      <div className="text-sm sm:text-base font-semibold text-primary">Tração</div>
                      <div className="text-xs text-muted-foreground mt-1.5">R$ 8.000/mês</div>
                    </th>
                    <th className="py-5 sm:py-6 px-3 sm:px-4 text-center">
                      <div className="text-sm sm:text-base font-semibold">Performance</div>
                      <div className="text-xs text-muted-foreground mt-1.5">R$ 12.000/mês</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { feature: "Postagens estratégicas mensais", values: ["12", "16", "20"] },
                    { feature: "Captação audiovisual in loco", values: ["5h/mês", "5h/mês", "5h/mês"] },
                    { feature: "Desenvolvimento de landing pages", values: ["1 página", "Até 10 páginas", "Até 10 páginas"] },
                    { feature: "Gestão de mídia paga (Google e Meta Ads)", values: [false, true, true] },
                    { feature: "Estruturação de CRM", values: [false, true, true] },
                    { feature: "Implantação de processos com I.A.", values: [false, false, true] },
                    { feature: "Contrato", values: ["12 meses", "12 meses", "12 meses"] },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border last:border-0">
                      <td className="py-5 pr-4 text-foreground/90">{row.feature}</td>
                      {row.values.map((val, j) => (
                        <td
                          key={j}
                          className={
                            "py-5 px-3 sm:px-4 text-center " +
                            (j === 1 ? "bg-primary/[0.04] border-x border-primary/20" : "")
                          }
                        >
                          {val === true ? (
                            <Check className="h-4 w-4 text-primary inline-block" strokeWidth={2.5} />
                          ) : val === false ? (
                            <span className="text-muted-foreground/40">—</span>
                          ) : (
                            <span className="text-foreground/80">{val}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Transformation proposal */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 py-20 sm:py-28 md:py-40">
        <div className="border-t border-border pt-20 sm:pt-24 md:pt-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] font-medium text-primary">
                03 — Próximo passo
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight mb-7 sm:mb-8 leading-[1.05]">
              Uma proposta de transformação para a sua cooperativa.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 sm:mb-12 leading-[1.65] max-w-2xl">
              Mais do que marketing: a COOPBASE entrega um caminho estruturado
              para profissionalizar a comunicação, atrair novos cooperados,
              gerar negócios recorrentes e modernizar os processos internos da
              sua operação. Vamos conversar sobre o momento da sua cooperativa
              e construir, juntos, o plano certo para os próximos 12 meses.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-7 sm:px-8 py-3.5 sm:py-4 text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Falar com a COOPBASE
            </a>
          </div>
        </div>
      </section>
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-6 sm:py-8 flex items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground">COOPBASE @ 2026</p>
          <img src={logo} alt="COOPBASE" className="h-5 sm:h-6 w-auto opacity-60" />
        </div>
      </footer>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/5582999744041?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20planos%20da%20COOPBASE."
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
