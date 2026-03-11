import { Navbar } from "./components/Navbar";
import { InteractiveHero } from "./components/InteractiveHero";
import { AboutSection } from "./components/AboutSection";
import { InteractiveStatsSection } from "./components/InteractiveStatsSection";
import { InteractiveGallerySection } from "./components/InteractiveGallerySection";
import { InteractiveAttackSection } from "./components/InteractiveAttackSection";
import { ParallaxImages } from "./components/ParallaxImages";
import { LocationSection } from "./components/LocationSection";
import { InteractiveFooter } from "./components/InteractiveFooter";

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        * {
          box-sizing: border-box;
        }
        /* Ocultar scrollbar mas manter funcionalidade */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0F1F4E;
        }
        ::-webkit-scrollbar-thumb {
          background: #F59E0B;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #D97706;
        }
      `}</style>
      <Navbar />
      <main>
        {/* Hero com bola de saque */}
        <InteractiveHero />
        
        {/* Sobre o Projeto */}
        <AboutSection />
        
        {/* Stats com movimento de manchete */}
        <InteractiveStatsSection />
        
        {/* Galeria com movimento de levantamento */}
        <InteractiveGallerySection />
        
        {/* Ataque - transição de cor dinâmica */}
        <InteractiveAttackSection />
        
        {/* Parallax com imagens P&B ganhando cor */}
        <ParallaxImages />
        
        {/* Localização */}
        <LocationSection />
        
        {/* Footer com bola caindo no cesto */}
        <InteractiveFooter />
      </main>
    </div>
  );
}