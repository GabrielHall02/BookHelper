import React from 'react'
import NavBar from '../components/NavBar'
import InputSection from "../components/InputProdsSection/InputProdsSection.js"
import ExportBtn from "../components/ExportBtn/ExportBtn.js"
import Header from '../components/Header1/Header1'
import ImportBtn from '../components/ImportBtn/ImportBtn'
import "./style.css"

const InputProds = () => {
  return (
    <>
    <NavBar />
    <div className='flex-col-center'>
    <Header text={"Importar Produtos"}/>
    <InputSection />

    <div className='footer_section'>
      <div className='flex-col-center sp-between move-right'>
        <ImportBtn />
        <ExportBtn />
        </div>
    </div>
    
    </div>
    </>
  )
}

export default InputProds