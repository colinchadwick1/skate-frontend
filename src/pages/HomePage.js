import MapRender from "../components/maps/Map";

function HomePage() {
  return (
    <div>
      <h1>Global Spot Check</h1>
      <MapRender marker = {[{'lat' : 4.25, 'lng': 3.4}]}/>
    </div>
  );
}

export default HomePage;