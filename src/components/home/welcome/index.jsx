import dafne2 from "@/assets/welcome/dafne2.png";
import dafne3 from "@/assets/welcome/dafne3.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import s from "./welcome.module.scss";

const Welcome = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  return (
    <div className={`${s.welcome} ${width > 768 ? "container" : ""}`}>
      <p className={`${s.content} ${width > 768 ? "" : "container"}`}>
        <span className={s.content__first}>B</span>em-vindo ipsum dolor sit
        amet, consectetur adipiscing elit. Quisque eu arcu odio. Donec ac tortor
        luctus, efficitur turpis eu, dignissim orci. Cras finibus nisl non velit
        tincidunt efficitur. Nullam eget auctor ex. Fusce tempus metus tellus,
        ut interdum ante consequat non. Etiam quis tristique nisi, eget
        ultricies velit. In malesuada sagittis massa, sed hendrerit felis
        egestas tempor. Vestibulum condimentum libero sit amet turpis pharetra,
        eu condimentum.
      </p>
      <div className={s.images}>
        <Image src={dafne2} alt='Dafne Oliveira' />
        <Image src={dafne3} alt='Dafne Oliveira' />
      </div>
    </div>
  );
};

export default Welcome;
