
import './App.css';
import { useState} from 'react';
import Navbar from './Components/Navbar'
import {lati,long} from './Components/Alert';
// import Option from './Components/AgencyOption';
import Combined from './Components/Combined';
import PopPvt from './Components/UpdateSend';
import PubPost from './Components/BulletinPost';
import { MapShow } from './Components/ShowMap';
import { getUsernameFromURL,getBack } from "./Components/Utility";
let linkpvt = `${getBack()}/user/${getUsernameFromURL()}/postpvt`;
let linkpub = `${getBack()}/user/${getUsernameFromURL()}/postpub`;
let linklog = `${getBack()}/user/${getUsernameFromURL()}/logout`;

// let {AgencyLat,AgencyLong}=getCoords();
// let agencylong=AgencyLong;
// let agencylat=AgencyLat;


const App=()=>{
  const [pubisVisible,pubsetVisible]=useState(false);
  const [pvtisVisible,pvtsetVisible]=useState(false);
  const [pvtData,pvtsetData]=useState('');
  const [pubData,pubsetData]=useState('');
  const [mapVisible,setVisib]=useState(0);
  const toggle=()=>{
    setVisib(!mapVisible);
  }
  const pvtToggle=()=>{
    console.log("heloo");
    pvtsetVisible(!pvtisVisible);
    console.log(pvtisVisible);
  }
  const pvtPost= async (event)=>{
    let message = pvtData;
    if(message.length>0){
      let obj={message};
      await fetch(linkpvt, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)}) .catch((error)=>{console.log(error)});
    }
    pvtToggle();
  }
  const pvtChangeData=(data)=>{
    pvtsetData(data.target.value);
    console.log(pvtData);
  }
  const pubToggle=()=>{
    console.log("heloo");
    pubsetVisible(!pubisVisible);
    console.log(pubisVisible);
  }
  const pubPost= async(event)=> {
    let message = pubData;
    console.log("Tere Mere sapne")
    console.log(message.length);
    if(message.length>0){
      let obj={message};
      let check=await fetch(linkpub, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)}) .catch((error)=>{console.log(error)});
    }

    pubToggle();
  }
  const pubChangeData=(data)=>{
    pubsetData(data.target.value);
    console.log(pubData);
  }
  const getCoods=async ()=>{
    let coords={lat:lati,long:long};
    console.log(coords);
    return(coords)
  }
  const letShowMap=()=>{
    toggle();
  }
  const logoutUser=async()=>{
    console.log("I got triggered ");
    window.location.href="https://aws1.ddks.live";
    let complete = await fetch(linklog);
  }
    return(
      <>
      <Navbar Logout={logoutUser} />
      <Combined pvtClick={pvtToggle} pubClick={pubToggle} confirmTriggered={letShowMap} />
      <PopPvt isVisible={pvtisVisible} Toggle={pvtToggle} Post={pvtPost} Data={pvtChangeData} />
      <PubPost isVisible={pubisVisible} Toggle={pubToggle} Post={pubPost} Data={pubChangeData} />
      <MapShow isVisible={mapVisible} closeMap={toggle} coords={getCoods}/>
      </>
    )
  
}

export default App;
