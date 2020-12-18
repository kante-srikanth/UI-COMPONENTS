import React, { useEffect } from "react";
import "./gift.css"

const Gift = ({info, code, audio}) => {

    const hoverHandler = () => {
        new Audio(audio).play();
    }

    useEffect(()=>{
        new Audio(audio);
    },[])
    return (
        <div className="gift" onMouseOver={()=>hoverHandler()}>
            <div className="lid">
                <span></span>
            </div>
            <div className="promo">
                <p>{info}</p>
                <h2>{code}</h2>
            </div>
            <div className="box">
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Gift;