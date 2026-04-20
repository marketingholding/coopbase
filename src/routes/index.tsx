import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import logo from "@/assets/coopbase-logo.svg";
import logoWhite from "@/assets/coopbase-logo-white.svg";

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

const recurringPlans: Plan[] = [
  {
    name: "Essencial",
    price: "R$ 5.000",
    priceSuffix: "/ mês",
    objective:
      "Profissionalizar a presença digital da cooperativa e criar uma vitrine atrativa para a comunidade.",
    features: [
      "Gestão de mídias sociais — planejamento, criação e publicação de 12 postagens estratégicas por mês.",
      "Cobertura audiovisual in loco — 5 horas mensais de captação profissional externa (vídeos e fotos) para registrar a força da sua cooperativa em ação.",
    ],
  },
  {
    name: "Tração",
    price: "R$ 10.000",
    priceSuffix: "/ mês",
    objective:
      "Transformar a presença digital em uma máquina de aquisição de novos cooperados e oportunidades comerciais.",
    inherits: "Tudo do plano Essencial, mais:",
    features: [
      "Gestão de mídia paga — estratégia e otimização de campanhas (Google Ads, Meta Ads) para captar leads qualificados.",
      "Gestão de CRM de vendas — estruturação do funil de relacionamento e vendas para a equipe comercial.",
      "Kick-off de processos — 2 sessões exclusivas de consultoria no primeiro mês para alinhar marketing e atendimento.",
    ],
    highlight: true,
  },
  {
    name: "Performance",
    price: "R$ 12.000",
    priceSuffix: "/ mês",
    objective:
      "Máximo alinhamento entre o volume de interessados gerados pelo marketing e a capacidade de atendimento da equipe.",
    inherits: "Tudo do plano Tração, mais:",
    features: [
      "Acompanhamento contínuo de processos — consultoria estendida por 3 meses (2 sessões mensais, 6 encontros) para garantir conversão eficiente das oportunidades.",
    ],
  },
];

const projects: Plan[] = [
  {
    name: "Reestruturação Operacional",
    price: "R$ 20.000",
    priceSuffix: "projeto fechado",
    objective:
      "Identificar e eliminar as falhas de processos que impedem a sua cooperativa de escalar e atender mais associados com a mesma estrutura.",
    features: [
      "Mapeamento e diagnóstico — análise completa dos processos atuais e identificação de gargalos.",
      "Plano de resolução — criação de novos fluxos de trabalho visando agilidade e redução de custos.",
      "Implementação assistida — 3 meses de acompanhamento lado a lado com a equipe, incluindo 6 visitas técnicas estruturadas.",
    ],
  },
  {
    name: "Inovação & Inteligência Artificial",
    price: "R$ 30.000",
    priceSuffix: "projeto fechado",
    objective:
      "Levar a cooperativa para a vanguarda tecnológica. 77% dos tomadores de decisão já consideram que a IA agiliza drasticamente os processos internos.",
    inherits: "Tudo da Solução A, mais:",
    features: [
      "Imersão profunda — 3 meses de acompanhamento intensivo, dobrando o suporte para 12 visitas técnicas.",
      "Implantação de IA — configuração de tecnologias de Inteligência Artificial sob medida (automação de atendimento, qualificação de associados, fluxos de dados), reduzindo trabalho manual e elevando a experiência do cooperado.",
    ],
    highlight: true,
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={
        "flex flex-col h-full rounded-lg border p-6 sm:p-8 md:p-10 transition-colors " +
        (plan.highlight
          ? "bg-primary text-primary-foreground border-primary"
          : "bg-card text-card-foreground border-border hover:border-primary/40")
      }
    >
      <div className="mb-6">
        <p
          className={
            "text-xs uppercase tracking-[0.2em] mb-3 " +
            (plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground")
          }
        >
          Plano
        </p>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">{plan.name}</h3>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            {plan.price}
          </span>
          {plan.priceSuffix && (
            <span
              className={
                "text-sm " +
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
            Aceleração digital para cooperativas
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 sm:mb-8">
            Tecnologia de ponta com{" "}
            <span className="text-primary">comunicação autêntica</span>.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            Para que a sua cooperativa acompanhe o ritmo do mercado, atraia novos
            associados e reduza custos operacionais, a COOPBASE apresenta planos de
            aceleração digital e otimização de processos — desenhados exclusivamente
            para a realidade do modelo cooperativista.
          </p>
        </div>
      </section>

      {/* Section 1 — Recurring */}
      <section id="planos" className="max-w-6xl mx-auto px-5 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="max-w-3xl mb-10 sm:mb-12 md:mb-16">
          <div className="flex items-center gap-4 mb-5 sm:mb-6">
            <span className="text-sm font-semibold text-primary">01</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-3 sm:mb-4">
            Planos de aceleração contínua
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Contratos de 12 meses com soluções focadas em construir autoridade
            digital, atrair cooperados e gerar negócios recorrentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {recurringPlans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>

        {/* Comparison table */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <div className="max-w-3xl mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mb-3">
              Compare os planos
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Veja em um relance o que está incluso em cada plano recorrente.
            </p>
          </div>

          <div className="overflow-x-auto -mx-5 sm:mx-0 px-5 sm:px-0">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 sm:py-5 pr-4 text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Recursos
                  </th>
                  <th className="py-4 sm:py-5 px-3 sm:px-4 text-center">
                    <div className="text-sm sm:text-base font-semibold">Essencial</div>
                    <div className="text-xs text-muted-foreground mt-1">R$ 5.000/mês</div>
                  </th>
                  <th className="py-4 sm:py-5 px-3 sm:px-4 text-center bg-primary/5 border-x border-primary/20">
                    <div className="text-sm sm:text-base font-semibold text-primary">Tração</div>
                    <div className="text-xs text-muted-foreground mt-1">R$ 10.000/mês</div>
                  </th>
                  <th className="py-4 sm:py-5 px-3 sm:px-4 text-center">
                    <div className="text-sm sm:text-base font-semibold">Performance</div>
                    <div className="text-xs text-muted-foreground mt-1">R$ 12.000/mês</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { feature: "Postagens estratégicas mensais", values: ["12", "12", "12"] },
                  { feature: "Captação audiovisual in loco", values: ["5h/mês", "5h/mês", "5h/mês"] },
                  { feature: "Gestão de mídia paga (Google e Meta Ads)", values: [false, true, true] },
                  { feature: "Gestão de CRM de vendas", values: [false, true, true] },
                  { feature: "Kick-off de processos (1º mês)", values: [false, "2 sessões", "2 sessões"] },
                  { feature: "Acompanhamento contínuo de processos", values: [false, false, "6 sessões em 3 meses"] },
                  { feature: "Contrato", values: ["12 meses", "12 meses", "12 meses"] },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-0">
                    <td className="py-4 pr-4 text-foreground/90">{row.feature}</td>
                    {row.values.map((val, j) => (
                      <td
                        key={j}
                        className={
                          "py-4 px-3 sm:px-4 text-center " +
                          (j === 1 ? "bg-primary/5 border-x border-primary/20" : "")
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
      </section>

      {/* Section 2 — Projects */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="max-w-3xl mb-10 sm:mb-12 md:mb-16">
          <div className="flex items-center gap-4 mb-5 sm:mb-6">
            <span className="text-sm font-semibold text-primary">02</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-3 sm:mb-4">
            Projetos de transformação e eficiência operacional
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Consultorias de alto impacto para destravar gargalos. A adoção de
            ferramentas inteligentes e fluxos automatizados atua como motor de
            crescimento, competitividade e redução de custos reais para as
            operações.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-20 md:py-32">
        <div className="border-t border-border pt-12 sm:pt-16 md:pt-20 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight mb-5 sm:mb-6">
            Pronto para acelerar sua cooperativa?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 leading-relaxed">
            Converse com nosso time e descubra qual plano é o ideal para o
            momento da sua cooperativa.
          </p>
          <a
            href="mailto:contato@coopbase.com.br"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            Falar com a COOPBASE
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-6 sm:py-8 flex items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground">COOPBASE @ 2026</p>
          <img src={logo} alt="COOPBASE" className="h-5 sm:h-6 w-auto opacity-60" />
        </div>
      </footer>
    </div>
  );
}
