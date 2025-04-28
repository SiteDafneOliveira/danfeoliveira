import dynamic from "next/dynamic";
import Instagram from "./instagram";
import MappingMethod from "./mappingMethod";
import Programs from "./programs";
import Schedule from "./schedule";
import Services from "./services";
import Top from "./top";
import Welcome from "./welcome";

const Where = dynamic(() => import("./map"), { ssr: false });

const HomePage = () => {
  return (
    <div>
      <Top />
      <Welcome />
      <MappingMethod />
      <Services />
      <Where />
      <Programs />
      <Schedule />
      <Instagram />
    </div>
  );
};

export default HomePage;
