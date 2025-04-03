import MappingMethod from "./mappingMethod";
import Where from "./map";
import Schedule from "./schedule";
import Services from "./services";
import Top from "./top";
import Welcome from "./welcome";
import Programs from "./programs";

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
    </div>
  );
};

export default HomePage;
