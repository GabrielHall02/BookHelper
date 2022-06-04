import React from 'react'
import NavBar from "../components/NavBar.js" 
import Header from "../components/Header1/Header1.js"
import TextInputS from '../components/TextInputS/TextInputS.js';
import HeroSection from "../components/HeroSection/HeroSection.js";
import GetStarted from "../components/GetStarted/GetStarted.js";


const Home = () => {
  
  return (
    <>
    <NavBar />
    <div className="hero-section flex-col-center">
      <Header text="Inventory management made easy" />
      <TextInputS text="API KEY:" />
    </div>
    <GetStarted />
    </>
  )
}

export default Home