import { createFileRoute } from "@tanstack/react-router";
import logoWhite from "@/assets/coopbase-logo-white.svg";
import diagDiagnostico from "@/assets/diagram-diagnostico.png";
import diagReestruturacao from "@/assets/diagram-reestruturacao.png";
import diagIA from "@/assets/diagram-ia.png";
import diagEssencial from "@/assets/diagram-essencial.png";
import diagTracao from "@/assets/diagram-tracao.png";
import diagPerformance from "@/assets/diagram-performance.png";

const WHATSAPP_URL =
  "https://wa.me/5582999744041?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20planos%20da%20COOPBASE.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "COOPBASE — Aceleração Digital para Cooperativas" },
      {
        name: "description",
        content:
          "Diagnóstico, reestruturação operacional e aceleração contínua para cooperativas que querem crescer com método.",
      },
      { property: "og:title", content: "COOPBASE — Aceleração Digital para Cooperativas" },
      {
        property: "og:description",
        content:
          "Tecnologia de ponta com comunicação autêntica. Pensada para a realidade do cooperativismo.",
      },
    ],
  }),
});

/* ---------- UI primitives ---------- */

function PillButton({
  href,
  variant = "primary",
  external = false,
  children,
}: {
  href: string;
  variant?: "primary" | "ghost" | "inverse";
  external?: boolean;
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center px-7 py-3.5 text-[15px] font-medium rounded-full transition-all duration-200";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:opacity-90"
      : variant === "inverse"
      ? "bg-background text-primary hover:opacity-90"
      : "text-primary hover:opacity-70";
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${styles}`}
    >
      {children}
      <span aria-hidden className="ml-2">→</span>
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary mb-6">
      {children}
    </p>
  );
}

type Panel = {
  eyebrow: string;
  title: React.ReactNode;
  body: React.ReactNode;
  cta: string;
  image: string;
  alt: string;
};

const panels: Panel[] = [
  {
    eyebrow: "Fase 0 · Diagnóstico",
    title: (
      <>
        Onde estão os gargalos que
        <br /> ninguém ainda mapeou.
      </>
    ),
    body: (
      <>
        Antes de propor qualquer solução, mergulhamos na operação atual da
        cooperativa. Mapeamos fluxos, identificamos pontos de atrito e entregamos
        um plano de ação claro — com prioridades, responsáveis e um caminho
        concreto para os próximos meses.
      </>
    ),
    cta: "Conversar sobre o diagnóstico",
    image: diagDiagnostico,
    alt: "Diagrama de nó central conectado a três pontos representando o mapeamento de gargalos.",
  },
  {
    eyebrow: "Fase 1 · Estruturação",
    title: (
      <>
        Reestruturação operacional
        <br /> de ponta a ponta.
      </>
    ),
    body: (
      <>
        Redesenhamos os fluxos comerciais e técnicos da cooperativa e
        acompanhamos a implantação por 90 dias, com encontros quinzenais. O
        objetivo é simples: tirar a operação do improviso e transformá-la em um
        processo previsível, mensurável e replicável.
      </>
    ),
    cta: "Falar sobre essa fase",
    image: diagReestruturacao,
    alt: "Fluxo horizontal de quatro etapas conectadas por setas, representando o redesenho de processos.",
  },
  {
    eyebrow: "Fase 2 · Inovação & IA",
    title: (
      <>
        Automações com IA onde
        <br /> antes havia retrabalho.
      </>
    ),
    body: (
      <>
        Sobre a base reestruturada, implantamos automações com Inteligência
        Artificial nos processos de maior volume e capacitamos a equipe técnica
        para operar o novo ecossistema. Em 90 dias, com encontros semanais, o
        ganho de produtividade deixa de ser promessa e vira métrica.
      </>
    ),
    cta: "Quero entender a aplicação de IA",
    image: diagIA,
    alt: "Grade de nós conectados com alguns destacados, representando automações inteligentes.",
  },
  {
    eyebrow: "Recorrência · Essencial",
    title: (
      <>
        Uma presença digital que
        <br /> reflete o tamanho da cooperativa.
      </>
    ),
    body: (
      <>
        Planejamento, criação e publicação de conteúdo estratégico, captação
        audiovisual in loco e uma página de conversão dedicada. A cooperativa
        passa a ter uma vitrine digital coerente com a sua relevância na
        comunidade — não mais um perfil improvisado.
      </>
    ),
    cta: "Conversar sobre presença digital",
    image: diagEssencial,
    alt: "Três círculos concêntricos representando camadas de presença digital.",
  },
  {
    eyebrow: "Recorrência · Tração",
    title: (
      <>
        Marketing como máquina de
        <br /> aquisição de cooperados.
      </>
    ),
    body: (
      <>
        Ampliamos o volume editorial, ativamos mídia paga em Google e Meta com
        leads qualificados, estruturamos o CRM da equipe comercial e produzimos
        páginas de conversão dedicadas a campanhas e públicos distintos. A
        presença digital deixa de ser vitrine e vira motor.
      </>
    ),
    cta: "Quero gerar oportunidades",
    image: diagTracao,
    alt: "Funil em três estágios convergindo para um ponto final, representando aquisição de cooperados.",
  },
  {
    eyebrow: "Recorrência · Performance",
    title: (
      <>
        Quando marketing e operação
        <br /> caminham no mesmo passo.
      </>
    ),
    body: (
      <>
        Otimização contínua de conversão, automação de e-mail marketing,
        dashboards de Business Intelligence e um comitê estratégico mensal. A
        camada mais sofisticada para cooperativas que precisam que cada lead
        gerado encontre uma operação pronta para entregar.
      </>
    ),
    cta: "Falar sobre performance",
    image: diagPerformance,
    alt: "Dashboard esquemático com barras e linha de tendência, representando indicadores de performance.",
  },
];

function NarrativePanel({ panel, index }: { panel: Panel; index: number }) {
  const reverse = index % 2 === 1;
  return (
    <section className="py-24 lg:py-40">
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          className={
            "flex flex-col gap-12 lg:gap-20 items-center " +
            (reverse ? "lg:flex-row-reverse" : "lg:flex-row")
          }
        >
          {/* Texto */}
          <div className="lg:w-1/2">
            <Eyebrow>{panel.eyebrow}</Eyebrow>
            <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold tracking-[-0.04em] leading-[1.05] mb-8 text-left">
              {panel.title}
            </h2>
            <p className="text-lg lg:text-xl text-foreground/70 leading-[1.55] mb-10 max-w-prose text-left">
              {panel.body}
            </p>
            <PillButton href={WHATSAPP_URL} external>
              {panel.cta}
            </PillButton>
          </div>

          {/* Visual */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <img
              src={panel.image}
              alt={panel.alt}
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full max-w-[480px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */

function Index() {
  const structuring = panels.slice(0, 3);
  const recurring = panels.slice(3, 6);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-primary/95 border-b border-primary-foreground/10 py-[16px]">
        <div className="max-w-[1200px] mx-auto px-6 h-12 flex items-center justify-between">
          <a href="#top" className="flex items-center">
            <img src={logoWhite} alt="COOPBASE" className="h-10 w-auto" />
          </a>
          <nav className="hidden sm:flex items-center gap-8 text-primary-foreground/80">
            <a href="#estruturacao" className="hover:text-primary-foreground transition-colors text-base">
              Estruturação
            </a>
            <a href="#recorrencia" className="hover:text-primary-foreground transition-colors text-base">
              Recorrência
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground transition-colors text-base"
            >
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 pt-32 sm:pt-40 md:pt-48 pb-32 sm:pb-40 md:pb-48 text-center">
          <h1 className="text-5xl sm:text-7xl md:text-[96px] font-semibold tracking-[-0.045em] leading-[1.02] mb-8">
            Aceleração digital
            <br />
            <span className="text-primary">para cooperativas.</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-[26px] text-foreground/60 leading-[1.35] max-w-2xl mx-auto mb-12 font-normal tracking-[-0.02em]">
            Tecnologia de ponta com comunicação autêntica.
            Pensada para a realidade do cooperativismo.
          </p>
          <PillButton href={WHATSAPP_URL} external>
            Conversar com a COOPBASE
          </PillButton>
        </div>
      </section>

      {/* Estruturação — fases 0, 1, 2 */}
      <div id="estruturacao">
        {structuring.map((panel, i) => (
          <NarrativePanel key={panel.eyebrow} panel={panel} index={i} />
        ))}
      </div>

      {/* Painel de quebra — verde institucional */}
      <section className="bg-primary text-primary-foreground py-32 sm:py-40 lg:py-56">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary-foreground/70 mb-8">
            Da estruturação à escala
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-[88px] font-semibold tracking-[-0.045em] leading-[1.02]">
            Do diagnóstico do problema
            <br />
            <span className="text-primary-foreground/70">à operação que escala.</span>
          </h2>
        </div>
      </section>

      {/* Recorrência — Essencial, Tração, Performance */}
      <div id="recorrencia">
        {recurring.map((panel, i) => (
          // mantém o ritmo Z continuando a sequência
          <NarrativePanel key={panel.eyebrow} panel={panel} index={i + 1} />
        ))}
      </div>

      {/* Gestor de processos */}
      <section className="py-24 lg:py-40">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <Eyebrow>Gestor dedicado</Eyebrow>
            <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold tracking-[-0.04em] leading-[1.05] mb-8 text-left">
              Quer um gestor de
              <br /> processos ao seu lado?
            </h2>
            <p className="text-lg lg:text-xl text-foreground/70 leading-[1.55] mb-10 max-w-prose text-left">
              Para cooperativas que preferem um acompanhamento contínuo,
              oferecemos serviços de gestão de processos por 12 meses — com
              cadência clara, indicadores acompanhados e ajuste de rota sempre
              que necessário.
            </p>
            <PillButton href={WHATSAPP_URL} external>
              Solicitar meu gestor
            </PillButton>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-32 sm:py-40 lg:py-56">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-6xl lg:text-[88px] font-semibold tracking-[-0.045em] leading-[1.02] mb-10">
            Pronto para a próxima fase
            <br />
            <span className="text-primary">da sua cooperativa?</span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground/60 leading-[1.4] mb-12 max-w-xl mx-auto">
            Vamos conversar sobre o seu momento e construir, juntos, o plano
            certo para o seu crescimento.
          </p>
          <PillButton href={WHATSAPP_URL} external>
            Falar com a COOPBASE
          </PillButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/95 border-t border-primary-foreground/10">
        <div className="max-w-[1200px] mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
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
    </div>
  );
}
