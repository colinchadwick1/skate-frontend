import classes from "./SpotItem.module.css";
import Card from "../UI/Card";


function SpotItem(props) {

  if (props.spotItem  === "SpotItemSmall") {
    return <li className={classes.itemSmall}>
    <Card >
    <div className={classes.content}>
      <h3>{props.locationName}</h3>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </div>
    </Card >
  </li>

  }

  return <li className={classes.item}>
  <Card >
  <div className={classes.image}>
    <img src={props.imageUrl} alt={props.locationName}/>
  </div>
  <div className={classes.content}>
    <h3>{props.locationName}</h3>
    <address>{props.address}</address>
    <p>{props.description}</p>
  </div>
  <div className={classes.actions}>
    <button >Show on Map</button>
    <button >To Favourites</button>
  </div>
  </Card >
</li>

}

export default SpotItem;