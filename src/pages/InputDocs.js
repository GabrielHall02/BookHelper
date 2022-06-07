import React from 'react'
import NavBar from "../components/NavBar.js" 
import InputSection from "../components/InputSection/InputSection.js"
import ExportBtn from "../components/ExportBtn/ExportBtn.js"
import Header from '../components/Header1/Header1.js'
import ImportBtn from '../components/ImportBtn/ImportBtn.js'
import "./style.css"

const InputDocs = () => {
  return (
    <>
      <NavBar />
      <Header text={"Introduzir Documentos"}/>
      <div className="inputs-wrapper">
      <InputSection />
      
      </div>
      <div className="footer_section">
      <div className='flex-col-center sp-between move-up'>
        <ImportBtn />
        <ExportBtn />
      </div>
      </div>
    </>
  )
}

export default InputDocs