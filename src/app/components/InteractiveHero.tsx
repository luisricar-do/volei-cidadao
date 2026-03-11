import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { VolleyballBall } from "./VolleyballBall";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { config, getAssetUrl } from "@/app/config";

export function InteractiveHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Animações da bola - movimento de saque
  const ballY = useTransform(scrollYProgress, [0, 0.3], [0, -200]);
  const ballX = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const ballRotate = useTransform(scrollYProgress, [0, 0.3], [0, 180]);
  const ballScale = useTransform(scrollYProgress, [0, 0.15, 0.3], [1.5, 1, 0.7]);

  // Efeito de impacto no título
  const titleShake = useTransform(
    scrollYProgress,
    [0.12, 0.15, 0.18],
    [0, -10, 0]
  );
  const titleOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const titleScale = useTransform(scrollYProgress, [0.1, 0.2], [0.8, 1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[200vh] bg-gradient-to-b from-[#0F1F4E] via-[#1D4ED8] to-[#0F1F4E]"
    >
      {/* Background com desfoque - ginásio */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            filter: "blur(8px) brightness(0.7)",
          }}
        >
          <ImageWithFallback
            src={getAssetUrl(config.interactiveHero.image)}
            alt="Ginásio"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        {/* Bola de vôlei interativa - movimento de saque */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          style={{
            y: ballY,
            x: ballX,
            rotate: ballRotate,
            scale: ballScale,
          }}
        >
          <VolleyballBall scrollProgress={scrollYProgress.get()} />
        </motion.div>

        {/* Título com efeito de impacto */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10"
          style={{
            y: titleShake,
            opacity: titleOpacity,
            scale: titleScale,
          }}
        >
          <motion.h1
            className="text-white mb-4"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              lineHeight: 1.1,
              textShadow: "0 10px 30px rgba(0,0,0,0.5), 0 0 60px rgba(29, 78, 216, 0.4)",
            }}
          >
            {config.interactiveHero.title.split(' ')[0]}<br />
            <span className="text-[#F59E0B]">{config.interactiveHero.title.split(' ').slice(1).join(' ')}</span>
          </motion.h1>

          <motion.p
            className="text-white/90 max-w-2xl mb-8"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(1rem, 3vw, 1.4rem)",
              textShadow: "0 4px 12px rgba(0,0,0,0.6)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {config.interactiveHero.subtitle}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href="#conquistas"
              className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-8 py-4 rounded-full transition-all shadow-2xl"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(245, 158, 11, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              🏆 {config.interactiveHero.ctaConquistas}
            </motion.a>
            <motion.a
              href="#apoie"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-full transition-all border-2 border-white/40"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {config.interactiveHero.ctaParticipate}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Indicador de scroll */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-white/60"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: "0.85rem" }}>
              Role para começar
            </span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
