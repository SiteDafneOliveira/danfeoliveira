import { GOOGLE_MAPS } from "@/utils/links";
import { Map, Marker } from "pigeon-maps";
import s from "./map.module.scss";

const Where = () => {
  return (
    <div className={s.map}>
      <Map
        center={[-23.596756925795674, -46.67685436332249]}
        zoom={16}
        width={1500}
        height={595}
        metaWheelZoom
      >
        <Marker
          width={50}
          anchor={[-23.596756925795674, -46.67685436332249]}
          color='#BEAB56'
          onClick={() => window.open(GOOGLE_MAPS, "_blank")}
        />
      </Map>
    </div>
  );
};

export default Where;
