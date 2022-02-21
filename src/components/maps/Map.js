import React from 'react'
import { Autocomplete, GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '800px'
};

const center = {
  lat: 41.38303,
  lng: 2.16693
};


function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCrrDod37QJeja4goC7PUllTZJyVbDgPFA"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { 
        <Marker position = {center}/>/* Child components, such as markers, info windows, etc. */ 
         }
        <></>
      </GoogleMap>

  ) : <></>
}

export default React.memo(MyComponent)