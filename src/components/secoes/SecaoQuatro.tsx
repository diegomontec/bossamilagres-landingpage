import Carousel from "../carousel/Carousel";
import Iframe from "../iframe/Iframe";

const imagensSecaoQuatro = [
  "./images/carouselSecaoQuatro/secaoQuatroImagemUm.webp",
  "./images/carouselSecaoQuatro/secaoQuatroImagemDois.webp",
  "./images/carouselSecaoQuatro/secaoQuatroImagemTres.webp",
  "./images/carouselSecaoQuatro/secaoQuatroImagemQuatro.webp",
  "./images/carouselSecaoQuatro/secaoQuatroImagemCinco.webp",
  "./images/carouselSecaoQuatro/secaoQuatroImagemSeis.webp",
  "./images/carouselSecaoQuatro/secaoQuatroImagemSete.webp",
];

export default function SecaoQuatro() {
  return (
    
    <section className="relative w-full flex justify-center items-center">
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/images/secaoQuatro/SecaoQuatroBG.webp"
        alt="Plano de fundo verde texturizado"
        loading="lazy"
      />

      <div className="relative z-10 w-full py-32 px-8 flex flex-col items-center gap-24 justify-center">
        <article className="flex flex-col w-full items-center justify-center gap-8 max-w-6xl">
          <img
            className="w-2/4 md:w-2/3 lg:w-1/2 xl:w-1/3"
            src="/images/secaoQuatro/SecaoQuatroTextoUm.webp"
            alt="Explicação sobre o vídeo"
            loading="lazy"
          />
          <div className="w-full">
            <Iframe videoId={"NOXS2mt86bo"} />
          </div>
        </article>

        <article className="flex flex-col w-full items-center justify-center gap-8 max-w-6xl">
          <img
            className="w-2/4 md:w-2/3 lg:w-1/2 xl:w-1/2"
            src="/images/secaoQuatro/SecaoQuatroTextoDois.webp"
            alt="Descrição da galeria de imagens"
            loading="lazy"
          />
          <Carousel images={imagensSecaoQuatro} altTextPrefix="" />
        </article>

        <article className="flex flex-col w-full bg-red items-center justify-center max-w-6xl">
          <div className="flex flex-col items-center justify-center gap-16">
            <img
              className="w-xl md:w-2/3 lg:w-full xl:w-full"
              src="/images/secaoQuatro/SecaoQuatroTextoTres.webp"
              alt="Conclusão da seção"
              loading="lazy"
            />
            <a href="#form" className="no-underline hover:no-underline text-lg">
              <button className="w-full bg-[#8d8b6f] text-white text-center font-semibold py-2 px-18 rounded">
                Saiba mais!
              </button>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
