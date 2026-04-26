/**
 * Configuração centralizada do site.
 * Os dados editáveis estão em config.json; este arquivo exporta com tipagem.
 */
import configJson from "./config.json";

/** Uma linha: colocação; outra: evento; outra: categoria. `sortDate` é só para ordem (não exibido). */
export interface Achievement {
  title: string;
  event: string;
  category: string;
  sortDate: string;
  medal: string;
  image: string;
}

/**
 * Anúncio / evento na seção de notícias. Ordem de exibição = ordem do array no JSON
 * (sem reordenação no código).
 */
export interface NewsItem {
  title: string;
  /** Ex.: "Vem aí". */
  kicker?: string;
  /** Texto de apoio (parágrafo). */
  excerpt?: string;
  /** Lista de atrações ou tópicos. */
  highlights?: string[];
  dateLabel: string;
  timeLabel: string;
  /** Ex.: "Bingo às 20h". */
  extraTimeLabel?: string;
  venue: string;
  city?: string;
  /** Atração em destaque, ex. nome do artista. */
  featuredGuest?: string;
  /** Caminho em `public/` (ex. `images/noticias/...`) ou URL https. */
  image?: string;
  /** ISO (YYYY-MM-DD) para referência/ordem futura. */
  sortDate: string;
  mapUrl?: string;
}

export interface AppConfig {
  brand: {
    name: string;
    nameShort: string;
    nameSuffix: string;
    city: string;
    cityShort: string;
    tagline: string;
    taglineFull: string;
    coachName: string;
  };
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    accentHover: string;
    accentLight: string;
  };
  nav: {
    links: Array<{ label: string; href: string }>;
    ctaText: string;
  };
  contact: {
    waitlistFormUrl: string;
    whatsapp: string;
    whatsappDisplay: string;
    instagramUrl: string;
    instagramHandle: string;
    facebookUrl: string;
  };
  location: {
    venueName: string;
    venueShort: string;
    venueFull: string;
    venueSubtitle: string;
    address: string;
    cityState: string;
    addressFull: string;
    addressLine: string;
    mapUrl: string;
    image: string;
    /** Segundo polo de treino (ex.: escola), sem mapa se não informado. */
    secondaryVenue: {
      venueFull: string;
      addressFull: string;
      mapUrl?: string;
    };
  };
  stats: {
    totalStudents: number;
    studentsDisplay: string;
    /** Pessoas que já passaram pelo projeto (cumulative). */
    alumniDisplay: string;
    /** Ano de fundação do Vôlei Cidadão. */
    foundedYear: number;
    /** Mês de início opcional, ex. "abril" — "desde abril de 2014"; se ausente, só o ano. */
    foundedMonthLabel?: string;
    ageRange: string;
    freeLabel: string;
    gratuito: string;
    venueCount: number;
    titles2025: number;
  };
  achievements: Achievement[];
  achievementsBanner: { title: string; subtitle: string };
  /** Notícias e divulgação de eventos (ordem = ordem do array). */
  news: NewsItem[];
  /** Horários por local (dias, horário, polo). */
  schedule: Array<{
    venue: string;
    days: string;
    time: string;
    venueShort?: string;
  }>;
  hero: {
    image: string;
    badge: string;
    headline: string;
    subtitle: string;
    subtitleHighlight: string;
    ctaParticipate: string;
    ctaStory: string;
    quickStats: Array<{ value: string; label: string }>;
  };
  interactiveHero: {
    image: string;
    title: string;
    subtitle: string;
    ctaConquistas: string;
    ctaParticipate: string;
  };
  about: {
    coachImage: string;
    keyPoints: string[];
    pillars: Array<{
      title: string;
      description: string;
      color: string;
      bg: string;
    }>;
  };
  momentos: {
    images: Array<{
      image: string;
      depth: number;
      position: { top?: string; right?: string; bottom?: string; left?: string };
    }>;
  };
  footer: { copyright: string; madeBy: string };
  footerQuickLinks: Array<{ label: string; href: string }>;
  whatsappMessages: { participate: string; support: string };
}

function sortAchievementsByDate(achievements: Achievement[]): Achievement[] {
  return [...achievements].sort((a, b) => b.sortDate.localeCompare(a.sortDate));
}

const raw = configJson as AppConfig;
export const config: AppConfig = {
  ...raw,
  achievements: sortAchievementsByDate(raw.achievements as Achievement[]),
};

/** Título acessível para a imagem da conquista. */
export function getAchievementImageAlt(achievement: Achievement): string {
  return `${achievement.title} — ${achievement.event}`;
}

/** Exibe a 3ª linha (categoria) quando houver texto útil. */
export function hasAchievementCategory(category: string): boolean {
  const t = category.trim();
  return t.length > 0 && t !== "—";
}

/** URL do WhatsApp com número do config */
export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${config.contact.whatsapp}`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}

/**
 * Converte um caminho de imagem do config em URL pública.
 * Use caminhos relativos ao public/, ex: "images/hero.jpg".
 * URLs que já começam com http/https são devolvidas sem alteração.
 * Respeita o base path do Vite (ex.: GitHub Pages).
 */
export function getAssetUrl(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const base = import.meta.env.BASE_URL;
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${normalized}`;
}
