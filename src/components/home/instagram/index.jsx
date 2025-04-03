import insta1 from "@/assets/insta/ebook1.png";
import insta2 from "@/assets/insta/ebook2.png";
import insta3 from "@/assets/insta/ebook3.png";
import insta4 from "@/assets/insta/ebook4.png";
import { INSTA_LINK } from "@/utils/links";
import Image from "next/image";
import s from "./instagram.module.scss";

const Instagram = () => {
  return (
    <div className={`container ${s.insta}`}>
      <div className={s.left}>
        <p className={s.text}>@nutridafne</p>
        <a href={INSTA_LINK} className={s.btn}>
          SEGUIR
        </a>
      </div>
      <div className={s.right}>
        <Image
          className={s.img}
          src={insta1}
          alt='Instagram 1'
          width={229}
          height={307}
        />
        <Image
          className={s.img}
          src={insta2}
          alt='Instagram 2'
          width={229}
          height={307}
        />
        <Image
          className={s.img}
          src={insta3}
          alt='Instagram 3'
          width={229}
          height={307}
        />
        <Image
          className={s.img}
          src={insta4}
          alt='Instagram 4'
          width={229}
          height={307}
        />
      </div>
    </div>
  );
};

export default Instagram;
