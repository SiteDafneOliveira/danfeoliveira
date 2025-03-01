import dafne from "@/assets/top/dafne.png";
import { WHATS_LINK } from "@/utils/links";
import Image from "next/image";
import s from "./top.module.scss";
import Header from "@/components/header";

const Top = () => {
  return (
    <div className={s.top}>
      <Header />
      <div className={`container ${s.container}`}>
        <div className={s.left}>
          <h1>Rumo a sua melhor versão</h1>
          <p>
            Nosso maior objetivo é te ajudar a atingir o melhor de você mesmo,
            de maneira estratégica, individualizada, equilibrada e saudável.
          </p>
          <a href={WHATS_LINK} target='_blank' rel='noreferrer'>
            AGENDE SUA CONSULTA
          </a>
        </div>
        <div className={s.right}>
          <Image src={dafne} alt='Dafne Oliveira' width={364} height={652} />
        </div>
      </div>
    </div>
  );
};

export default Top;
