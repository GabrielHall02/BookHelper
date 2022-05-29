import React from "react";
import "./style.css";

export default function TextInputM(props) {
    return(
        <div className="flex-col-center-vstart">
            <input className="text-input" type="text" placeholder={props.text}></input>
        </div>
    )
}