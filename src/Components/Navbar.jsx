import React from "react";

const Navbar=({Logout})=>{
    return(
        <div className="w-full h-40 bg-blue-700 flex justify-between">
            <img src="logo_transparent.png" alt="logo" style={{height:'150px',width:'auto'}}/>
            <div className="flex flex-col h-full justify-center items-center  text-white ">
                <p className=" pb-3 text-4xl font-semibold text-center" >ResQMaster</p>
                <p className=" text-gray-200 text-xl font-semibold text-center ">An Initiative by Ministry of Home Affairs,Government of India</p>
                <p className=" text-lg font-semibold text-center" ></p>
            </div>
            <div className="flex flex-col justify-center mr-3 " >
            {/* onClick={} */}
            <button  className="w-36 h-9 bg-white rounded-lg border-2 border-white text-blue-700 hover:bg-blue-700 hover:text-white " type="button" id="agency" onClick={Logout}>Log Out</button>
            </div>
            
        </div>
    );
}

export default Navbar;