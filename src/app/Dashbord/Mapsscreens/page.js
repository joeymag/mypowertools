"use client";

import React, { useEffect, useState }  from 'react'
import { GoogleMap,  MarkerF,  useJsApiLoader } from '@react-google-maps/api'
import { listofmarkers } from './Data';


const containerStyle = {
  width:  '100%',
  height: '100%',
};

const Userdata = [
  {
      id: 1,
      lat: 51.65568015754590,
      lng: -0.2700700027106799
  },
]



function Page() {
  const [userlocation, setuserlocation] = useState(null);
  const [Userdata, setUserdata] = useState("");
  // ...

  useEffect(() => {
    const getUserLocation = () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude; 
        const longitude = position.coords.longitude;
        setuserlocation({ coords: { longitude, latitude } });
      });
    };

    getUserLocation(); 
  }, []);


  const options = {
    mapId: '7c166c8f9b4ad3e',
  }

  const center = {
    longitude: userlocation?.coords.longitude,
    latitude: userlocation?.coords.latitude,
  };
  console.log(center);

    // ... rest of the position array

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS
   });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);


 
 
  
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={{ height: "100vh", width: "w-full" }}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
        center={{ lat: center.latitude, lng: center.longitude }}
        options={options}

      >
       
          <MarkerF
            clickable={true}
            draggable={true}
            position={{ lat: center.latitude, lng: center.longitude }}
            icon={{
              url: "https://img.icons8.com/color/48/000000/marker.png",
              scaledSize: new window.google.maps.Size(30, 30)
            }}
          />
        
      
       
        // ...

        {listofmarkers.map((data) => (
          <MarkerF
            clickable={true}
            draggable={true}
            key={listofmarkers.id}
            position={{ lat: data.latatude, lng: data.longitude }}
            icon={{
              url: "https://img.icons8.com/color/48/van.png",
              scaledSize: new window.google.maps.Size(30, 30)
              
            }}
           
          />
        ))}
      </GoogleMap>
  ) : <></>
}

export default Page;