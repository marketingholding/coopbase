# Deploy na Vercel (SPA estático)

Este projeto foi criado no Lovable usando **TanStack Start + Cloudflare Workers**. Para rodar na **Vercel como SPA estático**, você precisa fazer alguns ajustes **fora do Lovable** (após exportar para o GitHub), porque o `vite.config.ts` do Lovable injeta automaticamente o preset Cloudflare.

---

## Passo 1 — Exportar para o GitHub

No editor Lovable: **GitHub → Connect to GitHub → Create repository**.
Depois clone o repo localmente:

```bash
git clone https://github.com/SEU-USUARIO/SEU-REPO.git
cd SEU-REPO
bun install   # ou npm install
```

---

## Passo 2 — Substituir o `vite.config.ts`

Substitua o conteúdo de `vite.config.ts` por:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss(), tsConfigPaths()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  build: { outDir: "dist" },
});
```

E remova as dependências específicas do Lovable/Cloudflare:

```bash
bun remove @lovable.dev/vite-tanstack-config @cloudflare/vite-plugin
```

---

## Passo 3 — Converter o entry para SPA

TanStack **Start** é SSR. Para deploy estático puro, troque para **TanStack Router** SPA. Crie `index.html` na raiz:

```html
<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>COOPBASE</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

Crie `src/main.tsx`:

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import "./styles.css";

const router = getRouter();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
```

E ajuste `src/routes/__root.tsx` para **remover** o `shellComponent` (não há mais HTML SSR — `index.html` cuida disso). Use apenas `component: RootComponent`.

Finalmente, remova `@tanstack/react-start`:

```bash
bun remove @tanstack/react-start @tanstack/router-plugin
```

---

## Passo 4 — Deploy

O `vercel.json` (já incluído neste repo) configura:
- `buildCommand`: `vite build`
- `outputDirectory`: `dist`
- SPA rewrite (todas as rotas → `index.html`)

Na Vercel:
1. **Add New → Project**
2. Importe o repositório do GitHub
3. Framework Preset: **Other** (deixe a Vercel ler `vercel.json`)
4. Deploy ✅

---

## Observação

Se quiser manter o Lovable funcionando em paralelo, **não** faça os Passos 2 e 3 — eles quebram o preview do Lovable. Crie um branch separado (`vercel-deploy`) só para a Vercel.
