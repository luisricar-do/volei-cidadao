import { config } from "@/app/config";

const getGalleryImages = () => [
  {
    src: "https://images.unsplash.com/photo-1764408721535-2dcb912db83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2xsZXliYWxsJTIwdGVhbSUyMGNlbGVicmF0aW9uJTIwdHJvcGh5JTIwd2lubmVyc3xlbnwxfHx8fDE3NzMyNTE3Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: `🏆 Campeões ${config.achievements[0].title}`,
    subtitle: "Nossa equipe Sub-18 no topo do pódio regional!",
    badge: "CAMPEÕES",
    badgeColor: "#F59E0B",
    large: true,
  },
  {
    src: "https://images.unsplash.com/photo-1765108922700-6d6f37f582c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2xsZXliYWxsJTIwYWN0aW9uJTIwc3Bpa2UlMjBqdW1wJTIwaW5kb29yJTIwY291cnR8ZW58MXx8fHwxNzczMjUxNzcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: `🏅 ${config.achievements[1].title} - Copa Amizade`,
    subtitle: config.achievements[1].subtitle,
    badge: "4º LUGAR",
    badgeColor: "#1D4ED8",
    large: false,
  },
  {
    src: "https://images.unsplash.com/photo-1629495025620-26d5f4ada7c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwc21pbGluZyUyMGhhcHB5JTIwc3BvcnQlMjB0ZWFtJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzMyNTE3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: `🤝 ${config.stats.studentsDisplay} Sorrisos`,
    subtitle: `Jovens atendidos no ${config.location.venueShort}.`,
    badge: "COMUNIDADE",
    badgeColor: "#16A34A",
    large: false,
  },
  {
    src: "https://images.unsplash.com/photo-1763219805706-c06119d985f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2xsZXliYWxsJTIwYmVhY2glMjBvdXRkb29yJTIwbmV0JTIwZ2FtZXxlbnwxfHx8fDE3NzMyNTE3NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "⚡ Treinos Intensos",
    subtitle: "Dedicação e paixão a cada treino.",
    badge: "TREINO",
    badgeColor: "#7C3AED",
    large: false,
  },
];

export function GallerySection() {
  const images = getGalleryImages();
  return (
    <section id="conquistas" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-[#F59E0B] px-4 py-1.5 rounded-full mb-4">
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.08em' }}>GALERIA DE CONQUISTAS</span>
          </div>
          <h2 className="text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
            Orgulho da Nossa <span className="text-[#1D4ED8]">Comunidade</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: '1.6' }}>
            Cada conquista é resultado do esforço coletivo dos nossos jovens, famílias e voluntários.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large featured image */}
          <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer shadow-md" style={{ minHeight: '280px' }}>
            <img
              src={images[0].src}
              alt={images[0].title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ minHeight: '280px', maxHeight: '480px' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute top-3 left-3">
              <span
                className="text-white px-3 py-1 rounded-full text-xs"
                style={{ backgroundColor: images[0].badgeColor, fontFamily: 'Montserrat, sans-serif', fontWeight: 800, letterSpacing: '0.06em' }}
              >
                {images[0].badge}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
              <h3 className="text-white mb-1" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.05rem', lineHeight: '1.3' }}>
                {images[0].title}
              </h3>
              <p className="text-gray-200" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', lineHeight: '1.4' }}>
                {images[0].subtitle}
              </p>
            </div>
          </div>

          {/* Smaller images */}
          {images.slice(1).map((img) => (
            <div
              key={img.title}
              className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-md"
              style={{ minHeight: '200px' }}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ minHeight: '200px', maxHeight: '240px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute top-3 left-3">
                <span
                  className="text-white px-3 py-1 rounded-full text-xs"
                  style={{ backgroundColor: img.badgeColor, fontFamily: 'Montserrat, sans-serif', fontWeight: 800, letterSpacing: '0.06em' }}
                >
                  {img.badge}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <h3 className="text-white mb-0.5" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '0.95rem', lineHeight: '1.3' }}>
                  {img.title}
                </h3>
                <p className="text-gray-200" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', lineHeight: '1.4' }}>
                  {img.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-8 text-center">
          <a
            href={config.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white px-6 py-3 rounded-full hover:opacity-90 active:scale-95 transition-all shadow-md"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.95rem' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Seguir no Instagram {config.contact.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
