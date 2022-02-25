import NewSpotForm from "../components/spots/NewSpotForm";
import { useHistory } from 'react-router-dom';


// Use Axios instead of Fetch
function NewSpot() {
  const history = useHistory();

  function addSpotHandler(spotData) {
    fetch("https://globalspotcheck-6f880-default-rtdb.firebaseio.com/skate-spots.json", 
    {method: 'POST',
    body: JSON.stringify(spotData),
    header: {
      'Content-Type': 'application/json'
    },
  }).then(() => {
    history.replace('./');
  });
  }



  return <section>

    <h1>Add New Spot</h1>

    <NewSpotForm addNewSpot={addSpotHandler}/>


  </section>
}

export default NewSpot;