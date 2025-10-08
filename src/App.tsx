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
import SecaoOnze from "./components/secoes/SecaoOnze";
import SecaoDoze from "./components/secoes/SecaoDoze";
import SecaoTreze from "./components/secoes/SecaoTreze";
import SecaoQuatorze from "./components/secoes/SecaoQuatorze";
import SecaoQuinze from "./components/secoes/SecaoQuinze";
import PartytownSetup from "./components/partyTownSetup";

function App() {
  return (
    <div>
      <PartytownSetup />
      <noscript>
        <iframe
          src="https://server.bossamilagres.com.br/ns.html?id=GTM-KPSNXP7G"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="GTM"
        ></iframe>
      </noscript>
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
  );
}

export default App;
