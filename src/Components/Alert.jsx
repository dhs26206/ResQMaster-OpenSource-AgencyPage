import React,{useState} from "react";
import { useEffect } from "react";
import "./danger.css"
// import data from "./Sample.json";
import { getUsernameFromURL,getBack } from "./Utility";
let link = `${getBack()}/user/${getUsernameFromURL()}/requests`;
let data1= await fetch(link);                 //Getting from Backend
let data = await data1.json();
export let lati=0;
export let long=0;

const Alert=({mapViewTriggered})=>{
    const [resolvedRequests, setResolvedRequests] = useState([]);
    // const markResolved=(Requestidrequestid)=>{
    //     setResolvedRequests([...resolvedRequests,Requestidrequestid]);
    // }
    // console.log(resolvedRequests);
    const markResolved = (Requestidrequestid,code=0) => {
        console.log("Hey",Requestidrequestid,code);
        setResolvedRequests(prevResolvedRequests => [...prevResolvedRequests, Requestidrequestid]);
        
    }
    useEffect(() => {
        // Extract request IDs with status "Resolved" and set as initial state
        const initialResolvedRequests = data
            .filter(request => request.status === false)
            .map(request => request.requestid);
            setResolvedRequests(initialResolvedRequests);
            
    }, []);
    // useEffect(() => {
    //     // This effect will run whenever resolvedRequests changes
    //     // You can update the status based on the new resolvedRequests here
    // }, [resolvedRequests]);
    
    const isResolved=(Requestidrequestid)=>{
        // console.log("Triggered")
        // console.log(resolvedRequests.includes(Requestidrequestid));
        return resolvedRequests.includes(Requestidrequestid)
    }
    const handleView=(la,lo)=>{
        lati=la;
        long=lo;
        mapViewTriggered();

    }
    const handleMarkResolved=async (Requestidrequestid)=>{

        markResolved(Requestidrequestid);
    }
    // data.requests.map((request)=>{request.status!=="Not Resolved" ? markResolved(request.requestid):console.log("try it")})
    return(
        <div className="element  md:max-w-[66%] w-full rounded-lg" style={{overflow:'scroll',height:'510px'}}>
            <div className="flex flex-col">
                {
                    data.map((request)=>(
                        <>
                        
                     <div key={request.requestid} className="flex flex-wrap gap-2 border-2 border-gray-400 rounded-sm">
                        {/* {request.status!=="Not Resolved" && !isResolved(request.Requestidrequestid)&& markResolved(request.requestid,1)} */}
                        {/* {request.status==="Resolved" && setResolvedRequests(prevResolvedRequests => [...prevResolvedRequests, request.requestid]) } */}
                        {/* <p ><span className="font-bold"> Status:</span>{request.status}</p> */}
                        {/* {isResolved(request.Requestidrequestid) &&(<p><span className="font-bold"> Status:</span>Resolved</p>)}
                        {!isResolved(request.Requestidrequestid)&&(<p><span className="font-bold"> Status:</span>Not Resolved</p>)} */}
                        {/* {console.log(isResolved(request.requestid))} */}
                        <p ><span className="font-bold">Name:</span>{request.name}</p>
                        <p ><span className="font-bold">Contact Number:</span>{request.contact}</p>
                        <p ><span className="font-bold"> Date & Time of Request:</span>{request.date},{request.time}</p>
                        <p ><span className="font-bold"> Location(lat,long):</span>{request.lat},{request.long}</p>
                        <p ><span className="font-bold"> RequestID:</span>{request.requestid}</p>
                        <p ><span className="font-bold"> Type of Disaster:</span>{request.disastertype}</p>
                        <div className="flex flex-wrap w-full justify-center gap-3" >
                        {!isResolved(request.requestid) ?(<button className=" bg-green-500 px-10 text-center rounded-sm hover:bg-green-400 " onClick={() => handleMarkResolved(request.requestid)} >Mark as Resolved</button>):null}
                        {isResolved(request.requestid)?(<button className="bg-gray-300 mx-[40%] text-center w-full rounded-sm" disabled>Resolved</button>):null}
                        {!isResolved(request.requestid) ?(<button className=" bg-yellow-300 px-10 text-center rounded-sm hover:bg-yellow-400 " onClick={() => handleView(request.lat,request.long)} >View On Map</button>):null}
                        {/* {isResolved(request.requestid)?(<button className="bg-gray-300 mx-[40%] text-center w-full" disabled>Resolved</button>):null} */}
                        </div>
                     </div>
                     </>
                    ))
                }

            </div>
        </div>
    )
}

export default Alert;