import definidas from "@/assets/programs/definidas.svg";
import nutriHighPerformance from "@/assets/programs/nutri-high-performance.svg";
import homeS from "@/styles/Home.module.css";
import { NUTRI_HIGH_PERFORMANCE, PROGRAMA_DEFINIDAS } from "@/utils/links";
import useOnScreen from "@/utils/useOnScreen";
import Image from "next/image";
import { useRef } from "react";
import s from "./programs.module.scss";

const Programs = () => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  return (
    <div className={`${s.programs} ${isVisible ? s.visible : ""}`}>
      <div ref={ref} className={`container ${s.container} ${isVisible ? s.visible : ""}`}>
        <div className={s.item}>
          <p className={s.img}>
            <Image src={definidas} alt='definidas' width={72} height={99} />
          </p>

          <p className={s.content}>
            Além dos serviços disponibilizados na clinica, idealizei o programa
            DEFINIDAS — um plano de treino, alimentação e estilo de vida
            estratégico para quem deseja emagrecer, definir e retomar o
            autocuidado de maneira rápida e eficiente.
          </p>
          <a href={PROGRAMA_DEFINIDAS} className={homeS.btn}>
            PROGRAMA DEFINIDAS
          </a>
        </div>
        <div className={s.item}>
          <p className={s.img}>
            <Image
              src={nutriHighPerformance}
              alt='NUTRI HIGH PERFORMANCE'
              width={70}
              height={70}
            />
          </p>
          <p className={s.content}>
            E para nutricionistas que desejam aprender meu método de atendimento
            estratégico e se tornarem referência em resultado e fidelização,
            desenvolvi a mentoria NUTRI HIGH PERFORMANCE.
          </p>
          <a href={NUTRI_HIGH_PERFORMANCE} className={homeS.btn}>
            NUTRI HIGH PERFORMANCE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Programs;
