import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { VolleyballBall } from "./VolleyballBall";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const achievements = [
  {
    title: "Copa CISMA 2025",
    subtitle: "Campeões Sub-18",
    image: "https://images.unsplash.com/photo-1593786481097-48eb4275c512?w=800&q=80",
    medal: "🏆",
  },
  {
    title: "Taça Ouro",
    subtitle: "4º Lugar - Copa Amizade",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80",
    medal: "🥉",
  },
  {
    title: "Treinos Intensivos",
    subtitle: "Formando Atletas Campeões",
    image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=800&q=80",
    medal: "💪",
  },
  {
    title: "União e Dedicação",
    subtitle: "Time Vôlei Cidadão",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80",
    medal: "🤝",
  },
];

export function InteractiveGallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Bola descendo pelo corredor da fama
  const ballY = useTransform(
    scrollYProgress,
    [0, 0.15, 0.75, 0.9],
    [-200, 0, 1800, 2000]
  );
  const ballX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.45, 0.65, 0.85],
    [0, 100, -100, 100, -50]
  );
  const ballRotate = useTransform(
    scrollYProgress,
    [0, 0.85],
    [0, 720]
  );
  const ballScale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.75, 0.9],
    [0.8, 1.2, 1.1, 0.8]
  );
  const ballOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.75, 0.9],
    [0, 1, 1, 0]
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[300vh] bg-gradient-to-br from-[#0F1F4E] to-[#1D4ED8] overflow-hidden"
      id="conquistas"
    >
      {/* Background pattern animado */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* Linha central do corredor da fama */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#F59E0B]/30 to-transparent hidden md:block" />

      <div className="relative max-w-6xl mx-auto px-4 py-20">
        {/* Título da seção */}
        <motion.div
          className="text-center mb-32 sticky top-20 z-30 bg-[#0F1F4E]/80 backdrop-blur-sm py-8 rounded-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block px-4 py-2 bg-[#F59E0B] rounded-full mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "white" }}>
              🏆 CORREDOR DA FAMA
            </span>
          </motion.div>
          
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.2,
            }}
          >
            Nossos <span className="text-[#F59E0B]">Troféus</span>
          </h2>

          <p className="text-white/80 max-w-2xl mx-auto" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: "1.1rem" }}>
            Celebrando cada vitória conquistada com dedicação e trabalho em equipe
          </p>
        </motion.div>

        {/* Bola descendo pelo corredor */}
        <motion.div
          className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none hidden md:block"
          style={{
            y: ballY,
            x: ballX,
            rotate: ballRotate,
            scale: ballScale,
            opacity: ballOpacity,
          }}
        >
          <VolleyballBall scrollProgress={scrollYProgress.get()} />
          
          {/* Rastro dourado */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(245,158,11,0.5) 0%, transparent 70%)",
              filter: "blur(40px)",
              scale: 1.8,
              opacity: useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 0.8, 0.8, 0]),
            }}
          />
        </motion.div>

        {/* Conquistas - Corredor da Fama */}
        <div className="space-y-32 mt-20">
          {achievements.map((achievement, index) => {
            const isEven = index % 2 === 0;
            const startProgress = 0.2 + (index * 0.15);
            const endProgress = startProgress + 0.1;

            return (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{
                  opacity: useTransform(
                    scrollYProgress,
                    [startProgress - 0.1, startProgress, endProgress, endProgress + 0.1],
                    [0, 1, 1, 0.3]
                  ),
                  scale: useTransform(
                    scrollYProgress,
                    [startProgress - 0.1, startProgress],
                    [0.8, 1]
                  ),
                }}
              >
                {/* Imagem da conquista */}
                <motion.div 
                  className="flex-1 relative group"
                  style={{
                    x: useTransform(
                      scrollYProgress,
                      [startProgress - 0.1, startProgress],
                      [isEven ? -100 : 100, 0]
                    ),
                  }}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <ImageWithFallback
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Medalha flutuante */}
                    <motion.div
                      className="absolute top-4 right-4 text-7xl"
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, 0, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {achievement.medal}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Descrição da conquista */}
                <motion.div
                  className="flex-1"
                  style={{
                    x: useTransform(
                      scrollYProgress,
                      [startProgress - 0.1, startProgress],
                      [isEven ? 100 : -100, 0]
                    ),
                  }}
                >
                  <div className={`p-8 bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-[#F59E0B]/30 ${
                    isEven ? "md:text-right" : "md:text-left"
                  } text-center`}>
                    <h3
                      className="text-white mb-4"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 900,
                        fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                        lineHeight: 1.2,
                      }}
                    >
                      {achievement.title}
                    </h3>
                    <p
                      className="text-[#F59E0B]"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 700,
                        fontSize: "1.2rem",
                      }}
                    >
                      {achievement.subtitle}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}