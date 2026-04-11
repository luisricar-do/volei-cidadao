import { InteractiveHero } from "../components/InteractiveHero";
import { AboutSection } from "../components/AboutSection";
import { InteractiveStatsSection } from "../components/InteractiveStatsSection";
import { InteractiveGallerySection } from "../components/InteractiveGallerySection";
import { InteractiveAttackSection } from "../components/InteractiveAttackSection";
import { ParallaxImages } from "../components/ParallaxImages";
import { LocationSection } from "../components/LocationSection";
import { InteractiveFooter } from "../components/InteractiveFooter";

export function HomePage() {
  return (
    <main>
      <InteractiveHero />
      <AboutSection />
      <InteractiveStatsSection />
      <InteractiveGallerySection maxItems={5} />
      <InteractiveAttackSection />
      <ParallaxImages />
      <LocationSection />
      <InteractiveFooter />
    </main>
  );
}
