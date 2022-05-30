import React, {useState, Component} from "react"
import "./style.css"
import TextInputM from "../TextInputM/TextInputM"
import Header1 from "../Header1/Header1"
import SubHeader1 from "../Subheader1/Subheader1"


export default function InputSection() {

    const [text, setText] = useState('');
    const [hide, setHide] = useState(false);

    const handleChange = event => {
        setText(event.target.value);
        const message = event.target.value;
        console.log(message);
        if(String(message)==="Leya"){
            setHide(s => !s)
        }else{
            setHide(false)
        }

    };


    
    const handleClick = event => {
        event.preventDefault();
        if (event.key === 'Enter') {
            if (text=== "Leya") {
                console.log('input value is NOT empty');
              } else {
                console.log('input value is empty');
              }
        }
        
      };
    

    return(
<>
<div className="container">
    <div className="flex-col">
        <Header1 text={"Extras"}/>
        <SubHeader1 text={"Editoras de um fornecedor"} />
    </div>
        <div className="flex-col-center-vstart">
            <input onChange={handleChange} className="text-input" type="text"></input>
        </div>
    
    {hide ? <div className="ExtraContainer">
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
    </div> : null}    

    
    
     
        
        

        
        

</div>
</>
    )
}