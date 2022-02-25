import {useRef} from 'react';
import classes from "./NewSpotForm.module.css";
import Card from "../UI/Card";





function NewSpotForm(props) {

  const locationNameRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();

  function submitHandler(event) {


    event.preventDefault();

    const enteredLocationName = locationNameRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredImage = imageRef.current.value;
    const enteredAddress = addressRef.current.value;

    const spotData = {
      locationName: enteredLocationName,
      description: enteredDescription,
      imageUrl: enteredImage,
      address: enteredAddress,
    };

    console.log(spotData);
    props.addNewSpot(spotData);

  }



  return <Card >
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="locationName">Spot Name</label>
        <input type="text" required id="locationName" ref={locationNameRef}></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <input type="textarea" required id="description" rows='5' ref={descriptionRef}></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="image">Spot Photo</label>
        <input type="url" required id="image" ref={imageRef}></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Address</label>
        <input type="text" required id="address" ref={addressRef}></input>
      </div>
      <div className={classes.actions}>
        <button>Add Spot</button>
      </div>

    </form>


  </Card>



}

export default NewSpotForm;