import s from "./institute.module.scss";

const Institute = () => {
  return (
    <div className={`${s.institute} container`}>
      <p className={s.content}>
        Lorem iipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
        arcu odio. Donec ac tortor luctus, efficitur turpis eu, dignissim orci.
        Cras finibus nisl non velit tincidunt efficitur. Nullam eget auctor ex.
        Fusce tempus metus tellus, ut interdum ante consequat non. Etiam quis
        tristique nisi, eget ultricies velit. In malesuada sagittis massa, sed
        hendrerit felis egestas tempor.{" "}
      </p>
    </div>
  );
};

export default Institute;
