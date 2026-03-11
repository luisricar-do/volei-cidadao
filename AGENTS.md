# Guia para agentes (Cursor AI)

Este documento resume o contexto do repositório para assistentes e agentes. As regras detalhadas ficam em **`.cursor/rules/`**.

## O que é este projeto

- **Vôlei Cidadão** — landing page em React (Vite + TypeScript + Tailwind CSS 4).
- Design de referência no Figma; componentes de UI em `src/app/components/ui/` (estilo Radix/shadcn), seções da página em `src/app/components/`.
- Deploy: GitHub Pages (Actions na branch `main`).

## Regras do repositório

| Regra | Quando se aplica |
|-------|-------------------|
| `project-overview.mdc` | Sempre (stack, estrutura, alias `@/`, pnpm, deploy, idioma) |
| `react-components.mdc` | Ao editar arquivos `**/*.tsx` |
| `tailwind-styling.mdc` | Ao editar `**/*.tsx` ou `**/*.css` |
| `typescript.mdc` | Ao editar `**/*.ts` ou `**/*.tsx` |

## Padrões rápidos

- **Imports**: alias `@/` para `src/`; componentes UI com `./ui/...` ou `../ui/...`.
- **Estilos**: Tailwind + `cn()` para classes; tokens em `src/styles/theme.css`.
- **Componentes**: funcionais, export nomeado; props tipadas; variantes com `cva` + `VariantProps`.
- **Idioma**: conteúdo e UI em português (BR); código pode misturar PT (comentários) e EN (nomes técnicos).

Para detalhes e exemplos, usar as regras em `.cursor/rules/`.
