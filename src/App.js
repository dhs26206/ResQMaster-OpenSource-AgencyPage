
import './App.css';
import { useState} from 'react';
import Navbar from './Components/Navbar'
import {lati,long} from './Components/Alert';
// import Option from './Components/AgencyOption';
import Combined from './Components/Combined';
import PopPvt from './Components/UpdateSend';
import PubPost from './Components/BulletinPost';
import { MapShow } from './Components/ShowMap';
let agencylat=29.947267
let agenctlong=77.553160

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
    console.log("heloo")
    pvtsetVisible(!pvtisVisible);
    console.log(pvtisVisible);
  }
  const pvtPost=(event)=>{
    console.log(event.target.value);
    pvtToggle();
  }
  const pvtChangeData=(data)=>{
    pvtsetData(data);
    console.log(pvtData);
  }
  const pubToggle=()=>{
    console.log("heloo")
    pubsetVisible(!pubisVisible);
    console.log(pubisVisible);
  }
  const pubPost=(event)=>{
    console.log(event.target.value);
    pubToggle();
  }
  const pubChangeData=(data)=>{
    pubsetData(data);
    console.log(pubData);
  }
  const getCoods=()=>{
    let coords={agency :{lat:agencylat,long:agenctlong},user:{lat:lati,long}};
    // console.log(coords);
    return(coords)
  }
  const letShowMap=()=>{
    toggle();
  }
    return(
      <>
      <Navbar/>
      <Combined pvtClick={pvtToggle} pubClick={pubToggle} confirmTriggered={letShowMap} />
      <PopPvt isVisible={pvtisVisible} Toggle={pvtToggle} Post={pvtPost} Data={pvtChangeData} />
      <PubPost isVisible={pubisVisible} Toggle={pubToggle} Post={pubPost} Data={pubChangeData} />
      <MapShow isVisible={mapVisible} closeMap={toggle} coords={getCoods}/>
      </>
    )
  
}

export default App;
