import React,{useState} from "react";
import { useEffect } from "react";
import "./danger.css"
import data from "./Sample.json";
export let lati=0;
export let long=0;
const Alert=({mapViewTriggered})=>{
    const [resolvedRequests, setResolvedRequests] = useState([]);
    // const markResolved=(RequestID)=>{
    //     setResolvedRequests([...resolvedRequests,RequestID]);
    // }
    // console.log(resolvedRequests);
    const markResolved = (RequestID,code=0) => {
        console.log("Hey",RequestID,code);
        setResolvedRequests(prevResolvedRequests => [...prevResolvedRequests, RequestID]);
        
    }
    useEffect(() => {
        // Extract request IDs with status "Resolved" and set as initial state
        const initialResolvedRequests = data.requests
            .filter(request => request.status === "Resolved")
            .map(request => request.requestID);
            setResolvedRequests(initialResolvedRequests);
            
    }, []);
    // useEffect(() => {
    //     // This effect will run whenever resolvedRequests changes
    //     // You can update the status based on the new resolvedRequests here
    // }, [resolvedRequests]);
    
    const isResolved=(RequestID)=>{
        // console.log("Triggered")
        // console.log(resolvedRequests.includes(RequestID));
        return resolvedRequests.includes(RequestID)
    }
    const handleView=(la,lo)=>{
        lati=la;
        long=lo;
        mapViewTriggered();

    }
    const handleMarkResolved=(RequestID)=>{
        markResolved(RequestID);
    }
    // data.requests.map((request)=>{request.status!=="Not Resolved" ? markResolved(request.requestID):console.log("try it")})
    return(
        <div className="element  md:max-w-[66%] w-full rounded-lg" >
            <div className="flex flex-col">
                {
                    data.requests.map((request)=>(
                        <>
                        
                     <div key={request.requestID} className="flex flex-wrap gap-2 border-2 border-gray-400 rounded-sm">
                        {/* {request.status!=="Not Resolved" && !isResolved(request.RequestID)&& markResolved(request.requestID,1)} */}
                        {/* {request.status==="Resolved" && setResolvedRequests(prevResolvedRequests => [...prevResolvedRequests, request.requestID]) } */}
                        {/* <p ><span className="font-bold"> Status:</span>{request.status}</p> */}
                        {/* {isResolved(request.RequestID) &&(<p><span className="font-bold"> Status:</span>Resolved</p>)}
                        {!isResolved(request.RequestID)&&(<p><span className="font-bold"> Status:</span>Not Resolved</p>)} */}
                        {/* {console.log(isResolved(request.requestID))} */}
                        <p ><span className="font-bold">Name:</span>{request.personName}</p>
                        <p ><span className="font-bold">Contact Number:</span>{request.requesteeNumber}</p>
                        <p ><span className="font-bold"> Date & Time of Request:</span>{request.dateTimeIST}</p>
                        <p ><span className="font-bold"> Location(lat,long):</span>{request.location.latitude},{request.location.longitude}</p>
                        <p ><span className="font-bold"> RequestID:</span>{request.requestID}</p>
                        <p ><span className="font-bold"> Type of Disaster:</span>{request.disasterType}</p>
                        <div className="flex flex-wrap w-full justify-center gap-3" >
                        {!isResolved(request.requestID) ?(<button className=" bg-green-500 px-10 text-center rounded-sm hover:bg-green-400 " onClick={() => handleMarkResolved(request.requestID)} >Mark as Resolved</button>):null}
                        {isResolved(request.requestID)?(<button className="bg-gray-300 mx-[40%] text-center w-full rounded-sm" disabled>Resolved</button>):null}
                        {!isResolved(request.requestID) ?(<button className=" bg-yellow-300 px-10 text-center rounded-sm hover:bg-yellow-400 " onClick={() => handleView(request.location.latitude,request.location.longitude)} >View On Map</button>):null}
                        {/* {isResolved(request.requestID)?(<button className="bg-gray-300 mx-[40%] text-center w-full" disabled>Resolved</button>):null} */}
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