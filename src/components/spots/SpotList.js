import SpotItem from "./SpotItem";

function SpotList(props) {
  return <ul>
    {props.spots.map( spot => (
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