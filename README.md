# Vôlei Cidadão — Landing Page

Landing page do projeto **Vôlei Cidadão**. O design original está no [Figma](https://www.figma.com/design/XSqCX0QOIpxchl1JGfMTQa/Landing-Page-para-Vôlei-Cidadão).

## Stack

- **React 18** + **TypeScript**
- **Vite** — build e dev server
- **Tailwind CSS 4** — estilos
- **Radix UI** + **MUI** — componentes de interface
- **Motion** — animações
- **React Router 7** — roteamento (se aplicável)

## Como rodar

### Pré-requisitos

- Node.js 20+
- npm, yarn ou pnpm

### Instalação

```bash
# com npm
npm install

# ou com pnpm (recomendado, usado no CI)
pnpm install
```

### Desenvolvimento

```bash
npm run dev
# ou
pnpm dev
```

O app abre em `http://localhost:5173` (ou na porta que o Vite indicar).

### Build para produção

```bash
npm run build
# ou
pnpm build
```

A saída fica em `dist/`.

## Deploy

O projeto está configurado para **GitHub Pages** via GitHub Actions:

- Push na branch `main` dispara o workflow **Deploy to GitHub Pages**
- O domínio customizado está configurado como `http://voleicidadao.com.br`
- O build usa `BASE_PATH=/` e publica o `public/CNAME` no artifact

## Estrutura principal

```
src/
├── app/
│   ├── App.tsx              # Layout e seções da landing
│   ├── main.tsx
│   └── components/
│       ├── Navbar.tsx
│       ├── InteractiveHero.tsx
│       ├── AboutSection.tsx
│       ├── InteractiveStatsSection.tsx
│       ├── InteractiveGallerySection.tsx
│       ├── InteractiveAttackSection.tsx
│       ├── ParallaxImages.tsx
│       ├── LocationSection.tsx
│       ├── InteractiveFooter.tsx
│       ├── ui/              # Componentes reutilizáveis (Radix, etc.)
│       └── figma/
└── styles/
```

## Licença

Projeto privado. Ver `ATTRIBUTIONS.md` para créditos de dependências e assets.
