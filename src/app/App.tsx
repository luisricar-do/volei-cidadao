import { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { AchievementsPage } from "./pages/AchievementsPage";

function ScrollOnRouteChange() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (pathname === "/conquistas") {
      window.scrollTo(0, 0);
      return;
    }

    if (pathname === "/" && hash) {
      const id = decodeURIComponent(hash.replace(/^#/, ""));
      const scrollToAnchor = () => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      };
      scrollToAnchor();
      if (!document.getElementById(id)) {
        requestAnimationFrame(() => {
          requestAnimationFrame(scrollToAnchor);
        });
      }
      return;
    }

    if (pathname === "/" && !hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function HomeLayout() {
  return (
    <>
      <Navbar />
      <HomePage />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "Montserrat, sans-serif" }}>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        * {
          box-sizing: border-box;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0F1F4E;
        }
        ::-webkit-scrollbar-thumb {
          background: #F59E0B;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #D97706;
        }
      `}</style>
      <ScrollOnRouteChange />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/conquistas" element={<AchievementsPage />} />
      </Routes>
    </div>
  );
}
