import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { MapPin, Clock, Phone, ChevronRight } from "lucide-react";
import { config, getWhatsAppUrl } from "@/app/config";
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
          {/* Coluna esquerda: Horários + Contato */}
          <div className="space-y-5">
            {/* Schedule */}
            <div className="bg-gray-50 rounded-2xl p-5 md:p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#F59E0B] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-white" />
                </div>
                <h3 className="text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1rem' }}>
                  Horários por Turma
                </h3>
              </div>
              <div className="space-y-3">
                {config.schedule.map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div>
                        <span
                          className="inline-block bg-[#1D4ED8] text-white px-2.5 py-0.5 rounded-full mb-1"
                          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '0.75rem' }}
                        >
                          {item.age}
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
                * Horários sujeitos a alteração. Confirme pelo WhatsApp.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-[#1D4ED8] rounded-2xl p-5 md:p-6">
              <div className="flex items-center gap-3 mb-2">
                <Phone size={20} className="text-[#FCD34D]" />
                <span className="text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.95rem' }}>
                  Fale com o {config.brand.coachName}
                </span>
              </div>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE57] active:scale-95 text-white px-5 py-3 rounded-xl transition-all"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.95rem' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.524 5.855L0 24l6.29-1.501A11.947 11.947 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.367l-.36-.213-3.73.89.937-3.634-.235-.374A9.818 9.818 0 1112 21.818z"/>
                </svg>
                Enviar mensagem no WhatsApp
              </a>
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
