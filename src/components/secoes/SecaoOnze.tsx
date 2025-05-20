import Form from '../form/Form';

export default function SecaoDoze() {
  return (
    <section id='contato' className="relative w-full flex justify-center items-center">
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/images/secaoOnze/SecaoOnzeBG.png"
        alt="Plano de fundo verde texturizado"
      />

      <div className="relative z-10 max-w-6xl px-8 gap-16 flex w-full h-full my-32 flex-col items-center justify-center">
        <span className="text-center font-light leading-snug text-4xl text-white font-fields">
          Cadastre-se e receba <br />
          <span className="font-light">informações em primeira mão!</span> <br />
          <span className="text-4xl font-bold pt-8">Milagres Tem Bossa</span>
        </span>

        <article className="flex flex-col w-full items-center justify-center gap-16 max-w-6xl">
          <Form />
        </article>
      </div>
    </section>
  );
}