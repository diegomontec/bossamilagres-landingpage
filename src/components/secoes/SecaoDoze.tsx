export default function SecaoDoze() {
  return (
    <div>
      <section id='contato' className="relative w-full flex justify-center items-center">
        <img
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/images/secaoDoze/SecaoDozeBG.webp"
          alt="Plano de fundo verde texturizado"
          loading="lazy"
        />

        <div className="relative z-10 max-w-6xl px-8 flex w-full h-full my-32 flex-col items-center justify-center">
          <img
            className="w-full h-full object-cover rounded-md"
            src="/images/secaoDoze/secaoDozeImagem.webp"
            alt="Homem sentado em uma cadeira, desenhando o projeto em um papel"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}
