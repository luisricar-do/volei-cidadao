import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { VolleyballBall } from "./VolleyballBall";
import { config, hasAchievementCategory } from "@/app/config";

export function InteractiveFooter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Bola caindo no "cesto" - movimento final
  const ballY = useTransform(scrollYProgress, [0, 0.5, 1], [-200, 100, 400]);
  const ballRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const ballScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.3]);
  const ballOpacity = useTransform(scrollYProgress, [0, 0.5, 0.9, 1], [1, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-white to-[#0F1F4E] overflow-hidden"
      id="apoie"
    >
      {/* Bola caindo - "Match Point" */}
      <motion.div
        className="absolute left-1/2 top-20 -translate-x-1/2 z-30 pointer-events-none hidden md:block"
        style={{
          y: ballY,
          rotate: ballRotate,
          scale: ballScale,
          opacity: ballOpacity,
        }}
      >
        <VolleyballBall scrollProgress={scrollYProgress.get()} />
      </motion.div>

      {/* Cesto visual - onde a bola cai */}
      <motion.div
        className="absolute left-1/2 top-[60%] -translate-x-1/2 w-32 h-20 border-4 border-dashed border-[#F59E0B] rounded-b-full z-20 hidden md:block"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, type: "spring" }}
      >
        <motion.div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-4xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          🏀
        </motion.div>
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-4 py-20">
        {/* CTA Principal - Match Point */}
        <motion.div
          className="text-center mb-20 relative z-30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-6 py-3 bg-[#F59E0B] rounded-full mb-6"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1rem", color: "white" }}>
              ⚡ MATCH POINT
            </span>
          </motion.div>

          <h2
            className="text-[#0F1F4E] mb-6"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.2,
            }}
          >
            Faça Parte dessa<br />
            <span className="text-[#1D4ED8]">História</span>
          </h2>

          <p
            className="text-gray-700 max-w-2xl mx-auto mb-10"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
              fontSize: "1.2rem",
              lineHeight: 1.7,
            }}
          >
            Junte-se a {config.stats.studentsDisplay} jovens que estão transformando suas vidas através do vôlei.
            <br />
            Treinamentos {config.stats.freeLabel} gratuitos
            <br />
            <span className="text-[#0F1F4E]">
              Interessado em participar? Preencha a lista de espera (9 a 11 anos) no formulário.
            </span>
          </p>

          {/* Botão pulsante */}
          <motion.a
            href={config.contact.waitlistFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1D4ED8] to-[#0F1F4E] text-white px-12 py-6 rounded-full shadow-2xl"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "1.3rem",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 30px 60px rgba(29, 78, 216, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 20px 40px rgba(29, 78, 216, 0.3)",
                "0 25px 50px rgba(29, 78, 216, 0.5)",
                "0 20px 40px rgba(29, 78, 216, 0.3)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <span className="text-2xl">📋</span>
            Lista de espera — inscreva-se
          </motion.a>
        </motion.div>

        {/* Rodapé tradicional */}
        <footer className="bg-[#0F1F4E] rounded-3xl shadow-2xl overflow-hidden relative z-30">
          <div className="px-6 sm:px-8 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              {/* Brand */}
              <motion.div
                className="text-center sm:text-left"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-3 justify-center sm:justify-start mb-4">
                  <img
                    src={logo}
                    alt={config.brand.name}
                    className="w-14 h-14 object-contain"
                  />
                  <div>
                    <div className="text-white" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, fontSize: "1.2rem", lineHeight: 1 }}>
                      {config.brand.name}
                    </div>
                    <div className="text-[#F59E0B]" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: "0.8rem" }}>
                      {config.brand.city}
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 mb-5" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", lineHeight: 1.6 }}>
                  {config.brand.tagline}. {config.brand.taglineFull}
                </p>
                {/* Social */}
                <div className="flex gap-3 justify-center sm:justify-start">
                  <motion.a
                    href={config.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[#833AB4] hover:to-[#FD1D1D] flex items-center justify-center transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Instagram size={20} className="text-white" />
                  </motion.a>
                  <motion.a
                    href={config.contact.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#1877F2] flex items-center justify-center transition-all"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Facebook size={20} className="text-white" />
                  </motion.a>
                </div>
              </motion.div>

              {/* Contato */}
              <motion.div
                className="text-center sm:text-left"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1rem" }}>
                  CONTATO
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 justify-center sm:justify-start">
                    <MapPin size={18} className="text-[#F59E0B] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", lineHeight: 1.5 }}>
                      {config.location.venueShort}<br />
                      {config.location.addressLine}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 justify-center sm:justify-start">
                    <Instagram size={18} className="text-[#F59E0B] flex-shrink-0" />
                    <a
                      href={config.contact.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}
                    >
                      {config.contact.instagramHandle}
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Conquistas */}
              <motion.div
                className="text-center sm:text-left"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h4 className="text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1rem" }}>
                  Conquistas recentes
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 justify-center sm:justify-start">
                    <span className="text-2xl" aria-hidden>{config.achievements[0].medal}</span>
                    <div>
                      <div className="text-white" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.9rem" }}>
                        {config.achievements[0].title}
                      </div>
                      <div className="text-gray-400" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem" }}>
                        {config.achievements[0].event}
                      </div>
                      {hasAchievementCategory(config.achievements[0].category) && (
                        <div className="text-gray-500" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem" }}>
                          {config.achievements[0].category}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-start gap-2 justify-center sm:justify-start">
                    <span className="text-2xl" aria-hidden>{config.achievements[1].medal}</span>
                    <div>
                      <div className="text-white" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.9rem" }}>
                        {config.achievements[1].title}
                      </div>
                      <div className="text-gray-400" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem" }}>
                        {config.achievements[1].event}
                      </div>
                      {hasAchievementCategory(config.achievements[1].category) && (
                        <div className="text-gray-500" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem" }}>
                          {config.achievements[1].category}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-gray-500 text-center sm:text-left" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem" }}>
                {config.footer.copyright}
              </p>
              <p className="text-gray-500" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem" }}>
                Feito com carinho por <a href="https://www.luisr.com.br" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">Luis Ricardo</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
