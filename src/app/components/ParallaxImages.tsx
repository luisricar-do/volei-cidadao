import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const parallaxImages = [
  {
    src: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&q=80",
    depth: 0.3,
    position: { top: "10%", left: "10%" },
  },
  {
    src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=600&q=80",
    depth: 0.5,
    position: { top: "30%", right: "15%" },
  },
  {
    src: "https://images.unsplash.com/photo-1593786481097-48eb4275c512?w=600&q=80",
    depth: 0.7,
    position: { bottom: "20%", left: "20%" },
  },
  {
    src: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&q=80",
    depth: 0.4,
    position: { top: "50%", right: "10%" },
  },
];

export function ParallaxImages() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] bg-gradient-to-b from-white to-gray-100 overflow-hidden"
    >
      {/* Título da seção */}
      <motion.div
        className="relative z-20 text-center py-20 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2
          className="text-[#0F1F4E] mb-4"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: 1.2,
          }}
        >
          Momentos que <span className="text-[#F59E0B]">Transformam</span>
        </h2>
        <p
          className="text-gray-600 max-w-2xl mx-auto"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 600,
            fontSize: "1.1rem",
          }}
        >
          Cada treino, cada jogo, cada conquista traz cor e vida para nossos jovens atletas
        </p>
      </motion.div>

      {/* Imagens em parallax com efeito P&B para cor */}
      {parallaxImages.map((image, index) => {
        const y = useTransform(
          scrollYProgress,
          [0, 1],
          [100 * image.depth, -100 * image.depth]
        );

        const colorProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

        return (
          <motion.div
            key={index}
            className="absolute w-48 md:w-64 rounded-2xl overflow-hidden shadow-2xl z-10"
            style={{
              ...image.position,
              y,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            {/* Imagem com filtro P&B que se torna colorida */}
            <motion.div
              style={{
                filter: useTransform(
                  colorProgress,
                  [0, 1],
                  ["grayscale(100%)", "grayscale(0%)"]
                ),
              }}
            >
              <ImageWithFallback
                src={image.src}
                alt={`Momento ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Borda que aparece quando ganha cor */}
            <motion.div
              className="absolute inset-0 border-4 border-[#F59E0B] rounded-2xl"
              style={{
                opacity: colorProgress,
              }}
            />

            {/* Overlay com gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
        );
      })}

      {/* Texto overlay central */}
      <motion.div
        className="relative z-30 flex items-center justify-center min-h-[60vh] px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 md:p-12 max-w-3xl shadow-2xl border-2 border-[#1D4ED8]/20">
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.7 }}
          >
            <div className="w-16 h-1 bg-[#1D4ED8] rounded-full" />
            <span className="text-4xl">🌟</span>
            <div className="w-16 h-1 bg-[#F59E0B] rounded-full" />
          </motion.div>

          <h3
            className="text-[#0F1F4E] text-center mb-4"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              lineHeight: 1.3,
            }}
          >
            O Esporte Traz Vida e Cor
          </h3>

          <p
            className="text-gray-700 text-center mb-6"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
              fontSize: "1.1rem",
              lineHeight: 1.7,
            }}
          >
            Através do vôlei, transformamos realidades. Cada jovem que entra na quadra descobre
            um mundo de possibilidades, disciplina e amizade que vai além do esporte.
          </p>

          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { icon: "💚", label: "Inclusão" },
              { icon: "💪", label: "Saúde" },
              { icon: "🤝", label: "Valores" },
            ].map((pillar, index) => (
              <motion.div
                key={index}
                className="p-4 bg-gradient-to-br from-[#1D4ED8]/10 to-[#F59E0B]/10 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-2">{pillar.icon}</div>
                <div
                  className="text-[#0F1F4E]"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                  }}
                >
                  {pillar.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
