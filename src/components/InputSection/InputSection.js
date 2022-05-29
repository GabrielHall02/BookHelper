import React from "react"
import ChooseFile from "../ChooseFile/ChooseFile.js"
import "./style.css"

export default function GetStarted() {
    return(
    <>
    <div className="wrapper">
    <div className="property-1-variant-2 flex-col-hstart-vstart">
    <div className="flex-row">
      <div className="dropdown-2 flex-col-hstart-vstart">
        <div className="btn-border flex-row-vcenter">
          <div className="escolher-tipo flex-row-vcenter">
          <p className="txt-522">Tipo de Documento</p>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/hxo5mghnfja-I148%3A200%3B143%3A233?alt=media&token=108ece4a-8d94-4ba5-9c84-051f0768ed18"
            alt="Not Found"
            className="proximo-3"
          />
          </div>
        </div>
      </div>
      <ChooseFile />
    </div>
  </div>
  </div>
  
  </>
  )
}