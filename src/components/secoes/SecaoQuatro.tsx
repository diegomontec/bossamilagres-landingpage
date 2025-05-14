import Button from "../button/Button";
import Carousel from "../carousel/Carousel";
import Iframe from "../iframe/Iframe";

const imagensSecaoQuatro = [
  "./images/carouselSecaoQuatro/secaoQuatroImagemUm.jpg",
  "./images/carouselSecaoQuatro/secaoQuatroImagemDois.jpg",
  "./images/carouselSecaoQuatro/secaoQuatroImagemTres.jpg",
  "./images/carouselSecaoQuatro/secaoQuatroImagemQuatro.jpg",
  "./images/carouselSecaoQuatro/secaoQuatroImagemCinco.jpg",
  "./images/carouselSecaoQuatro/secaoQuatroImagemSeis.jpg",
  "./images/carouselSecaoQuatro/secaoQuatroImagemSete.jpg",
];

export default function SecaoQuatro() {
  return (
    <section className="relative w-full flex justify-center items-center">
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/images/secaoQuatro/SecaoQuatroBG.png"
        alt="Plano de fundo verde texturizado"
      />

      <div className="relative z-10 w-full py-32 px-8 flex flex-col items-center gap-24 justify-center">
        <article className="flex flex-col w-full items-center justify-center gap-8 max-w-6xl">
          <img
            className="w-2/4 md:w-2/3 lg:w-1/2 xl:w-1/3"
            src="/images/secaoQuatro/SecaoQuatroTextoUm.png"
            alt="Explicação sobre o vídeo"
          />
          <div className="w-full">
            <Iframe videoId={"NOXS2mt86bo"} />
          </div>
        </article>

        <article className="flex flex-col w-full items-center justify-center gap-8 max-w-6xl">
          <img
            className="w-2/4 md:w-2/3 lg:w-1/2 xl:w-1/2"
            src="/images/secaoQuatro/SecaoQuatroTextoDois.png"
            alt="Descrição da galeria de imagens"
          />
          <Carousel images={imagensSecaoQuatro} altTextPrefix="" />
        </article>

        <article className="flex flex-col w-full bg-red items-center justify-center max-w-6xl">
          <div className="flex flex-col items-center justify-center gap-8">
            <img
              className="w-xl md:w-2/3 lg:w-full xl:w-full"
              src="/images/secaoQuatro/SecaoQuatroTextoTres.png"
              alt="Conclusão da seção"
            />
            <Button>Saiba mais!</Button>
          </div>
        </article>
      </div>
    </section>
  );
}
