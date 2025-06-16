import "@coreui/coreui/dist/css/coreui.min.css";
import Button from "../button/Button";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex justify-center items-center">
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="./images/hero/hero.webp"
        alt="Pessoa com chapéu de palha sentada em uma mesa no meio do mar raso, escrevendo em um caderno. Ao fundo, o céu azul e o horizonte. Texto na imagem diz 'Bossa Eco Luxury Villa - E, afinal, quem sou? Eu estou no encontro do mangue com mar', abaixo um botão escrito: saiba mais!."
        loading="lazy"
      />
 
      <div className="relative z-10 flex flex-col h-full items-center justify-between py-24">
        <img
          className="w-74 md:w-96"
          src="./images/hero/logoTaipa.webp"
          alt="Logo Bossa Eco Luxury Villa"
          loading="lazy"
        />
        <div className="flex flex-col items-center gap-8">
          <img
            src="./images/carouselHero/fraseUm.webp"
            className="w-1/2 sm:w-3/4"
            alt="Trecho motivacional decorativo"
            loading="lazy"
          />
          <Button href="#contato" className="text-white w-1/2 ">Saiba mais!</Button>
        </div>
      </div>
    </section>
  );
}