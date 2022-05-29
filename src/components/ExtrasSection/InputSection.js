import React from "react"
import "./style.css"

export default function InputSection() {
    return(
<div className="container">
    <div className="flex-col">
        <p className="header1 flex-hcenter">Extras</p>
        <p className="heading2 flex-hcenter">Editoras de um fornecedor</p>
    </div>
    <div className="flex-col-center-vstart">
        <input className="text-input" type="text" placeholder="Introduzir fornecedor"></input>
    </div>

</div>

    )
}