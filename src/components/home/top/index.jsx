import dafne from "@/assets/top/dafne.png";
import homeS from "@/styles/Home.module.css";
import { WHATS_LINK } from "@/utils/links";
import Image from "next/image";
import { useEffect, useState } from "react";
import s from "./top.module.scss";

const Top = () => {
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
    <div
      className={s.top}
      style={{ paddingTop: headerHeight, marginTop: -headerHeight }}
    >
      <div className={`container ${s.container}`}>
        <div className={s.left}>
          <h1>
            Nutrição que respeita seu biotipo, desperta sua potência e
            transforma sua vida com estratégia.
          </h1>
          <p>
            Feita com ciência, sensibilidade e precisão — para o seu corpo, sua
            rotina e a vida que você quer viver.
          </p>
          <a
            href={WHATS_LINK}
            target='_blank'
            rel='noreferrer'
            className={homeS.btn}
          >
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
