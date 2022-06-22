import React from "react";
import "./style.css";

export default function TextInputS(props, val) {
   

    return(

        <input className="text-input-S" type="text" placeholder={props.text} value={val.text} ></input>

    )
}