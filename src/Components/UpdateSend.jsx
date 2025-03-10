import React from "react";
import 'animate.css';
// import { getUsernameFromURL,getBack } from "./Utility";
// let link = `${getBack}/user/${getUsernameFromURL}/postpvt`;

const PopPvt=({isVisible,Post,Data,Toggle})=>{
    // {console.log(isVisible)}
    let delayhide=isVisible;
    
    const Ting=(event)=>{
        event.stopPropagation();
        setTimeout(Toggle,150);
        
    }
    return(
    <div  className={`${isVisible?' bg-gray-200 bg-opacity-50':'hidden'} fixed inset-0 w-full h-screen flex justify-center items-center z-50 `}>
        <div  className={`rounded-lg min-w-[30%] min-h-[55%] bg-white animate__animated ${delayhide?'animate__fadeIn':'animate__fadeOut'}`}>
            <div className="flex justify-between h-[4%] bg-blue-700 rounded-t-lg">
                <p className="pl-2 text-white ">ResQMaster</p>
                <button className="w-9 text-white hover:bg-red-700 rounded-tr-lg flex justify-center" onClick={Ting} type="button">
                <img src="./close.svg" className="h-full" alt="close" srcset="" />
                </button>
            </div>
            <div className="flex flex-col min-h-[95%] ">
                <h1 className=" text-center text-lg" >Alert to Other Agencies</h1>
                <input className=" m-9 rounded-md min-w-[80%] h-52 border-[1px] border-gray-700 placeholder:text-start placeholder:text-gray-700" type="text" onChange={Data} placeholder="Enter Message Here" />
                <div className="flex justify-center text-white"><button className="w-48 h-10 mx-12 hover:bg-blue-600 bg-blue-500 rounded-xl text-white" onClick={Post}  type="button">Post</button></div>
            </div>


        </div>
    </div>)
}
export default PopPvt;
