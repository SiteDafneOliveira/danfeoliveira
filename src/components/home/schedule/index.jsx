import homeS from "@/styles/Home.module.css";
import { WHATS_LINK } from "@/utils/links";
import s from "./schedule.module.scss";

const Schedule = () => {
  return (
    <div className={s.schedule} id='agendar'>
      <div className={`container ${s.container}`}>
        <h2 className={s.title}>
          Agende sua consulta e viva o resultado de uma nutrição realmente
          personalizada.
        </h2>
        <a href={WHATS_LINK} className={`${s.btn} ${homeS.btn}`}>
          WHATSAPP
        </a>
      </div>
    </div>
  );
};

export default Schedule;
