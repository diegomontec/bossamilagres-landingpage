import "@coreui/coreui/dist/css/coreui.min.css";
import Button from "../button/Button";
// import Carousel from '../carousel/Carousel';

// const imagensSecaoHero = [
//   './images/carouselHero/fraseUm.png',
//   './images/carouselHero/fraseDois.png',
// ]

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex justify-center items-center">
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="./images/hero/hero.png"
        alt="Pessoa com chapéu de palha sentada em uma mesa no meio do mar raso, escrevendo em um caderno. Ao fundo, o céu azul e o horizonte. Texto na imagem diz 'Bossa Eco Luxury Villa - E, afinal, quem sou? Eu estou no encontro do mangue com mar', abaixo um botão escrito: saiba mais!."
      />

      <div className="relative z-10 flex flex-col h-full items-center justify-between py-16">
        <img
          className="w-74 md:w-96"
          src="./images/hero/logoTaipa.png"
          alt=""
        />
        <div className="flex flex-col items-center gap-16">
          {/* <Carousel images={imagensSecaoHero} altTextPrefix="" /> */}
          <img
            src="./images/carouselHero/fraseUm.png"
            className="w-sm"
            alt=""
          />
          <Button onClick={() => {}} href="">Saiba mais!</Button>
        </div>
      </div>
    </section>
  );
}