import { Heart, Star, Users } from "lucide-react";

const coachImg = "https://images.unsplash.com/photo-1761039808159-f02b58f07032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMHNwb3J0cyUyMGNvYWNoJTIwdHJhaW5pbmclMjBmaWVsZCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NzMyNTE3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080";

const pillars = [
  {
    icon: Users,
    title: "Inclusão Social",
    description: "Acesso gratuito a treinos, uniformes e materiais de qualidade para todos, unindo alunos de escolas públicas e particulares.",
    color: "#1D4ED8",
    bg: "#EFF6FF",
  },
  {
    icon: Heart,
    title: "Saúde e Bem-Estar",
    description: "Combate ao sedentarismo e foco no desenvolvimento físico e mental de cada jovem atleta.",
    color: "#DC2626",
    bg: "#FEF2F2",
  },
  {
    icon: Star,
    title: "Valores e Ética",
    description: "Disciplina, trabalho em equipe e respeito dentro e fora de quadra formam cidadãos prontos para a vida.",
    color: "#F59E0B",
    bg: "#FFFBEB",
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1D4ED8] px-4 py-1.5 rounded-full mb-4">
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.08em' }}>SOBRE O PROJETO</span>
          </div>
          <h2 className="text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
            O Saque Inicial para<br className="hidden sm:block" />
            <span className="text-[#1D4ED8]"> um Futuro Melhor</span>
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img src={coachImg} alt="Treinador Rafael com os alunos" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D4ED8]/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-[#F59E0B] text-white px-4 py-3 rounded-xl shadow-lg">
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '1.4rem', lineHeight: '1' }}>100%</div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.75rem' }}>Voluntário</div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="text-gray-600 mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', lineHeight: '1.75' }}>
              Idealizado pelo <strong className="text-gray-900">Treinador Rafael</strong>, o Projeto Vôlei Cidadão nasceu do desejo de oferecer mais do que iniciação esportiva. Atuamos no <strong className="text-[#1D4ED8]">contra-turno escolar</strong> para jovens de 9 a 17 anos, unindo alunos de escolas públicas e particulares em uma única rede de apoio.
            </p>
            <p className="text-gray-600 mb-8" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', lineHeight: '1.75' }}>
              Aqui, o vôlei é a ferramenta para <strong className="text-gray-900">fortalecer vínculos</strong>, promover a saúde e formar cidadãos prontos para a vida.
            </p>

            {/* Key points */}
            <div className="space-y-3">
              {[
                "Treinos realizados no Centro de Lazer José Antonio Teixeira",
                "Projeto 100% gratuito — sem nenhum custo para as famílias",
                "Acompanhamento pedagógico e esportivo individual",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-[#1D4ED8] flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: '1.5' }}>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div>
          <h3 className="text-center text-gray-800 mb-8" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.3rem' }}>
            Os Pilares do Projeto
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl p-6 transition-transform hover:-translate-y-1"
                style={{ backgroundColor: pillar.bg }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: pillar.color + '18' }}
                >
                  <pillar.icon size={24} style={{ color: pillar.color }} />
                </div>
                <h4 className="text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.05rem' }}>
                  {pillar.title}
                </h4>
                <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
