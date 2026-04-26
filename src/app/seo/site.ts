/**
 * URL pública de produção (og:url, sitemap, JSON-LD). Sobrescreva com VITE_SITE_URL em build local
 * (ex.: preview com base path) se necessário.
 */
export const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ||
  "https://voleicidadao.com.br";

export function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}

export const homeSeo = {
  title: "Vôlei Cidadão — Vôlei gratuito em São Bento do Sapucaí",
  description:
    "Projeto social de vôlei gratuito em São Bento do Sapucaí (SP). Transformando vidas através do esporte — mais que um jogo, uma escola de cidadania.",
} as const;

export const achievementsSeo = {
  title: "Conquistas e troféus — Vôlei Cidadão (São Bento do Sapucaí)",
  description:
    "Corredor da Fama: histórico completo de títulos, troféus e momentos de destaque do projeto de vôlei social em São Bento do Sapucaí (SP).",
} as const;

/** Prévia OG específica da página de conquistas (troféu). */
export const achievementsOgImagePath = "/images/conquistas/taca-ouro.jpeg";

export const HERO_OG_W = 1440;
export const HERO_OG_H = 1440;

export const TACA_OG_W = 1440;
export const TACA_OG_H = 1440;
