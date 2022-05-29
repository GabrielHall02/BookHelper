import React from "react"
import "./style.css"
import TextInputM from "../TextInputM/TextInputM"
import Header1 from "../Header1/Header1"
import SubHeader1 from "../Subheader1/Subheader1"


export default function InputSection() {
    return(
<>
<div className="container">
    <div className="flex-col">
        <Header1 text={"Extras"}/>
        <SubHeader1 text={"Editoras de um fornecedor"} />
    </div>
        <TextInputM text={"Introduzir fornecedor"} />
</div>
</>
    )
}