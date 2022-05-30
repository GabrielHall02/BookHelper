import React from 'react'
import NavBar from "../components/NavBar.js" 
import InputSection from "../components/InputSection/InputSection.js"
import ExportBtn from "../components/ExportBtn/ExportBtn.js"
import Header from '../components/Header1/Header1.js'

const InputDocs = () => {
  return (
    <>
      <NavBar />
      <Header text={"Introduzir Documentos"}/>
      <div className="inputs-wrapper">
      <InputSection />
      <ExportBtn />
      </div>
    </>
  )
}

export default InputDocs