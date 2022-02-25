import SpotList from "../components/spots/SpotList";
import getSpots from "../DUMMY_DATA";
import { useState, useEffect } from 'react';

const DUMMY_DATA = getSpots();


function AllSpots() {

  const [isLoading, setIsLoading] = useState(true);
  const [loadedSpots, setLoadedSpots] = useState([]);


  useEffect(() => {
    setIsLoading(true);

    fetch("https://globalspotcheck-6f880-default-rtdb.firebaseio.com/skate-spots.json"
    ).then((response) => {
      return response.json();
    }).then((data) => {
      const spotsData = [];
      for (const key in data) {
        const spotData = {
          id: key,
          ...data[key]
        }
        spotsData.push(spotData);
      }
      
      setIsLoading(false);
      setLoadedSpots(spotsData);
    });
  }, []
);



  if (isLoading) {
    return <section> 
      <p>Loading spots...</p>
    </section>
  }


  return <section>
    <h1>Global Spot Check</h1>
      <SpotList spots={loadedSpots}/>
  </section>
}

export default AllSpots;