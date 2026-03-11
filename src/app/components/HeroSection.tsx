import { ChevronDown } from "lucide-react";
import { config, getAssetUrl, getWhatsAppUrl } from "@/app/config";

export function HeroSection() {
  const { hero, nav, stats } = config;
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={getAssetUrl(hero.image)}
          alt="Treino de Vôlei"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1D4ED8]/85 via-[#1D4ED8]/75 to-[#0F2A6E]/90" />
      </div>

      {/* Decorative volleyball pattern */}
      <div className="absolute top-20 right-4 md:right-16 opacity-10">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="90" cy="90" r="80" stroke="white" strokeWidth="3"/>
          <path d="M90 10C90 10 50 50 50 90C50 130 90 170 90 170" stroke="white" strokeWidth="3"/>
          <path d="M90 10C90 10 130 50 130 90C130 130 90 170 90 170" stroke="#F59E0B" strokeWidth="3"/>
          <path d="M10 90H170" stroke="white" strokeWidth="3"/>
          <path d="M15 60H165" stroke="white" strokeWidth="1.5" strokeDasharray="6 6"/>
          <path d="M15 120H165" stroke="white" strokeWidth="1.5" strokeDasharray="6 6"/>
        </svg>
      </div>
      <div className="absolute bottom-20 left-4 md:left-12 opacity-8">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="52" stroke="white" strokeWidth="2"/>
          <path d="M60 8C60 8 35 35 35 60C35 85 60 112 60 112" stroke="white" strokeWidth="2"/>
          <path d="M60 8C60 8 85 35 85 60C85 85 60 112 60 112" stroke="#F59E0B" strokeWidth="2"/>
          <path d="M8 60H112" stroke="white" strokeWidth="2"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#F59E0B]/20 border border-[#F59E0B]/40 text-[#FCD34D] px-4 py-1.5 rounded-full mb-6">
          <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em' }}>
            🏐 {hero.badge}
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-white mb-4 px-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem, 6vw, 3.75rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
          {hero.headline.split(',')[0]},<br />
          <span className="text-[#F59E0B]">{hero.headline.split(',')[1]?.trim()}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-blue-100 max-w-2xl mx-auto mb-8 px-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', lineHeight: '1.7' }}>
          Transformamos o futuro de <strong className="text-white">{stats.totalStudents} crianças e jovens</strong> em {config.brand.city} através do esporte, da disciplina e da cidadania.
          <span className="block mt-1 text-[#FCD34D] font-semibold">{hero.subtitleHighlight}</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] active:scale-95 text-white px-8 py-4 rounded-full transition-all shadow-lg shadow-amber-500/30"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1rem' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.524 5.855L0 24l6.29-1.501A11.947 11.947 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.367l-.36-.213-3.73.89.937-3.634-.235-.374A9.818 9.818 0 1112 21.818z"/>
            </svg>
            {nav.ctaText}
          </a>
          <a
            href="#sobre"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 active:scale-95 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full transition-all"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1rem' }}
          >
            {hero.ctaStory}
          </a>
        </div>

        {/* Quick stats */}
        <div className="mt-12 grid grid-cols-3 gap-2 sm:gap-6 max-w-sm sm:max-w-md mx-auto">
          {hero.quickStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.4rem, 4vw, 2rem)', lineHeight: '1' }}>{stat.value}</div>
              <div className="text-blue-200 mt-0.5" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: 500 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#sobre" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce">
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
