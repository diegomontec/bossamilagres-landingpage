export default function SecaoSeis() {
  return (
    <section className="relative w-full flex justify-center items-center">
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/images/secaoSeis/SecaoSeisBG.webp"
        alt="Plano de fundo verde texturizado"
        loading="lazy"
      />

      <div className="relative z-10 max-w-6xl flex w-full h-full my-32 flex-col items-center justify-center">

        <article className="flex flex-col lg:flex-row w-full items-center justify-center gap-16 max-w-4xl">
          <img
            className="w-3/4 sm:w-3/4 md:w-2/3 lg:w-1/2"
            src="/images/secaoSeis/secaoSeisTexto.webp"
            alt="Explicação sobre o vídeo"
            loading="lazy"
          />
          <img
            className="w-3/4 sm:w-3/4 md:w-2/3 lg:w-1/2 rounded-md"
            src="/images/secaoSeis/SecaoSeisFotos.webp"
            alt="Descrição da galeria de imagens"
            loading="lazy"
          />
        </article>
      </div>
    </section>
  );
}
