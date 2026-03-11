/**
 * Configuração centralizada do site.
 * Os dados editáveis estão em config.json; este arquivo exporta com tipagem.
 */
import configJson from "./config.json";

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
  };
  stats: {
    totalStudents: number;
    studentsDisplay: string;
    ageRange: string;
    freeLabel: string;
    gratuito: string;
    venueCount: number;
    titles2025: number;
  };
  achievements: Array<{
    title: string;
    subtitle: string;
    medal: string;
    image: string;
  }>;
  achievementsBanner: { title: string; subtitle: string };
  schedule: Array<{ age: string; days: string; time: string }>;
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

export const config = configJson as AppConfig;

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
