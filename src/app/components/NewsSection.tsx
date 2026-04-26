import { Calendar, Clock, MapPin, Sparkles } from "lucide-react";
import { type NewsItem, config, getAssetUrl } from "@/app/config";
import { cn } from "@/app/components/ui/utils";

function Bunting() {
  const colors = [
    "#DC2626",
    "#EAB308",
    "#16A34A",
    "#2563EB",
    "#C026D3",
  ];
  return (
    <div
      className="flex w-full max-w-2xl mx-auto justify-center gap-0.5 flex-wrap px-2 -mt-1 mb-8"
      aria-hidden
    >
      {Array.from({ length: 18 }).map((_, i) => (
        <div
          key={i}
          className="w-0 h-0 border-l-[7px] border-r-[7px] border-t-[12px] border-l-transparent border-r-transparent"
          style={{ borderTopColor: colors[i % colors.length] }}
        />
      ))}
    </div>
  );
}

function NewsCard({ item, className }: { item: NewsItem; className?: string }) {
  const imageSrc = item.image ? getAssetUrl(item.image) : null;
  const alt = item.image
    ? `Cartaz e divulgação: ${item.title}`
    : item.title;

  return (
    <article
      className={cn(
        "relative rounded-2xl border border-white/10 bg-white/[0.06] p-5 md:p-7 backdrop-blur-sm shadow-lg",
        className
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
        {imageSrc ? (
          <div className="rounded-xl overflow-hidden border border-amber-400/30 bg-[#0a1224] shadow-inner">
            <img
              src={imageSrc}
              alt={alt}
              className="w-full h-auto object-contain max-h-[min(100vw,480px)] md:max-h-[420px] mx-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
        ) : null}

        <div className={cn(!imageSrc && "md:col-span-2")}>
          {item.kicker ? (
            <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/50 bg-amber-400/15 text-amber-200 px-3 py-1 mb-3">
              <Sparkles size={14} className="shrink-0 text-amber-300" aria-hidden />
              <span
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.7rem",
                  letterSpacing: "0.08em",
                }}
              >
                {item.kicker.toUpperCase()}
              </span>
            </div>
          ) : null}

          <h3
            className="text-white mb-3"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
              lineHeight: "1.2",
            }}
          >
            {item.title}
          </h3>

          {item.excerpt ? (
            <p
              className="text-slate-200/95 mb-4"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", lineHeight: "1.55" }}
            >
              {item.excerpt}
            </p>
          ) : null}

          {item.featuredGuest ? (
            <p
              className="text-amber-200/95 mb-4"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.95rem" }}
            >
              <span className="text-amber-400/90">Show com</span>{" "}
              <span className="text-amber-100">{item.featuredGuest}</span>
            </p>
          ) : null}

          {item.highlights && item.highlights.length > 0 ? (
            <ul className="list-disc pl-4 space-y-1.5 mb-5 text-slate-200/90" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}>
              {item.highlights.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          ) : null}

          <div className="space-y-3 mb-5">
            <div className="flex items-start gap-3 text-slate-200">
              <div className="w-9 h-9 rounded-lg bg-[#F59E0B] flex items-center justify-center flex-shrink-0">
                <Calendar size={18} className="text-white" />
              </div>
              <div>
                <p
                  className="text-amber-200/90 text-xs uppercase tracking-wide mb-0.5"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                >
                  Data
                </p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem" }}>{item.dateLabel}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-slate-200">
              <div className="w-9 h-9 rounded-lg bg-[#1D4ED8] flex items-center justify-center flex-shrink-0">
                <Clock size={18} className="text-white" />
              </div>
              <div>
                <p
                  className="text-amber-200/90 text-xs uppercase tracking-wide mb-0.5"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                >
                  Horário
                </p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem" }}>{item.timeLabel}</p>
                {item.extraTimeLabel ? (
                  <p className="text-amber-100/90 mt-1" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}>
                    {item.extraTimeLabel}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="flex items-start gap-3 text-slate-200">
              <div className="w-9 h-9 rounded-lg bg-[#F59E0B] flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-white" />
              </div>
              <div>
                <p
                  className="text-amber-200/90 text-xs uppercase tracking-wide mb-0.5"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                >
                  Local
                </p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem" }}>{item.venue}</p>
                {item.city ? (
                  <p className="text-slate-300" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}>
                    {item.city}
                  </p>
                ) : null}
                {item.mapUrl ? (
                  <a
                    href={item.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 text-amber-300 hover:text-amber-200 underline underline-offset-2"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: "0.85rem" }}
                  >
                    Ver no mapa
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function NewsSection() {
  const items = config.news;
  if (items.length === 0) return null;

  return (
    <section
      id="noticias"
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#0a1020] via-[#0F1F4E] to-[#152a52]"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\\\'40\\\' height=\\\'40\\\' viewBox=\\\'0 0 40 40\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\'%3E%3Ccircle cx=\\\'2\\\' cy=\\\'2\\\' r=\\\'1\\\' fill=\\\'%23fff\\\'/%3E%3C/svg%3E")',
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <Bunting />

        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 border border-amber-400/40 text-amber-200/90 px-4 py-1.5 rounded-full mb-4 bg-amber-500/10">
            <span
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
              }}
            >
              NOTÍCIAS
            </span>
          </div>
          <h2
            className="text-white"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              lineHeight: "1.15",
              letterSpacing: "-0.02em",
            }}
          >
            Eventos e <span className="text-amber-300">novidades</span>
          </h2>
          <p
            className="text-slate-300 mt-3 max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", lineHeight: "1.6" }}
          >
            Acompanhe o que está acontecendo no projeto.
          </p>
        </div>

        <div className="space-y-8">
          {items.map((item) => (
            <NewsCard key={item.title + item.sortDate} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
