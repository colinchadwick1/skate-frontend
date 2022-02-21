import SpotItem from "./SpotItem";
import classes from "./SpotList.module.css";

function SpotList(props) {
  return <ul>
    {props.spots.map(spot => (
      <SpotItem 
      key={spot.spotId} 
      id={spot.id} 
      imageUrl={spot.imageUrl}
      locationName={spot.locationName}
      address={spot.address}
      description={spot.description}/>
      
    ))};

  </ul>
}

export default SpotList;