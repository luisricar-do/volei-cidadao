import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

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
      
      {/* Bola de vôlei 3D */}
      <motion.div
        className="relative w-full h-full rounded-full"
        style={{
          background: "linear-gradient(135deg, #FFFFFF 0%, #E5E7EB 50%, #F3F4F6 100%)",
          boxShadow: "inset -10px -10px 30px rgba(0,0,0,0.1), inset 10px 10px 30px rgba(255,255,255,0.8), 0 20px 40px rgba(0,0,0,0.15)",
        }}
      >
        {/* Linhas da bola - design realista */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 120 120"
          style={{ overflow: "visible" }}
        >
          {/* Linha central horizontal */}
          <motion.path
            d="M 20 60 Q 60 55 100 60"
            stroke="#1D4ED8"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Linhas curvas superiores */}
          <motion.path
            d="M 30 35 Q 60 30 90 35"
            stroke="#F59E0B"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Linhas curvas inferiores */}
          <motion.path
            d="M 30 85 Q 60 90 90 85"
            stroke="#F59E0B"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Linhas verticais curvas - esquerda */}
          <motion.path
            d="M 40 20 Q 35 60 40 100"
            stroke="#1D4ED8"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Linhas verticais curvas - direita */}
          <motion.path
            d="M 80 20 Q 85 60 80 100"
            stroke="#1D4ED8"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Painéis decorativos */}
          <motion.ellipse
            cx="60"
            cy="40"
            rx="15"
            ry="20"
            fill="#F59E0B"
            opacity="0.15"
          />
          <motion.ellipse
            cx="60"
            cy="80"
            rx="15"
            ry="20"
            fill="#1D4ED8"
            opacity="0.15"
          />
        </svg>
        
        {/* Highlight realista */}
        <motion.div
          className="absolute top-6 left-8 w-8 h-8 rounded-full"
          style={{
            background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
