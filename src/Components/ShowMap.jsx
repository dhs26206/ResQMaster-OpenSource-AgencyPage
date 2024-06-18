import React,{useEffect,useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { getUsernameFromURL,getBack } from "./Utility";
async function getCoords() {
  let link = `${getBack()}/user/${getUsernameFromURL()}/coords`;
  const response = await fetch(link);
  const data = await response.json();
  // console.log(data);
  return data;
}
let coordinate = {
  agency: { lat: 0, long: 0 },
  user: { lat:0, long: 0 }
};
const customIconAgency = L.icon({
  iconUrl: "./redmark.png",
  iconSize: [32, 32], // adjust the size of the icon
  iconAnchor: [16, 32], // position the icon
  popupAnchor: [0, -32] // position the popup relative to the icon
});
const customIconUser = L.icon({
  iconUrl: "./requestlocation.svg",
  iconSize: [32, 32], // adjust the size of the icon
  iconAnchor: [16, 32], // position the icon
  popupAnchor: [0, -32] // position the popup relative to the icon
});
export   function  MapShow({isVisible,closeMap,coords}) {
const [agencycc, setAgencycc] = useState({ lat: 0, long: 0 });
const [userc, setUserc] = useState({ lat: 0, long: 0 });

console.log('MapShow component rendering...');

useEffect(() => {
  if (isVisible) {
    window.dispatchEvent(new Event('resize'));
  }

  async function fetchUserCoords() {
    const userCoords = await coords();
    const dump= {lat:userCoords.lat,long: userCoords.long}
    setUserc(dump);
  }

  if (isVisible) {
    fetchUserCoords();
  }
}, [isVisible]);

useEffect(() => {
  async function fetchAgencyCoords() {
    const agencyCoords = await getCoords();
    const dump= {lat:agencyCoords.AgencyLat,long: agencyCoords.AgencyLong}
    setAgencycc(dump);
  }

  fetchAgencyCoords();
}, []);

    // useEffect(() => {
    //   // To fix map display issue
    //   window.dispatchEvent(new Event('resize'));
    // }, []);
    // const rand = async () => {
    //   const usercoords = await getCoords();
    //   return usercoords;
    // }
    
    // // Wait for the Promise to resolve
    
    // const random = async () => {
    //   const agencoords = await coords();
    //   return agencoords;
    // }
    
     // Wait for the Promise to resolve
    
    //  async function fetchData() {
    //     const agencyd = await rand();
    //     const agencycoords = await random();
    
    //     let coordinate = {
    //       agency: { lat: agencycoords.AgencyLat, long: agencycoords.AgencyLong },
    //       user: { lat: agencyd.lat, long: agencyd.long }
    //     };
    //     return coordinate
    
        
      
  // fetchData()
  // console.log(coordinate);
  // console.log(agencycc);
  // console.log(userc);
  // console.log("Jab Shuru kiya toh banana padega");
  
  // console.log(agencycc.lat);
  console.log(agencycc);
  // console.log(agencycc.long);
  console.log(userc);
  
  return (
    <div className={` w-full h-full flex  items-center justify-center z-[100]  ${isVisible?' bg-gray-200 bg-opacity-50':'hidden'} `} >
    <div className="flex flex-col items-center border-2 border-gray-700   h-full justify-center fixed inset-0 z-[100] rounded-lg">
        <div className="flex justify-between w-1/2 h-[4%] bg-blue-700 rounded-t-xl">
                <p className="pl-2 text-white ">ResQMaster</p>
                <button className=" w-9  text-white hover:bg-red-700 rounded-tr-lg   flex justify-center" onClick={closeMap} type="button">
                  <img src="./close.svg" className="h-full" alt="close" srcset="" />
                </button>
            </div>
    <MapContainer className=" w-1/2   border-2 border-gray-600 rounded-b-lg" center={[20.5937, 78.9629]} zoom={4.5} style={{ height: '400px' }}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* {()=>{
        try{
      <Marker  position={[agencycc.lat,agencycc.long]} icon={customIconAgency} >
        <Popup>You are Here</Popup>
      </Marker>
        }
        catch(error){
          
        }
      }}
      {()=>{
        try{
      <Marker  position={[agencycc.AgencyLat,agencycc.AgencyLong]} icon={customIconAgency} >
        <Popup>You are Here</Popup>
      </Marker>
        }
        catch(error){

        }
      }} */}

      <Marker  position={[agencycc.lat,agencycc.long]} icon={customIconAgency} >
        <Popup>You are Here</Popup>
      </Marker>

      {/* <Marker position={[agencylat,agenctlong]} >
        <Popup>Request Came from Here </Popup>
      </Marker> */}
      <Marker position={[userc.lat,userc.long]} icon={customIconUser} >
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
