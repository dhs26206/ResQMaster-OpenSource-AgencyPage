import React from "react";
import Alert from "./Alert";
import Option from "./AgencyOption";

const Combined=({pubClick,pvtClick,confirmTriggered})=>{
    return(
        <div className="w-full flex justify-between flex-wrap-reverse">
            <Option pubClicked={pubClick} pvtClicked={pvtClick} />
            <Alert mapViewTriggered={confirmTriggered} />
        </div>
    )
}
export default Combined;