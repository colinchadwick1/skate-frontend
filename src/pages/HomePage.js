import MapRender from "../components/maps/Map";
import AllSpots from "./AllSpots";
import classes from "./FlexBox.module.css";
import SpotItem from "../components/spots/SpotItem";

function HomePage() {
  return (
    <div>
      <h1>Global Spot Check</h1>
      <div className={classes.flexBox}>
      <MapRender />
      <AllSpots spotItem = "SpotItemSmall"/>
      </div>
    </div>
  );
}

export default HomePage;