import React from 'react'
import NavBar from '../components/NavBar'
import InputSection from "../components/InputProdsSection/InputProdsSection.js"
import ExportBtn from "../components/ExportBtn/ExportBtn.js"
import Header from '../components/Header1/Header1'
import "../components/style.css"

const InputProds = () => {
  return (
    <>
    <NavBar />
    <div className='flex-col-center'>
    <Header text={"Importar Produtos"}/>
    <InputSection />
    <ExportBtn />
    </div>
    </>
  )
}

export default InputProds