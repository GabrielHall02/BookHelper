import React from "react"


export default function Menu2() {
  return (
    <div className="menu-2 flex-col-hstart-vstart clip-contents">
      <div className="menu flex-col">
        <p className="txt-809">Introduzir documentos</p>
        <p className="txt-029">Introduzir produtos</p>
        <p className="txt-581">Apuramento de vendas</p>
        <div className="dropdown flex-row-vcenter-hstart">
          <p className="txt-310">Extras</p>
          <div className="arrow"></div>
        </div>
        <div className="drop-down-2 flex-col-hstart-vstart">
          <div className="drop flex-row-vend">
            <p className="txt-456">Módulo cliente</p>
            <div className="arrow"></div>
          </div>
        </div>
      </div>
      <p className="txt-1067">X</p>
    </div>
  )
}