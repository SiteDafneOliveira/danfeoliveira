import dafne2 from "@/assets/welcome/dafne2.png";
import dafne3 from "@/assets/welcome/dafne3.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import s from "./welcome.module.scss";

const content1 = (
  <>
    <p>
      Meu nome é Dafne Oliveira, sou nutricionista formada pela Universidade de
      São Paulo (USP), com mais de 16 anos de experiência clínica e uma paixão
      real por transformar vidas através da nutrição.
    </p>
    <p>
      Sou especialista em Fisiologia do Exercício pela UNIFESP, formada em
      Coaching pela Sociedade Brasileira de Coaching, e possuo seis
      pós-graduações que unem ciência, medicina integrativa, saúde funcional e
      estética com propósito. Entre elas, destaco Nutrição Clínica Funcional,
      Nutrição Esportiva Funcional, Fitoterapia Funcional (todas pela VP), além
      de Genética com foco em Reprogramação Epigenética, Auriculoterapia
      (CEATA), Medicina Chinesa e Saúde da Mulher.
    </p>
  </>
);
const content2 = (
  <>
    <p>
      Minha trajetória inclui atuação em hospitais de referência, clínicas
      multidisciplinares, e o privilégio de ter sido nutricionista-chefe do time
      olímpico de natação PRO-16, atendendo grandes nomes como César Cielo e
      Nicholas Santos.
    </p>
    <p>
      Ano após ano, sigo em constante atualização nos maiores congressos
      nacionais e internacionais — porque acredito que excelência exige
      evolução. Além disso, invisto continuamente no desenvolvimento da minha
      comunicação e escuta, pois sei que conectar e engajar meus pacientes é tão
      importante quanto a conduta nutricional que aplico.
    </p>
    <p>
      Hoje, com o Instituto Dafne Oliveira, eu e minha equipe de nutricionistas
      oferecemos um atendimento próximo, estratégico e profundamente
      individualizado — para que você atinja sua melhor versão com equilíbrio,
      ciência e prazer.
    </p>
  </>
);

const Welcome = () => {
  const [width, setWidth] = useState(0);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <div className={`${s.welcome} ${width > 768 ? "container" : ""}`} id="dr-dafne">
      <div
        className={`${s.content__container} ${width > 768 ? "" : "container"}`}
      >
        <h2 className={s.content__title}>SEJA BEM-VINDO(A)!</h2>
        <div className={`${s.content}`}>
          {showAll ? (
            <>
              {content1}
              {content2}
            </>
          ) : (
            content1
          )}
        </div>
        <button className={s.content__btn} onClick={() => setShowAll(!showAll)}>
          {showAll ? "MOSTRAR MENOS" : "CONTINUAR LENDO"}
        </button>
      </div>
      <div className={s.images}>
        <Image src={dafne2} alt='Dafne Oliveira' />
        <Image src={dafne3} alt='Dafne Oliveira' />
      </div>
    </div>
  );
};

export default Welcome;
