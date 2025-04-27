import homeS from "@/styles/Home.module.css";
import { WHATS_LINK } from "@/utils/links";
import s from "./schedule.module.scss";
import { useRef } from "react";
import useOnScreen from "@/utils/useOnScreen";

const Schedule = () => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  return (
    <div ref={ref} className={`${s.schedule} ${isVisible ? s.visible : ""}`} id='agendar'>
      <div className={`container ${s.container}`}>
        <h2 className={s.title}>
          Agende sua consulta e viva o resultado de uma nutrição realmente
          personalizada.
        </h2>
        <a href={WHATS_LINK} className={`${s.btn} ${homeS.btn}`}>
          AGENDAR CONSULTA
        </a>
      </div>
    </div>
  );
};

export default Schedule;
