import React from "react"
import "./style.css"
import TextInputM from "../TextInputM/TextInputM"


export default function Apur_Section() {
    return (
      <div className="apur-section">
        <div className="group-972 flex-col">
          <p className="txt-051 flex-hcenter">Apuramento de Vendas</p>
          
          <TextInputM text={"Introduzir fornecedor"} />
            <div className="btn-m-export">
              <p className="txt-664">Exportar</p>
            </div>
            
          </div>
        </div>
    )
  }