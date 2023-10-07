import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
const customIconAgency = L.icon({
  iconUrl: "./redmark.png",
  iconSize: [16, 16], // adjust the size of the icon
  iconAnchor: [16, 32], // position the icon
  popupAnchor: [0, -32] // position the popup relative to the icon
});
const customIconUser = L.icon({
  iconUrl: "./circle.svg",
  iconSize: [16, 16], // adjust the size of the icon
  iconAnchor: [16, 32], // position the icon
  popupAnchor: [0, -32] // position the popup relative to the icon
});
export function MapShow({isVisible,closeMap,coords}) {
    console.log('MapShow component rendering...');

  return (
    <div className={` w-full h-full flex  items-center justify-center z-[100]  ${isVisible?' bg-gray-200 bg-opacity-50':'hidden'} `} >
    <div className="flex flex-col items-center border-2 border-gray-700   h-full justify-center fixed inset-0 z-[100] rounded-lg">
        <div className="flex justify-between w-1/2 h-[4%] bg-blue-700">
                <p className="pl-2 text-white ">ResQMaster</p>
                <button className=" pr-2  text-white hover:bg-red-700 text-lg text-center" onClick={closeMap} type="button">x</button>
            </div>
    <MapContainer className=" w-1/2  border-2 border-gray-600 rounded-b-lg" center={[20.5937, 78.9629]} zoom={4.5} style={{ height: '400px' }}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker  position={[coords().agency.lat,coords().agency.long]} icon={customIconAgency} >
        <Popup>You are Here</Popup>
      </Marker>

      {/* <Marker position={[agencylat,agenctlong]} >
        <Popup>Request Came from Here </Popup>
      </Marker> */}
      <Marker position={[coords().user.lat,coords().user.long]} icon={customIconUser} >
        <Popup>Request Came from Here </Popup>
      </Marker>
      {/* {markers.map((marker, index) => (
        <Marker key={index} position={[marker.lat, marker.lon]}>
          <Popup>{marker.title}</Popup>
        </Marker>
      ))} */}
    </MapContainer>
    </div>
    </div>
  );
}
