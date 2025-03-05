import doc from "@/assets/dafne4.png";
import Image from "next/image";
import s from "./doctor.module.scss";

const Doctor = () => {
  return (
    <div className={`container ${s.doc}`}>
      <div className={s.left}>
        <h2 className={s.title}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
          arcu omxm
        </h2>
        <p className={s.text}>
          Lorem iipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
          arcu odio. Donec ac tortor luctus, efficitur turpis eu, dignissim
          orci. Cras finibus nisl non velit tincidunt efficitur. Nullam eget
          auctor ex. Fusce tempus metus tellus, ut interdum ante consequat non.
          Etiam quis tristique nisi, eget ultricies velit. In malesuada sagittis
          massa, sed hendrerit felis egestas tempor. Lorem iipsum dolor sit
          amet, consectetur adipiscing elit. Quisque eu arcu odio. Donec ac
          tortor luctus, efficitur turpis eu, dignissim orci. Cras finibus nisl
          non velit tincidunt efficitur. Nullam eget auctor ex. Fusce tempus
          metus tellus, ut interdum ante consequat non. Etiam quis tristique
          nisi, eget ultricies velit. In malesuada sagittis massa, sed hendrerit
          felis egestas tempor.{" "}
        </p>
      </div>
      <div className={s.right}>
        <Image src={doc} alt='doctor' width={760} height={795} className={s.img} />
      </div>
    </div>
  );
};

export default Doctor;
