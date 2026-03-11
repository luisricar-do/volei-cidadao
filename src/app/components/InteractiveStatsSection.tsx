import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { VolleyballBall } from "./VolleyballBall";

import { config } from "@/app/config";

const stats = [
  { value: config.stats.studentsDisplay, label: "Jovens Atendidos", icon: "👥" },
  { value: config.stats.ageRange, label: "Anos de Idade", icon: "🎯" },
  { value: config.stats.freeLabel, label: config.stats.gratuito, icon: "💚" },
  { value: config.brand.cityShort, label: config.brand.city, icon: "📍" },
];

export function InteractiveStatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Movimento de Manchete - bola desce e sobe
  const ballY = useTransform(scrollYProgress, [0, 0.3, 0.6], [-100, 200, 100]);
  const ballX = useTransform(scrollYProgress, [0, 0.5], [-200, 0]);
  const ballRotate = useTransform(scrollYProgress, [0, 0.6], [0, -360]);
  const ballScale = useTransform(scrollYProgress, [0, 0.3, 0.6], [0.5, 1.2, 0.8]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[120vh] bg-white overflow-hidden"
      id="stats-interactive"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle, #1D4ED8 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-20">
        {/* Título da seção */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block px-4 py-2 bg-[#1D4ED8]/10 rounded-full mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#1D4ED8" }}>
              📊 NÚMEROS QUE INSPIRAM
            </span>
          </motion.div>
          
          <h2
            className="text-[#0F1F4E] mb-4"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.2,
            }}
          >
            Impacto em <span className="text-[#F59E0B]">Movimento</span>
          </h2>
        </motion.div>

        {/* Bola fazendo manchete */}
        <motion.div
          className="absolute left-1/4 top-1/3 z-10 pointer-events-none hidden md:block"
          style={{
            y: ballY,
            x: ballX,
            rotate: ballRotate,
            scale: ballScale,
          }}
        >
          <VolleyballBall scrollProgress={scrollYProgress.get()} />
        </motion.div>

        {/* Grid de estatísticas - animadas pelo impacto da manchete */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-xl border-2 border-[#1D4ED8]/10 hover:border-[#F59E0B] transition-all"
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 30px 60px rgba(29, 78, 216, 0.2)",
                borderColor: "#F59E0B",
              }}
            >
              {/* Ícone */}
              <motion.div
                className="text-5xl mb-4"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
              >
                {stat.icon}
              </motion.div>

              {/* Valor */}
              <motion.div
                className="text-[#1D4ED8] mb-2"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 900,
                  fontSize: "3rem",
                  lineHeight: 1,
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
              >
                {stat.value}
              </motion.div>

              {/* Label */}
              <div
                className="text-gray-600"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                  fontSize: "1rem",
                }}
              >
                {stat.label}
              </div>

              {/* Efeito de impacto decorativo */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/10 to-transparent rounded-2xl opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Ondas de impacto - efeito visual */}
        <motion.div
          className="absolute left-1/4 top-1/2 w-32 h-32 rounded-full border-4 border-[#1D4ED8]/30 pointer-events-none hidden md:block"
          initial={{ scale: 0, opacity: 1 }}
          whileInView={{ scale: 3, opacity: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.div
          className="absolute left-1/4 top-1/2 w-32 h-32 rounded-full border-4 border-[#F59E0B]/30 pointer-events-none hidden md:block"
          initial={{ scale: 0, opacity: 1 }}
          whileInView={{ scale: 3.5, opacity: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, delay: 0.7 }}
        />
      </div>
    </section>
  );
}
