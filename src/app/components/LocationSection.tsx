import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { MapPin, Clock, ChevronRight } from "lucide-react";
import { config } from "@/app/config";
import volleyballLottie from "@/assets/lottie/volleyball.lottie?url";

export function LocationSection() {
  return (
    <section id="local" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1D4ED8] px-4 py-1.5 rounded-full mb-4">
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.08em' }}>ONDE TREINAMOS</span>
          </div>
          <h2 className="text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
            Nossa <span className="text-[#1D4ED8]">Casa</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: '1.6' }}>
            Um ambiente seguro e preparado para receber nossos atletas.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Coluna esquerda: Horários */}
          <div className="space-y-5">
            {/* Schedule */}
            <div className="bg-gray-50 rounded-2xl p-5 md:p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#F59E0B] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-white" />
                </div>
                <h3 className="text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1rem' }}>
                  Horários de treino
                </h3>
              </div>
              <div className="space-y-3">
                {config.schedule.map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div>
                        <span
                          className="inline-block bg-[#1D4ED8] text-white px-2.5 py-0.5 rounded-full mb-1 max-w-[min(100%,16rem)] text-left leading-snug"
                          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '0.75rem' }}
                          title={item.venue}
                        >
                          {item.venueShort ?? item.venue}
                        </span>
                        <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem' }}>{item.days}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[#F59E0B]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '0.95rem' }}>
                          {item.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 mt-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem' }}>
                * Horários sujeitos a alteração.
              </p>
            </div>
          </div>

          {/* Coluna direita: Card do local + animação abaixo */}
          <div className="flex flex-col gap-4 lg:gap-5">
            {/* Location card */}
            <div className="relative rounded-2xl p-5 md:p-6 border border-blue-100 overflow-hidden bg-[#EFF6FF]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1D4ED8]/15 to-transparent pointer-events-none" aria-hidden />
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1D4ED8] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1rem' }}>
                    {config.location.venueFull}
                  </h3>
                  <p className="text-[#1D4ED8]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.9rem' }}>
                    {config.location.venueSubtitle}
                  </p>
                  <p className="text-gray-600 mt-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem' }}>
                    {config.location.addressFull}
                  </p>
                  <a
                    href={config.location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-[#1D4ED8] hover:text-[#1E40AF] transition-colors"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem' }}
                  >
                    Ver no mapa <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Segundo polo de treino */}
            <div className="relative rounded-2xl p-5 md:p-6 border border-amber-100 overflow-hidden bg-[#FFFBEB]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F59E0B]/10 to-transparent pointer-events-none" aria-hidden />
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F59E0B] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1rem' }}>
                    {config.location.secondaryVenue.venueFull}
                  </h3>
                  <p className="text-gray-600 mt-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem' }}>
                    {config.location.secondaryVenue.addressFull}
                  </p>
                  {config.location.secondaryVenue.mapUrl ? (
                    <a
                      href={config.location.secondaryVenue.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-[#D97706] hover:text-[#B45309] transition-colors"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem' }}
                    >
                      Ver no mapa <ChevronRight size={14} />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>

            {/* Animação vôlei — abaixo do card */}
            <div className="rounded-2xl overflow-hidden flex items-center justify-center min-h-[140px] lg:min-h-[200px]" aria-hidden>
              <DotLottieReact
                src={volleyballLottie}
                loop
                autoplay
                className="w-full h-full max-h-[160px] lg:max-h-[240px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
