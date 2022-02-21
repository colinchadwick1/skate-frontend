import classes from "./NewSpotForm.module.css";
import Card from "../UI/Card";

function NewSpotForm() {
  return <Card >
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="locationName">Spot Name</label>
        <input type="text" required id="locationName"></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <input type="textarea" required id="description" rows='5' ></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="image">Spot Photo</label>
        <input type="url" required id="image"></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Address</label>
        <input type="text" required id="address"></input>
      </div>
      <div className={classes.actions}>
        <button>Add Spot</button>
      </div>

    </form>


  </Card>



}

export default NewSpotForm;