import { useEffect, useState } from "react";
import s from "./useTerms.module.scss";

const UseTerms = () => {
  const [headerHeight, setHeaderHeight] = useState(104);
  const [width, setWidth] = useState(0);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const header = document.getElementById("header");
    const headerHeight = header.offsetHeight;
    setHeaderHeight(headerHeight);
  }, [width]);
  
  return (
    <div>
      <div
        className={s.top}
        style={{ paddingTop: headerHeight, marginTop: -headerHeight }}
      >
        <h1>
          TERMOS DE USO
          <br />
          INSTITUTO DAFNE OLIVEIRA
        </h1>
      </div>
      <div className={`${s.container} container`}>
        <p>Última atualização: [Data]</p>
        <p>
          Bem-vindo ao site do Instituto Dafne Oliveira. Ao acessar e utilizar
          este site, você concorda com os seguintes Termos de Uso. Caso não
          concorde com qualquer parte destes termos, pedimos que não utilize
          nossos serviços.
        </p>
        <h2>1. OBJETIVO DO SITE</h2>
        <p>
          O Instituto Dafne Oliveira fornece conteúdos informativos sobre
          nutrição, saúde e bem-estar, além de permitir o agendamento de
          consultas e aquisição de serviços relacionados à nutrição.
        </p>
        <h2>2. USO ADEQUADO</h2>
        <p>
          O usuário concorda em utilizar este site de maneira responsável, sem
          praticar atividades que possam comprometer sua segurança, integridade
          ou disponibilidade, incluindo, mas não se limitando a:
        </p>
        <ul>
          <li>Publicação de informações falsas;</li>
          <li>Tentativas de violação da segurança do site;</li>
          <li>Uso indevido dos serviços oferecidos.</li>
        </ul>
        <h2>3. ISENÇÃO DE RESPONSABILIDADE</h2>
        <p>
          As informações disponibilizadas neste site têm caráter meramente
          informativo e não substituem orientação profissional individualizada.
          O Instituto Dafne Oliveira não se responsabiliza por decisões tomadas
          com base nos conteúdos aqui apresentados.
        </p>

        <h2>4. AGENDAMENTO DE CONSULTAS</h2>
        <p>
          O usuário pode agendar consultas através da plataforma, sujeito à
          disponibilidade. Cancelamentos devem ser feitos com pelo menos [X]
          horas de antecedência, conforme política de reagendamento.
        </p>
        <p>
          O não comparecimento pode resultar na cobrança integral do serviço.
        </p>
        <h2>5. DIREITOS AUTORAIS</h2>
        <p>
          Todos os textos, imagens e demais conteúdos presentes no site são
          protegidos por direitos autorais e não podem ser reproduzidos sem
          autorização prévia.
        </p>

        <h2>6. MODIFICAÇÕES DOS TERMOS</h2>
        <p>
          O Instituto Dafne Oliveira pode alterar estes Termos de Uso a qualquer
          momento. As alterações entrarão em vigor assim que publicadas no site.
        </p>

        <h2>7. CONTATO</h2>
        <p>
          Caso tenha dúvidas sobre estes termos, entre em contato pelo e-mail:
          [seu e-mail de contato]
        </p>

        <p>
          Ao continuar a navegação, você declara ter lido e aceito os Termos de
          Uso.
        </p>
      </div>
    </div>
  );
};

export default UseTerms;
