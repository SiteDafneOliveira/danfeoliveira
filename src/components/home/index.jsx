import Institute from "./institute";
import Where from "./map";
import Top from "./top";
import Welcome from "./welcome";

const HomePage = () => {
  return (
    <div>
      <Top />
      <Welcome />
      <Institute />
      {/* <Where /> */}
    </div>
  );
};

export default HomePage;
