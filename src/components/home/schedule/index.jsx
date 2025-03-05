import { WHATS_LINK } from "@/utils/links"
import s from "./schedule.module.scss"


const Schedule = () => {
  return <div className={s.schedule}>
    <div className={`container ${s.container}`}>
      <h2 className={s.title}>Lorem iipsum dolor sit amet, consectetur adipiscing elit. Quisque eu arcu odio. Donec ac tortor luctus, efficitur turpis eu, dignissim orci. </h2>
      <a href={WHATS_LINK} className={s.btn}>AGENDE AGORA SUA CONSULTA</a>
    </div>
  </div>
}

export default Schedule