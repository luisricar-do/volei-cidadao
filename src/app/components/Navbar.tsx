import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { config } from "@/app/config";

function navToForHash(href: string): string {
  return href.startsWith("#") ? `/${href}` : href;
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { nav, brand } = config;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
          >
            <img
              src={logo}
              alt={brand.name}
              className="w-12 h-12 object-contain"
            />
            <div className="leading-tight text-left">
              <div className="text-[#1D4ED8]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '0.85rem', lineHeight: '1' }}>{brand.nameShort}</div>
              <div className="text-[#F59E0B]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.7rem', lineHeight: '1' }}>{brand.nameSuffix}</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {nav.links.map((link) =>
              link.href.startsWith("#") ? (
                <Link
                  key={link.href}
                  to={navToForHash(link.href)}
                  className="text-gray-600 hover:text-[#1D4ED8] transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.85rem' }}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-[#1D4ED8] transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.85rem' }}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          <a
            href={config.contact.waitlistFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white px-4 py-2 rounded-full transition-colors"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem' }}
          >
            {nav.ctaText}
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-[#1D4ED8]"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {nav.links.map((link) =>
              link.href.startsWith("#") ? (
                <Link
                  key={link.href}
                  to={navToForHash(link.href)}
                  onClick={() => setIsOpen(false)}
                  className="py-3 text-gray-700 hover:text-[#1D4ED8] border-b border-gray-50 transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.95rem' }}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 text-gray-700 hover:text-[#1D4ED8] border-b border-gray-50 transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.95rem' }}
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href={config.contact.waitlistFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-3 mb-2 text-center bg-[#F59E0B] hover:bg-[#D97706] text-white px-4 py-3 rounded-full transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.95rem' }}
            >
              {nav.ctaText}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
