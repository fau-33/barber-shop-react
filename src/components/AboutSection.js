"use client";
import estilos from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={estilos.secao_texto}>
      <div>
        <h1>Bem-vindo a Barber Shop</h1>
        <p>
          Nossa barbearia sempre oferece profissionais de qualidade e
          estamos prontos para lidar com suas maiores expectativas.
        </p>
        <p>
          Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos
          uma equipe premiada que demonstrou o talento de mestres barbeiros
          em vários concursos de estilo. Deixe nosso barbeiro ser seu
          estilista pessoal e você nunca ficará desapontado.
        </p>
        <p className={estilos.assinatura}>S. Kelly</p>
      </div>
    </section>
  );
}
