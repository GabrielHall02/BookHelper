import React, { useState, useEffect } from "react"
import "./style.css"
import TextInputM from "../TextInputM/TextInputM"
import { saveAs } from "file-saver";
import Header1 from "../Header1/Header1.js"

export default function Apur_Section() {
  const [state, setState] = useState(1);

    useEffect(() => {
        const timer = setTimeout(() => {
          console.log('This will run after n ms!')
        }, 1000);
        return () => clearTimeout(timer);
      }, []);

    const handleClick = event => {
        event.preventDefault();
        if (state === 1){
            setState(2);
            setTimeout(() => {
                setState(3);
                console.log('This will run after 250 ms!')
                saveFile();
            }, 2650);
        }
        if (state === 3){
          setState(1);
        }
    }

    const saveFile = () => {
      saveAs("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf","example.pdf")
    }
    
    return (
      <div className="apur-section">
        <Header1 text={"Apuramento de Vendas"}/>
        <div className="group-972 flex-col-center">
        

            
            <TextInputM text={"Introduzir fornecedor"} />
            <div className="move-up">
            <button className={state===1 ? "botao-exportar" : state===2 ? "onclic" : state === 3 ? "validate" : "botao-exportar"} id="button"
             onClick={handleClick}>
            </button>
            </div>


            
          </div>
        </div>
    )
  }