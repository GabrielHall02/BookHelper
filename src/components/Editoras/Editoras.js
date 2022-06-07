import React from "react"
import "./style.css"



export default function InputSection(prop) {
    
    return(
    <div className={prop.text}>
        <div className="excel-previeww">
        <div className="rectangle-6" />
        <div className="rectangle-8" />
        <div className="rectangle-7" />
        <div className="rectangle-9" />
        <div className="editoras flex-col">
            <p className="txt-483">Editora</p>
            <p className="txt-837">ASA</p>
            <p className="txt-957">D. QUIXOTE</p>
            <p className="txt-202">CAMINHO</p>
        </div>
        </div>
    </div>
    )
}