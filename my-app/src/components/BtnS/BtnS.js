import React from "react";
import "./style.css";
import { Icon } from '@iconify/react';

export default function BtnS(props, {onPress}) {
    return (
        <button className="btn-s" type="submit" onClick={onPress} style={{border: 'none'}} >
            <p className="btn-txt" style={{paddingRight:"20px"}}>{props.text}</p>
            <Icon icon="akar-icons:arrow-right" color="white" width="30" height="30"/>
        </button>
    )
}