import React from "react";
import "./danger.css"
import data from "./Updates.json";
const Option=({pvtClicked,pubClicked})=>{
    return(
        <div className="element flex flex-col md:max-w-[30%] w-full  rounded-xl border-gray-500 border-2">
            <div className="" > 
            <h2 className="pt-3 text-3xl border-b-2 border-black" >Updates !</h2>  
                <div className="h-[370px]" style={{overflow:'scroll',height:'370px'}} >
                    {data.messages.map((request)=>(
                        <div className="flex flex-col pb-10 border-b-2 border-gray-700 pl-1">
                            <p><span className=" font-bold">Name:</span>{request.agencyName}</p>
                            <p><span className=" font-bold">Date:</span>{request.dateIST}</p>
                            <p><span className=" font-bold">Time:</span>{request.timeIST}</p>
                            <p><span className=" font-bold">Message:</span>{request.message}</p>
                            {/* <p><span className=" font-bold">Name:</span>{request.agencyName}</p> */}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-5 border-t-4 border-blue-900 justify-evenly h-max">
                <p className="text-3xl">Actions</p>
                <div className="flex flex-wrap justify-around ">
                    <button className=" w-48 h-10 bg-blue-500 rounded-xl text-white" onClick={pvtClicked} type="button">Post Update</button>
                    <button className="w-48 h-10 bg-blue-500 rounded-xl text-white" onClick={pubClicked} type="button">Public Post</button>
                </div>
            </div>
        </div>
    )
}

export default Option;