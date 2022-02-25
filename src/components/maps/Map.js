import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import classes from "./Map.module.css";


const containerStyle = {
  width: '800px',
  height: '400px'
};

const center = {
  lat: 41.382861910872606,
  lng:  2.167136333195983
};

function MapRender() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCrrDod37QJeja4goC7PUllTZJyVbDgPFA"
    >
      <div className = {classes.mapContainer}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
      </div>
    </LoadScript>
  )
}

export default React.memo(MapRender);