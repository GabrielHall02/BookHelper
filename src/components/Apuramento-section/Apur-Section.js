import React from "react"
import "./style.css"


export default function Apur_Section() {
    return (
      <div className="apur-section">
        <div className="group-972 flex-col">
          <p className="txt-051 flex-hcenter">Apuramento de Vendas</p>
          
          <div className="apuramento flex-col-hstart-vstart">
            <input className="text-input" type="text" placeholder="Introduzir fornecedor">
              
            </input>
            <div className="btn-m-export">
              <p className="txt-664">Exportar</p>
            </div>
            
          </div>
        </div>
      </div>
    )
  }