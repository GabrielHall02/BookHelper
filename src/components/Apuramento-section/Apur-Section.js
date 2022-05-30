import React, { useState } from "react"
import "./style.css"
import TextInputM from "../TextInputM/TextInputM"
import { saveAs } from "file-saver";
import SuccessTxt from "../SuccessTxt/SuccessTxt.js"

export default function Apur_Section() {
  const [hide, sethide] = useState(true)
    
    return (
      <div className="apur-section">
        <div className="group-972 flex-col">
          <p className="txt-051 flex-hcenter">Apuramento de Vendas</p>
          
          <TextInputM text={"Introduzir fornecedor"} />
            <div className="btn-m-export" onClick={() => {saveAs("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      "example.pdf"); sethide(s => !s);}}>
              
              <p className="txt-664">Exportar</p>
            </div>
            <div className="success-container" ></div>
            {!hide ? <SuccessTxt text={"success"}/> : null}
          </div>
        </div>
    )
  }