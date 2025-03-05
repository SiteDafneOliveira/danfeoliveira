import Doctor from "./doctor";
import Institute from "./institute";
import Where from "./map";
import Schedule from "./schedule";
import Top from "./top";
import Welcome from "./welcome";

const HomePage = () => {
  return (
    <div>
      <Top />
      <Welcome />
      <Institute />
      <Doctor />
      <Where />
      <Schedule />
    </div>
  );
};

export default HomePage;
