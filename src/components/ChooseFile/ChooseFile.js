import React, { useState } from "react"
import { useFilePicker } from 'use-file-picker';
import "./style.css"
import add from "./Add-btn.svg"
import ExcelPreview from "../ExcelPreview/ExcelPreview.js"



export default function GetStarted() {

    const [hide, sethide] = useState(true)
    const [openFileSelector,{loading, filesContent}] = useFilePicker({
        accept: '.xlsx',
      });
    
      if (loading) {
        return <div>Loading...</div>;
      }
    return(
    <>
      <div className="importar flex-row-vcenter">
        <div className="escolher-ficheiro flex-row-vcenter" onClick={() => {openFileSelector();sethide(s => !s);}}>
        
        <img src={add} alt="Not Found" className="vector-4" />
        {hide ? <p className="txt-489">Escolher ficheiro</p> : filesContent.map((file)=>(<p className="txt-489">{file.name}</p>))}
        </div>
        
        
      </div>

    <div className="excelContainer">
    {!hide ? <ExcelPreview /> : null}
    </div>
      
    </>

  )
}