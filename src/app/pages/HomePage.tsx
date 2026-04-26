import { HomeSeo } from "../seo/HomeSeo";
import { InteractiveHero } from "../components/InteractiveHero";
import { AboutSection } from "../components/AboutSection";
import { InteractiveStatsSection } from "../components/InteractiveStatsSection";
import { InteractiveGallerySection } from "../components/InteractiveGallerySection";
import { NewsSection } from "../components/NewsSection";
import { InteractiveAttackSection } from "../components/InteractiveAttackSection";
import { ParallaxImages } from "../components/ParallaxImages";
import { LocationSection } from "../components/LocationSection";
import { InteractiveFooter } from "../components/InteractiveFooter";

export function HomePage() {
  return (
    <main>
      <HomeSeo />
      <InteractiveHero />
      <AboutSection />
      <InteractiveStatsSection />
      <InteractiveGallerySection maxItems={5} />
      <NewsSection />
      <InteractiveAttackSection />
      <ParallaxImages />
      <LocationSection />
      <InteractiveFooter />
    </main>
  );
}
