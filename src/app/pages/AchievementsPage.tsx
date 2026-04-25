import { Link } from "react-router";
import { CONQUISTAS_VER_MAIS_ANCHOR } from "../routeAnchors";
import { Navbar } from "../components/Navbar";
import { InteractiveFooter } from "../components/InteractiveFooter";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { config, getAchievementImageAlt, getAssetUrl, hasAchievementCategory } from "@/app/config";

export function AchievementsPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "Montserrat, sans-serif" }}>
      <Navbar />
      <main className="flex-1 bg-gradient-to-br from-[#0F1F4E] to-[#1D4ED8]">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="mb-10 md:mb-14">
            <Link
              to={`/#${CONQUISTAS_VER_MAIS_ANCHOR}`}
              className="inline-flex items-center gap-2 text-white/90 hover:text-[#F59E0B] transition-colors mb-6 text-sm font-semibold"
            >
              ← Voltar às conquistas
            </Link>
            <div className="inline-block px-4 py-2 bg-[#F59E0B] rounded-full mb-4">
              <span className="text-white font-bold text-sm">CORREDOR DA FAMA</span>
            </div>
            <h1 className="text-white font-black text-[clamp(2rem,5vw,3rem)] leading-tight mb-3">
              Todas as <span className="text-[#F59E0B]">conquistas</span>
            </h1>
            <p className="text-white/80 font-semibold text-lg max-w-2xl">
              Histórico completo dos troféus e títulos do projeto.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 list-none p-0 m-0">
            {config.achievements.map((achievement, index) => (
              <li key={`${achievement.sortDate}-${index}`}>
                <article className="h-full rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-[#F59E0B]/30 shadow-xl flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden group">
                    <ImageWithFallback
                      src={getAssetUrl(achievement.image)}
                      alt={getAchievementImageAlt(achievement)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                    <span className="absolute top-3 right-4 text-5xl" aria-hidden>
                      {achievement.medal}
                    </span>
                  </div>
                  <div className="p-5 md:p-6 flex flex-col flex-1 text-center">
                    <h2 className="text-white font-black text-lg md:text-xl leading-snug mb-1.5">
                      {achievement.title}
                    </h2>
                    <p className="text-[#F59E0B] font-bold text-sm md:text-base">
                      {achievement.event}
                    </p>
                    {hasAchievementCategory(achievement.category) && (
                      <p className="text-[#F59E0B]/90 font-semibold text-sm md:text-base mt-1.5 flex-1">
                        {achievement.category}
                      </p>
                    )}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <InteractiveFooter />
    </div>
  );
}
