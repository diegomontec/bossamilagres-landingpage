import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

import Hero from "./components/secoes/Hero";
import SecaoDois from "./components/secoes/SecaoDois";
import SecaoTres from "./components/secoes/SecaoTres";
import SecaoQuatro from "./components/secoes/SecaoQuatro";
import SecaoCinco from "./components/secoes/SecaoCinco";
import SecaoSeis from "./components/secoes/SecaoSeis";
import SecaoSete from "./components/secoes/SecaoSete";
import SecaoOito from "./components/secoes/SecaoOito";
import SecaoNove from "./components/secoes/SecaoNove";
import SecaoDez from "./components/secoes/SecaoDez";
import SecaoDoze from "./components/secoes/SecaoDoze";
import SecaoOnze from "./components/secoes/SecaoOnze";
import SecaoTreze from "./components/secoes/SecaoTreze";
import SecaoQuatorze from "./components/secoes/SecaoQuatorze";
import SecaoQuinze from "./components/secoes/SecaoQuinze";

// opcional: tipar smoother no window, útil se quiser acessar em outros componentes
declare global {
  interface Window { smoother?: ScrollSmoother }
}

function App() {
  const smootherRef = useRef<ScrollSmoother | null>(null);

  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });
    smootherRef.current = smoother;
    window.smoother = smoother;

    // --- Anchor fix: usar smoother.scrollTo com offset e clamp ---
    const HEADER_OFFSET = 96; // ajuste conforme a altura do seu header (px)

    const onAnchorClick = (e: MouseEvent) => {
      const a = (e.target as Element)?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;

      const hash = a.getAttribute("href") || "";
      if (hash.length <= 1) return;

      const targetEl = document.querySelector(hash) as HTMLElement | null;
      if (!targetEl) return;

      e.preventDefault();

      // posição alvo no contexto do smoother
      const rawY = smoother.offset(targetEl) - HEADER_OFFSET;

      // clamp para não ultrapassar o final (evita "tela branca")
      const maxY = smoother.content().scrollHeight - window.innerHeight;
      const y = Math.max(0, Math.min(rawY, maxY));

      smoother.scrollTo(y, true); // true = suave
    };

    document.addEventListener("click", onAnchorClick);

    // Recalcular alturas após imagens carregarem (evita lag/tela branca)
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      window.removeEventListener("load", onLoad);
      smoother.kill();
      smootherRef.current = null;
      window.smoother = undefined;
    };
  }, []);

  return (
    <div id="smooth-wrapper" className="overflow-hidden min-h-screen">
      <div id="smooth-content">
        <Hero />
        <SecaoDois />
        <SecaoTres />
        <SecaoQuatro />
        <SecaoCinco />
        <SecaoSeis />
        <SecaoSete />
        <SecaoOito />
        <SecaoNove />
        <SecaoDez />
        <SecaoOnze />
        <SecaoDoze />
        <SecaoTreze />
        <SecaoQuatorze />
        <SecaoQuinze />
      </div>
    </div>
  );
}

export default App;
