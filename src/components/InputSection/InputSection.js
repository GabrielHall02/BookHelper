import React from "react"
import ChooseFile from "../ChooseFile/ChooseFile.js"
import "./style.css"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


export default function GetStarted() {
  const options = [
    'Fatura', 'Guia de consignação'
  ];
  const defaultOption = options[0];
    return(
    <>
    <div className="wrapper">
    <div className="property-1-variant-2 flex-col-hstart-vstart">
    <div className="flex-row">
    <Dropdown className='dropdown' controlClassName='Dropdown-control' menuClassName='dropdown-menu' arrowClassName='Dropdown-arrow' options={options} value={defaultOption} placeholder="Select an option" />
    <ChooseFile />
    </div>
  </div>
  </div>
  
  </>
  )
}