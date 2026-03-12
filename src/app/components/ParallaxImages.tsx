import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "motion/react";
import { useRef } from "react";
import { config, getAssetUrl } from "@/app/config";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import lottieCharacter1 from "@/assets/lottie/Volley_Ball_Player_Character1.json?url";
import lottieCharacter2 from "@/assets/lottie/Volley_Ball_Player_Character2.json?url";
import lottieCharacter3 from "@/assets/lottie/Volley_Ball_Player_Character3.json?url";

const MOMENT_LOTTIES = [
  lottieCharacter1,
  lottieCharacter2,
  lottieCharacter3,
  lottieCharacter1,
] as const;

const PILLARS = [
  { icon: "💚", label: "Inclusão" },
  { icon: "💪", label: "Saúde" },
  { icon: "🤝", label: "Valores" },
] as const;

function MomentCard({
  src,
  alt,
  index,
}: {
  src: string;
  alt: string;
  index: number;
}) {
  return (
    <motion.article
      className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200 shadow-xl ring-1 ring-black/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <ImageWithFallback
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div
        className="absolute inset-0 rounded-2xl ring-2 ring-[#F59E0B] ring-opacity-0 group-hover:ring-opacity-100 transition-opacity duration-300 pointer-events-none"
        aria-hidden
      />
    </motion.article>
  );
}

export function ParallaxImages() {
  const sectionRef = useRef<HTMLElement>(null);
  const moments = config.momentos.images.map((item) => ({
    src: getAssetUrl(item.image),
    alt: `Momento do projeto Vôlei Cidadão`,
  }));

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 md:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-10 md:gap-14">
            <motion.header
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2
                className="text-[#0F1F4E] mb-3"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)",
                  lineHeight: 1.2,
                }}
              >
                Momentos que{" "}
                <span className="text-[#F59E0B]">Transformam</span>
              </h2>
              <p
                className="text-gray-600 max-w-xl"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                  fontSize: "1rem",
                }}
              >
                Cada treino, cada jogo, cada conquista traz cor e vida para
                nossos jovens atletas
              </p>
            </motion.header>

            {/* Cada momento: Lottie ao lado da imagem, aparecem uma a uma ao rolar */}
            <div className="flex flex-col gap-8 md:gap-10">
              {moments.map((m, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "0px 0px -80px 0px", amount: 0.25 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.05,
                    ease: "easeOut",
                  }}
                >
                  <div
                    className="flex-shrink-0 flex justify-center md:justify-end items-center w-full md:w-[min(340px,42%)] h-[220px] md:h-auto md:min-h-[380px] overflow-visible"
                    aria-hidden
                  >
                    <div className="scale-150 md:scale-[1.75] origin-center">
                      <DotLottieReact
                        src={MOMENT_LOTTIES[i]}
                        loop
                        autoplay
                        className="h-full w-auto max-h-[280px] md:max-h-[320px] object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <MomentCard src={m.src} alt={m.alt} index={i} />
                  </div>
                </motion.div>
              ))}
            </div>
        </div>
      </div>

      {/* Bloco "O Esporte Traz Vida e Cor" — largura total da seção, conteúdo centralizado */}
      <motion.div
        className="w-full mt-16 md:mt-20 flex justify-center px-4 md:px-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px 0px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="w-full max-w-4xl rounded-3xl border-2 border-[#1D4ED8]/15 bg-white/95 p-8 md:p-12 shadow-xl shadow-[#1D4ED8]/5 backdrop-blur-sm">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-12 bg-[#1D4ED8] rounded-full" />
                <span className="text-3xl" aria-hidden>🌟</span>
                <span className="h-px w-12 bg-[#F59E0B] rounded-full" />
              </div>
              <h3
                className="text-[#0F1F4E] mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                  lineHeight: 1.3,
                }}
              >
                O Esporte Traz Vida e Cor
              </h3>
              <p
                className="text-gray-700 mb-8 max-w-2xl text-sm md:text-base"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                  lineHeight: 1.65,
                }}
              >
                Através do vôlei, transformamos realidades. Cada jovem que entra
                na quadra descobre um mundo de possibilidades, disciplina e
                amizade que vai além do esporte.
              </p>
              <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                {PILLARS.map((pillar, index) => (
                  <motion.div
                    key={pillar.label}
                    className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-[#1D4ED8]/10 to-[#F59E0B]/10 border border-[#1D4ED8]/10"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.2 + index * 0.08,
                    }}
                    whileHover={{ scale: 1.04 }}
                  >
                    <span className="text-3xl mb-2 block">{pillar.icon}</span>
                    <span
                      className="text-[#0F1F4E] font-bold text-sm"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {pillar.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
    </section>
  );
}
