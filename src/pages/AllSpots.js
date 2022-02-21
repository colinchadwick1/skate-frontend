import SpotList from "../components/spots/SpotList";
import getSpots from "../DUMMY_DATA";

const DUMMY_DATA = getSpots();

function AllSpots() {
  return <section>
    <h1>Global Spot Check</h1>
      <SpotList spots={DUMMY_DATA}/>
  </section>
}

export default AllSpots;