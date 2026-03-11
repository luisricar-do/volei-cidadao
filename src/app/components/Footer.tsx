import { MapPin, Phone, Instagram, Facebook } from "lucide-react";
import logo from "figma:asset/c1425d0b700bfb985f022cdbaa8a0bc6a26be260.png";
import { config, getWhatsAppUrl } from "@/app/config";

export function Footer() {
  return (
    <footer className="bg-[#0F1F4E] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt={config.brand.name} 
                className="w-14 h-14 object-contain"
              />
              <div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '1.1rem', lineHeight: '1' }}>{config.brand.name}</div>
                <div className="text-[#F59E0B]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.75rem', lineHeight: '1.2' }}>{config.brand.city}</div>
              </div>
            </div>
            <p className="text-gray-400 mb-5" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', lineHeight: '1.6' }}>
              {config.brand.tagline} desde o início do projeto. {config.brand.taglineFull}
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href={config.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[#833AB4] hover:to-[#FD1D1D] flex items-center justify-center transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href={config.contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1877F2] flex items-center justify-center transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.524 5.855L0 24l6.29-1.501A11.947 11.947 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.367l-.36-.213-3.73.89.937-3.634-.235-.374A9.818 9.818 0 1112 21.818z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.05em' }}>
              LINKS RÁPIDOS
            </h4>
            <ul className="space-y-2">
              {config.footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#F59E0B] transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Conquistas */}
          <div>
            <h4 className="text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.05em' }}>
              CONQUISTAS 2025
            </h4>
            <div className="space-y-3">
              {config.achievements.slice(0, 2).map((a) => (
                <div key={a.title} className="flex items-start gap-2">
                  <span className="text-lg">{a.medal}</span>
                  <div>
                    <div className="text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem' }}>{a.title}</div>
                    <div className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem' }}>{a.subtitle}</div>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-2">
                <span className="text-lg">🤝</span>
                <div>
                  <div className="text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem' }}>{config.stats.studentsDisplay} Jovens</div>
                  <div className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem' }}>Atendidos gratuitamente</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.05em' }}>
              CONTATO
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#F59E0B] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', lineHeight: '1.5' }}>
                  {config.location.venueShort}<br />
                  {config.location.addressLine}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#F59E0B] flex-shrink-0" />
                <a href={`tel:+55${config.contact.whatsapp}`} className="text-gray-400 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>
                  {config.contact.whatsappDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram size={16} className="text-[#F59E0B] flex-shrink-0" />
                <a
                  href={config.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}
                >
                  {config.contact.instagramHandle}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-center sm:text-left" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.825rem' }}>
            {config.footer.copyright}
          </p>
          <p className="text-gray-500" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.825rem' }}>
            {config.footer.madeBy}
          </p>
        </div>
      </div>
    </footer>
  );
}