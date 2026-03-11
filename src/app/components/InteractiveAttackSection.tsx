import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { VolleyballBall } from "./VolleyballBall";

export function InteractiveAttackSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Movimento de Ataque/Cortada - bola cruza da direita para esquerda em alta velocidade
  const ballX = useTransform(scrollYProgress, [0.2, 0.7], [300, -300]);
  const ballY = useTransform(scrollYProgress, [0.2, 0.5, 0.7], [100, -50, 100]);
  const ballRotate = useTransform(scrollYProgress, [0.2, 0.7], [0, 720]);
  const ballScale = useTransform(scrollYProgress, [0.2, 0.45, 0.7], [0.8, 1.5, 0.6]);

  // Transição de cor do fundo - azul para amarelo
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["#1D4ED8", "#1D4ED8", "#F59E0B", "#F59E0B"]
  );

  // Revelação do texto conforme a bola passa - aparece mais cedo
  const textOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);
  const textScale = useTransform(scrollYProgress, [0.15, 0.35], [0.5, 1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[120vh] overflow-hidden"
    >
      {/* Fundo com transição de cor */}
      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor }}
      />

      {/* Ondas de energia - efeito de velocidade */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 50px,
            rgba(255,255,255,0.1) 50px,
            rgba(255,255,255,0.1) 100px
          )`,
          x: useTransform(scrollYProgress, [0, 1], [0, -200]),
        }}
      />

      {/* Bola fazendo cortada */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
        style={{
          x: ballX,
          y: ballY,
          rotate: ballRotate,
          scale: ballScale,
        }}
      >
        <VolleyballBall scrollProgress={scrollYProgress.get()} />
        
        {/* Rastro de movimento */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)",
            filter: "blur(20px)",
            scale: useTransform(scrollYProgress, [0.3, 0.6], [1, 2]),
            opacity: useTransform(scrollYProgress, [0.2, 0.5, 0.7], [0, 0.8, 0]),
          }}
        />
      </motion.div>

      {/* Conteúdo - revelado pelo ataque */}
      <div className="relative h-full flex items-center justify-center px-4">
        <motion.div
          className="text-center max-w-4xl z-40"
          style={{
            opacity: textOpacity,
            scale: textScale,
          }}
        >
          {/* Troféu animado */}
          <motion.div
            className="text-8xl md:text-9xl mb-6"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
          >
            🏆
          </motion.div>

          {/* Título principal */}
          <motion.h2
            className="text-white mb-4"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              lineHeight: 1.1,
              textShadow: "0 8px 24px rgba(0,0,0,0.3)",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            CAMPEÕES<br />
            <span className="text-[#0F1F4E]">COPA CISMA 2025</span>
          </motion.h2>

          {/* Subtítulo */}
          <motion.p
            className="text-white/90 text-xl md:text-2xl mb-8"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              textShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            Categoria Sub-18 • Invictos na final
          </motion.p>

          {/* Stats da conquista */}
          <motion.div
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            {[
              { number: "15", label: "Jogos" },
              { number: "0", label: "Derrotas" },
              { number: "1º", label: "Lugar" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30"
                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.6)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className="text-white mb-2"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 900,
                    fontSize: "2.5rem",
                    lineHeight: 1,
                  }}
                >
                  {stat.number}
                </div>
                <div
                  className="text-white/80"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.a
            href="#apoie"
            className="inline-block mt-12 bg-white text-[#0F1F4E] px-10 py-5 rounded-full shadow-2xl"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "1.2rem",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1 }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Faça Parte Dessa História 🚀
          </motion.a>
        </motion.div>
      </div>

      {/* Partículas de confete */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#0F1F4E",
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            rotate: [0, 360],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </section>
  );
}