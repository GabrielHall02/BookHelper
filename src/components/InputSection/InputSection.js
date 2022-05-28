import React, { useState, useRef } from "react"
import { useFilePicker } from 'use-file-picker';
import "./style.css"
import add from "./Add-btn.svg"

export default function GetStarted() {
    const [hide, sethide] = useState(true)
    const [openFileSelector,{loading, filesContent}] = useFilePicker({
        accept: '.xlsx',
      });
    
      if (loading) {
        return <div>Loading...</div>;
      }

    return(
    <div className="wrapper">
    <div className="property-1-variant-2 flex-col-hstart-vstart">
    <div className="flex-row">
      <div className="dropdown-2 flex-col-hstart-vstart">
        <div className="tipo-de-documento flex-row">
          <p className="txt-522">Tipo de Documento</p>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/hxo5mghnfja-I148%3A200%3B143%3A233?alt=media&token=108ece4a-8d94-4ba5-9c84-051f0768ed18"
            alt="Not Found"
            className="proximo-3"
          />
        </div>
      </div>
      <div className="importar flex-row-vcenter">
        <div className="escolher-ficheiro flex-row-vcenter" onClick={() => {openFileSelector();sethide(s => !s);}}>
        <img src={add} alt="Not Found" className="vector-4" />
        {hide ? <p className="txt-489">Escolher ficheiro</p> : filesContent.map((file)=>(<p className="txt-489">{file.name}</p>))}
            
          
        </div>
        <div className="botao-importar">
          <p className="txt-5107">Importar</p>
        </div>
      </div>
    </div>
    {!hide ? <div className="excel-preview flex-col">
      <div className="group-814 flex-row">
        <p className="txt-4104">ISBN</p>
        <p className="txt-677">Title</p>
        <p className="txt-237">Qt</p>
        <p className="txt-552">Price</p>
      </div>
      <div className="group-803 flex-row">
        <p className="txt-943">9789897491382</p>
        <p className="txt-433">O ARTISTA QUE PINTOU UM CAVALO</p>
        <p className="txt-610">5</p>
        <p className="txt-246">10.38</p>
      </div>
      <div className="group-326 flex-row">
        <p className="txt-829">9789897490804</p>
        <p className="txt-227">A JOANINHA RESMUNGONA</p>
        <p className="txt-610">5</p>
        <p className="txt-246">12.26</p>
      </div>
      <div className="group-349 flex-row">
        <p className="txt-623">9789897491160</p>
        <p className="txt-5910">URSO CASTANHO</p>
        <p className="txt-610">5</p>
        <p className="txt-246">10.38</p>
      </div>
    </div> : null}
  </div>
  </div>
  )
}