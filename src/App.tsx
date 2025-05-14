import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

import Hero from './components/secoes/Hero'
import SecaoDois from './components/secoes/SecaoDois'
import SecaoTres from './components/secoes/SecaoTres'
import SecaoQuatro from './components/secoes/SecaoQuatro'
import SecaoCinco from './components/secoes/SecaoCinco'
import SecaoSeis from './components/secoes/SecaoSeis'
import SecaoSete from './components/secoes/SecaoSete'
import SecaoOito from './components/secoes/SecaoOito'
import SecaoNove from './components/secoes/SecaoNove'
import SecaoDez from './components/secoes/SecaoDez'
import SecaoDoze from './components/secoes/SecaoDoze';
import SecaoOnze from './components/secoes/SecaoOnze';
import SecaoTreze from './components/secoes/secaoTreze';
import SecaoQuatorze from './components/secoes/SecaoQuatorze';
import SecaoQuinze from './components/secoes/secaoQuinze';

function App() {
  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5,
      effects: true,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper">
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
  )
}

export default App

