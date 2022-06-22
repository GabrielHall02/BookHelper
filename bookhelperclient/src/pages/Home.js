import React from 'react'
import "./style.css"
import Btn_m from "../components/Button-m.js"

const Home = () => {
  
    return (
      <>
      <div className='wrapper'>
        <div className='container  image'>
            <div className='overlay flex-vertical-center'></div>
            <div className='positioner flex-vertical-center'>
            <div>
            <p className='header3'>Afonso Cruz</p>
            </div>

            <Btn_m />
            </div>
        </div>
        </div>
      </>
    )
  }
  
  export default Home