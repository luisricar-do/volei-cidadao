import { Helmet } from "react-helmet-async";
import {
  absoluteUrl,
  achievementsOgImagePath,
  achievementsSeo,
  TACA_OG_H,
  TACA_OG_W,
} from "./site";

export function AchievementsSeo() {
  const canonical = absoluteUrl("/conquistas");
  const ogImage = absoluteUrl(achievementsOgImagePath);

  return (
    <Helmet>
      <title>{achievementsSeo.title}</title>
      <meta name="description" content={achievementsSeo.description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={achievementsSeo.title} />
      <meta property="og:description" content={achievementsSeo.description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content={String(TACA_OG_W)} />
      <meta property="og:image:height" content={String(TACA_OG_H)} />
      <meta
        property="og:image:alt"
        content="Troféu e conquistas do Vôlei Cidadão"
      />

      <meta name="twitter:title" content={achievementsSeo.title} />
      <meta name="twitter:description" content={achievementsSeo.description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
