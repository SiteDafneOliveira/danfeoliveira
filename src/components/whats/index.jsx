import whats from "@/assets/whats-white.svg";
import { WHATS_LINK } from "@/utils/links";
import Image from "next/image";
import s from "./whats.module.scss";

const Whats = () => {
  return (
    <div className={s.whats}>
      <a href={WHATS_LINK} title="WhatsApp" target="_blank" rel="noopener noreferrer">
        <Image src={whats} alt='WhatsApp' width={32} height={32} />
      </a>
    </div>
  );
};

export default Whats;
