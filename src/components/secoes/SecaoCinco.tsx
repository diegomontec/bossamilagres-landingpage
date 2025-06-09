export default function SecaoCinco() {
  return (
    <section className="relative w-full flex justify-center items-center">
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/images/secaoCinco/SecaoCincoBG.png"
        alt="Plano de fundo verde texturizado"
        loading="lazy"
      />

      <div className="relative z-10 max-w-6xl flex w-full h-full my-32 flex-col items-center justify-center">

        <article className="flex flex-col lg:flex-row w-full items-center justify-center gap-16 max-w-4xl">
          <img
            className="w-3/4 sm:w-3/4 md:w-2/3 lg:w-1/2"
            src="/images/secaoCinco/secaoCincoTexto.png"
            alt="Explicação sobre o vídeo"
            loading="lazy"
          />
          <img
            className="w-3/4 sm:w-3/4 md:w-2/3 lg:w-1/2 rounded-md"
            src="/images/secaoCinco/secaoCincoImgDois.png"
            alt="Descrição da galeria de imagens"
            loading="lazy"
          />
        </article>
      </div>
    </section>
  );
}
