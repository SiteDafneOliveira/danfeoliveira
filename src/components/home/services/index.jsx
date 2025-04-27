import doc from "@/assets/dafne4.png";
import useOnScreen from "@/utils/useOnScreen";
import Image from "next/image";
import { useRef } from "react";
import s from "./services.module.scss";

const Services = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const isLeftVisible = useOnScreen(leftRef);
  const isRightVisible = useOnScreen(rightRef);

  return (
    <div className={`container ${s.doc}`} id='servicos'>
      <div
        ref={leftRef}
        className={`${s.left} ${isLeftVisible ? s.visible : ""}`}
      >
        <h2 className={s.title}>SERVIÇOS</h2>
        <p className={s.text}>
          Além da consulta nutricional individualizada e pacotes de
          emagrecimento, disponibilizo na clínica exames que ampliam o olhar
          sobre seu corpo e facilitam escolhas mais assertivas:
        </p>
        <ul className={s.list}>
          <li>Teste de alergia alimentar tardia (IgG)</li>
          <li>Teste de alergia imediata (IgE)</li>
          <li>
            Testes genéticos (metabolismo, performance, detoxificação, etc.)
          </li>
          <li>Teste de microbioma intestinal</li>
        </ul>
        <p className={s.text}>
          Esses exames me ajudam a montar planos ainda mais precisos e
          personalizados, com foco em resultado e prevenção.
        </p>
      </div>
      <div
        ref={rightRef}
        className={`${s.right} ${isRightVisible ? s.visible : ""}`}
      >
        <Image
          src={doc}
          alt='doctor'
          width={760}
          height={795}
          className={s.img}
        />
      </div>
    </div>
  );
};

export default Services;
