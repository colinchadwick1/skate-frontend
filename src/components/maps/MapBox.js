import React, {useState} from "react";
import ReactMapGL from "react-map-gl";

function MapRender() {

  const [viewport, setViewport] = useState({
    latitude: 41.38303,
    longitude: 2.16693,
    zoom: 10,
    width: '500px',
    height: '500px'
  });


  return <div>
    <ReactMapGL {...viewport}>
    </ReactMapGL>
  </div>
}

export default MapRender;