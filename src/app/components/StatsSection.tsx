import { useEffect, useRef, useState } from "react";
import { Users, Award, Calendar, MapPin } from "lucide-react";
import { config } from "@/app/config";

const statCards = [
  { icon: Users, valueKey: "totalStudents" as const, suffix: "+", label: "Jovens Atendidos", description: "crianças e adolescentes", color: "#1D4ED8" },
  { icon: Calendar, valueKey: "ageRange" as const, suffix: "", label: "Faixa Etária", description: "anos de idade", color: "#F59E0B" },
  { icon: Award, valueKey: "titles2025" as const, suffix: "", label: "Títulos em 2025", description: "competições regionais", color: "#1D4ED8" },
  { icon: MapPin, valueKey: "venueCount" as const, suffix: "", label: "Centro de Lazer", description: "Jardim dos Cisnes", color: "#F59E0B" },
];

function getStatValue(key: typeof statCards[0]["valueKey"]): number {
  const v = config.stats[key];
  return typeof v === "string" ? 0 : v;
}

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem, 6vw, 3rem)', lineHeight: '1' }}>
      {count}{suffix}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 md:py-20 bg-[#1D4ED8] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="4"/>
          <path d="M100 10C100 10 60 60 60 100C60 140 100 190 100 190" stroke="white" strokeWidth="4"/>
          <path d="M100 10C100 10 140 60 140 100C140 140 100 190 100 190" stroke="white" strokeWidth="4"/>
          <path d="M10 100H190" stroke="white" strokeWidth="4"/>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-5">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="4"/>
          <path d="M100 10C100 10 60 60 60 100C60 140 100 190 100 190" stroke="white" strokeWidth="4"/>
          <path d="M100 10C100 10 140 60 140 100C140 140 100 190 100 190" stroke="white" strokeWidth="4"/>
          <path d="M10 100H190" stroke="white" strokeWidth="4"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/15 text-yellow-300 px-4 py-1.5 rounded-full mb-4">
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.08em' }}>NÚMEROS QUE INSPIRAM</span>
          </div>
          <h2 className="text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: '1.15' }}>
            Impacto Real na<br />
            <span className="text-[#FCD34D]">Nossa Comunidade</span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {statCards.map((stat) => {
            const value = stat.valueKey === "ageRange" ? 9 : getStatValue(stat.valueKey);
            const suffix = stat.valueKey === "ageRange" ? "-17" : stat.suffix;
            return (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 md:p-6 text-center hover:bg-white/15 transition-colors"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-11 h-11 rounded-xl bg-[#F59E0B]/20 flex items-center justify-center">
                    <stat.icon size={22} className="text-[#FCD34D]" />
                  </div>
                </div>
                <div className="text-white mb-1">
                  <AnimatedCounter target={value} suffix={suffix} />
                </div>
                <div className="text-white mb-1" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.9rem' }}>
                  {stat.label}
                </div>
                <div className="text-blue-200" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem' }}>
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner */}
        <div className="mt-10 bg-[#F59E0B] rounded-2xl p-6 md:p-8 text-center">
          <p className="text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.4' }}>
            🏆 {config.achievementsBanner.title}
          </p>
          <p className="text-white/85 mt-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem' }}>
            {config.achievementsBanner.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
