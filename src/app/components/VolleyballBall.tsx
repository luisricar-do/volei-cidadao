import { motion } from "motion/react";
import ballImage from "@/assets/ball.png";

interface VolleyballBallProps {
  scrollProgress: number;
  className?: string;
}

export function VolleyballBall({ scrollProgress, className = "" }: VolleyballBallProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{
        width: "120px",
        height: "120px",
      }}
    >
      {/* Sombra dinâmica */}
      <motion.div
        className="absolute inset-0 rounded-full bg-black/20 blur-xl"
        style={{
          transform: `translateY(${10 + scrollProgress * 5}px) scale(${0.8 + scrollProgress * 0.2})`,
        }}
      />

      {/* Bola de vôlei - imagem */}
      <motion.div className="relative w-full h-full rounded-full overflow-hidden">
        <img
          src={ballImage}
          alt="Bola de vôlei"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
}
