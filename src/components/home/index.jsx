import Instagram from "./instagram";
import Where from "./map";
import MappingMethod from "./mappingMethod";
import Programs from "./programs";
import Schedule from "./schedule";
import Services from "./services";
import Top from "./top";
import Welcome from "./welcome";

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
