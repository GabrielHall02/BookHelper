import React from "react";
import "./style.css";

export default function TextInputS(props) {
    return(

        <input className="text-input-S" type="text" placeholder={props.text}></input>

    )
}