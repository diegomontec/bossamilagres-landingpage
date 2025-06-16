import Carousel from "../carousel/Carousel";

const imagensSecaoDez = [
    './images/carouselSecaoDez/secaoDezImagemUm.webp',
    './images/carouselSecaoDez/secaoDezImagemDois.webp',
    './images/carouselSecaoDez/secaoDezImagemTres.webp',
    './images/carouselSecaoDez/secaoDezImagemQuatro.webp',
    './images/carouselSecaoDez/secaoDezImagemCinco.webp',
    './images/carouselSecaoDez/secaoDezImagemSeis.webp',
  ];

export default function SecaoSeis() {
  return (
    <section className="relative w-full flex justify-center items-center">
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/images/secaoDez/secaoDezBG.webp"
        alt="Plano de fundo verde texturizado"
        loading="lazy"
      />

      <div className="relative z-10 max-w-6xl px-8 flex w-full h-full my-32 flex-col items-center justify-center">
        <article className="flex flex-col w-full items-center justify-center gap-16 max-w-6xl">
          <Carousel images={imagensSecaoDez} altTextPrefix="" />
        </article>
      </div>
    </section>
  );
}
