import React, { useState } from "react"
import "./style.css"
import { useFilePicker } from 'use-file-picker';
import add_green from "./Add-btn-green.svg"
import add_black from "./Add-btn-black.svg"
import Header from "../Header1/Header1"
import SubHeader from "../Subheader1/Subheader1"
import TextInput from "../TextInputM/TextInputM"

export default function ContainerModule(){
    const [hide, sethide] = useState(true)
    const [openFileSelector,{loading, filesContent}] = useFilePicker({
        accept: ['JPG','.jpg','.png','jpeg'],
      });
    
      if (loading) {
        return <div>Loading...</div>;
      }
    return(
        <>
        <div className="container">
            <Header text={"Módluo Cliente"}/>
            <SubHeader text={"Setup"}/>
            <TextInput text={"Autor"}/>
            <div className="importar23 flex-row-vcenter">
                <div className="escolher-ficheiro flex-row-vcenter" onClick={() => {openFileSelector();sethide(s => !s);}}>
                {hide ? <p className="txt-489">Escolher ficheiro</p> : filesContent.map((file)=>(<p className="txt-489">{file.name}</p>))}
                </div>
                <img src={add_green} alt="add_btn"></img>
            </div>
            
            <div className="importar2 ">
                <p className="txt">Adicionar livros (4 max.)</p>
                <div className="flex-row-apart" >
                <input className="nostyle" type="text" placeholder="ISBN"></input>
                <img src={add_black} alt="add_btn" className="black_btn"></img>
                </div>
                
            </div>
        </div>
        </>
    )
}