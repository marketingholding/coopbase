## Objetivo

Reescrever `src/routes/index.tsx` para abandonar a estrutura de 3 cards lado a lado e adotar uma narrativa em painéis horizontais 6-6 com Z-pattern, tipografia mais pesada, espaço em branco generoso, infográficos minimalistas e um único CTA por dobra de argumentação.

## Nova arquitetura da página

Ordem dos painéis (cada um ocupa a viewport com respiro vertical de 120–160px):

```
01  HERO                      (texto centralizado, sem 3 botões — 1 CTA)
02  Fase 0 · Diagnóstico      (texto E ↔ visual D)
03  Fase 1 · Reestruturação   (visual E ↔ texto D)
04  Fase 2 · Inovação & IA    (texto E ↔ visual D)
05  PAINEL DE QUEBRA          (verde institucional, full-bleed)
        "Do diagnóstico do problema → à operação que escala"
06  Recorrência · Essencial   (visual E ↔ texto D)
07  Recorrência · Tração      (texto E ↔ visual D)
08  Recorrência · Performance (visual E ↔ texto D)
09  Gestor de processos       (texto à esquerda, 1 CTA)
10  CTA final                 (tipografia ancorada, 1 CTA)
11  Footer minimal
```

Cada painel de plano segue a hierarquia:

```
Fase 1 · Estruturação                 ← macro-identificador (eyebrow, 13px)
Reestruturação operacional            ← título primário (Bold, 56–72px)
de ponta a ponta.
Mapeamos gargalos, redesenhamos       ← argumentação (regular, 18–20px)
fluxos comerciais e técnicos e        ← alinhado à esquerda, max-w-prose
acompanhamos a implantação por
90 dias com encontros quinzenais.

Falar sobre essa fase  →              ← CTA isolado, alta área de clique
```

Preços e o objetivo curto deixam de aparecer. As features viram 2–3 frases corridas dentro do parágrafo (não bullets), preservando a leitura consultiva. Apenas o painel "Inovação & IA" mantém uma lista enxuta (3 itens) por ser inerente à narrativa de upgrade.

## Sistema visual

- **Grid**: container `max-w-[1200px]`, `grid-cols-12`, blocos usam `col-span-6` no desktop e empilham no mobile. Alinhamento alterna por índice (Z-pattern) via `lg:flex-row` / `lg:flex-row-reverse`.
- **Respiro**: `py-32 lg:py-40` (≈128–160px) entre painéis. Painel de quebra com `py-40 lg:py-56`.
- **Tipografia**: títulos `text-5xl lg:text-7xl font-semibold tracking-[-0.045em]`. Eyebrow `text-xs uppercase tracking-[0.18em] text-primary`. Corpo `text-lg lg:text-xl text-foreground/70 leading-[1.55]`. Tudo `text-left` (centralizado só no hero, painel de quebra e CTA final).
- **Cor**: fundo branco em todos os painéis de argumentação; verde institucional (`bg-primary`) restrito a (a) painel 05 de quebra, (b) CTA final, (c) botões. Removidos `bg-muted/40` das seções, removidas as bordas verdes dos cards (cards eliminados).
- **Bordas/cards**: removidos por completo. Nenhum `border`, `rounded-3xl`, `bg-background` em torno do conteúdo de plano.
- **CTAs**: um único `PillButton` por painel, sempre apontando para WhatsApp com texto contextual ("Falar sobre essa fase", "Conversar sobre recorrência", etc.). Hero ganha 1 CTA primário (o "Ver projetos" vira link âncora discreto abaixo, ou é removido).

## Iconografia / suporte visual

Cada painel de plano (6 ao todo) recebe um infográfico minimalista gerado por IA, salvo em `src/assets/`:

- `diagram-diagnostico.png` — nó central com 3 linhas finas saindo, anotações pequenas
- `diagram-reestruturacao.png` — fluxo horizontal de 4 etapas com setas line art
- `diagram-ia.png` — grade de 9 nós com 3 destacados, sugerindo automação
- `diagram-essencial.png` — 3 círculos concêntricos (presença → vitrine → conversão)
- `diagram-tracao.png` — funil estilizado com 3 estágios
- `diagram-performance.png` — dashboard esquemático (barras + linha) em line art

**Estilo padrão para todas**: line art monocromático na cor `#006466` sobre fundo branco puro, traços finos (1–1.5px), nada de gradientes, nada de pessoas, nada de mockups de tela, sem texto dentro da imagem. Aspect ratio 1:1, ~1024×1024.

## Mudanças por arquivo

- `src/routes/index.tsx` — reescrito. Removidos `PlanCard`, `structuringProjects`, `recurringPlans`, `Check` import. Introduzidos `NarrativePanel` (props: eyebrow, title, body, ctaLabel, image, reverse) e `BreakPanel`. Hero, gestor e CTA final atualizados para 1 CTA + tipografia ancorada.
- `src/assets/diagram-*.png` — 6 novos arquivos gerados via `imagegen--generate_image` (modelo `fast`, prompt padronizado).

Nada muda em `src/styles.css`, tokens, rotas, header ou footer (apenas o header já está OK; o footer permanece minimal).

## Detalhes técnicos

- O `PlanCard` atual é deletado; nenhum outro arquivo o consome (`rg PlanCard` esperado: 0 matches fora de `index.tsx`).
- `structuringProjects` e `recurringPlans` são substituídos por uma constante única `panels: NarrativePanel[]` com 6 entradas, ordenadas conforme a sequência acima, cada uma com `reverse: i % 2 === 1`.
- Z-pattern responsivo: `flex flex-col lg:flex-row` + `lg:flex-row-reverse` quando `reverse`. Texto e imagem ocupam `lg:w-1/2`. Imagens com `loading="lazy"`, `alt` descritivo do diagrama (ex.: "Diagrama de fluxo de reestruturação operacional").
- Painel de quebra: `bg-primary text-primary-foreground`, full-bleed (`-mx-6` dentro de container ou seção fora do container), título `text-6xl lg:text-8xl`, sem CTA — apenas declaração.
- WhatsApp flutuante e header permanecem inalterados.
- SEO: `head()` da rota mantido; sem novas rotas.

## Pontos fora de escopo

- Não tocar em `vercel.json`, `DEPLOY_VERCEL.md`, configuração de build, tokens de cor, ou qualquer arquivo fora de `src/routes/index.tsx` e `src/assets/diagram-*.png`.
- Sem backend, sem formulário de leads (já descartado em turno anterior).
- Sem dark mode novo (a paleta `.dark` existente fica como está).
