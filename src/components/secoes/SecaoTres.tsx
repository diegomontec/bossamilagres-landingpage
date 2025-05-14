export default function SecaoTres() {
  return (
    <section className="relative w-full flex justify-center items-center">
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="./images/secaoTres/SecaoTresBG.png"
        alt="Imagem de cor sólida verde de fundo"
      />

      <div className="relative z-10 max-w-6xl flex w-full h-full my-32 flex-col items-center justify-center">
        <img
          className="w-3/4 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/2"
          src="./images/secaoTres/SecaoTresTexto.png"
          alt=""
        />
      </div>
    </section>
  );
}
