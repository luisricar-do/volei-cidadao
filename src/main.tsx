import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router";
import App from "./app/App.tsx";
import "./styles/index.css";

const basename =
  import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);
