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
          <h1>Nutrição que respeita seu biotipo, desperta sua potência e transforma sua vida com estratégia.</h1>
          <p>
          Feita com ciência, sensibilidade e precisão — para o seu corpo, sua rotina e a vida que você quer viver.
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
