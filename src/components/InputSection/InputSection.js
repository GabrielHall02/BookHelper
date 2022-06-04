import React, { useState } from "react"
import { useFilePicker } from 'use-file-picker';
import "./style.css"
import add from "./Add-btn.svg"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import ExcelPreview from "../ExcelPreview/ExcelPreview.js"
import SuccessTxt from "../SuccessTxt/SuccessTxt.js"


export default function GetStarted() {
  const options = [
    'Fatura', 'Guia de consignação'
  ];
  const [hide, sethide] = useState(true)
    const [hide2, sethide2] = useState(true)
    const [openFileSelector,{loading, filesContent}] = useFilePicker({
        accept: '.xlsx',
      });
    
      if (loading) {
        return <div>Loading...</div>;
      }
  const defaultOption = options[0];
    return(
    <>
    
    <div className="flex-row-spbetween">
      <Dropdown className='dropdown' controlClassName='Dropdown-control' menuClassName='dropdown-menu' arrowClassName='Dropdown-arrow' options={options} value={defaultOption} placeholder="Select an option" />

      <div className="importar flex-row-vcenter">
        <div className="escolher-ficheiro flex-row-vcenter" onClick={() => {openFileSelector();sethide(s => !s);}}>
        
        <img src={add} alt="Not Found" className="vector-4" />
        {hide ? <p className="txt-489">Escolher ficheiro</p> : filesContent.map((file)=>(<p className="txt-489">{file.name}</p>))}
        </div>

      </div>
    </div>

    {!hide ?<div className="excelContainer">
     <ExcelPreview /> 
    </div>: null}
      <div className="success-section">
      {!hide2 ? <SuccessTxt text={"Importado com sucesso"} />: null}
      </div>
    


  
  </>
  )
}