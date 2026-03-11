import { Gift, Package, Truck, ChevronRight } from "lucide-react";
import { config, getWhatsAppUrl } from "@/app/config";

const ways = [
  {
    icon: Package,
    title: "Materiais Esportivos",
    description: "Bolas, redes, joelheiras e equipamentos para os treinos e competições.",
  },
  {
    icon: Gift,
    title: "Uniformes",
    description: "Camisas, shorts e tênis para que nenhum jovem treine sem o kit completo.",
  },
  {
    icon: Truck,
    title: "Apoio Logístico",
    description: "Transporte para competições regionais e intermunicipais.",
  },
];

export function HelpSection() {
  return (
    <section id="apoie" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#F59E0B]/8 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#1D4ED8]/8 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-[#F59E0B] px-4 py-1.5 rounded-full mb-4">
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.08em' }}>SEJA UM APOIADOR</span>
          </div>
          <h2 className="text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
            Ajude a Manter <br className="sm:hidden" />
            <span className="text-[#1D4ED8]">esse Sonho Vivo</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: '1.7' }}>
            O {config.brand.name} é uma iniciativa voluntária. Sua empresa ou família pode contribuir com a doação de materiais, uniformes ou apoio logístico para competições. <strong>Cada contribuição transforma uma vida.</strong>
          </p>
        </div>

        {/* Ways to help */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-10">
          {ways.map((way) => (
            <div
              key={way.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 bg-[#FFF8EC] rounded-xl flex items-center justify-center mb-4">
                <way.icon size={24} className="text-[#F59E0B]" />
              </div>
              <h3 className="text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1rem' }}>
                {way.title}
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', lineHeight: '1.6' }}>
                {way.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#1D4ED8] to-[#1E40AF] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', lineHeight: '1.2' }}>
              Quer ser nosso parceiro?
            </h3>
            <p className="text-blue-200" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: '1.5' }}>
              Entre em contato e descubra como apoiar o projeto.
              <br className="hidden sm:block" />
              Sua marca associada à transformação social.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={getWhatsAppUrl(config.whatsappMessages.support)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] active:scale-95 text-white px-6 py-3.5 rounded-full transition-all shadow-lg"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '0.95rem', whiteSpace: 'nowrap' }}
            >
              Seja um Apoiador
              <ChevronRight size={16} />
            </a>
            <a
              href={config.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white px-6 py-3.5 rounded-full transition-all"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.95rem', whiteSpace: 'nowrap' }}
            >
              Conheça o Projeto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
