import { Helmet } from "react-helmet-async";
import {
  absoluteUrl,
  homeSeo,
  HERO_OG_H,
  HERO_OG_W,
} from "./site";

export function HomeSeo() {
  const canonical = absoluteUrl("/");
  const ogImage = absoluteUrl("/images/hero.jpeg");

  return (
    <Helmet>
      <title>{homeSeo.title}</title>
      <meta name="description" content={homeSeo.description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={homeSeo.title} />
      <meta property="og:description" content={homeSeo.description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content={String(HERO_OG_W)} />
      <meta property="og:image:height" content={String(HERO_OG_H)} />

      <meta name="twitter:title" content={homeSeo.title} />
      <meta name="twitter:description" content={homeSeo.description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
