import React from 'react'
import NavBar from "../components/NavBar.js" 
import Header from "../components/Header1/Header1.js"
import TextInputS from '../components/TextInputS/TextInputS.js';
import BtnS from '../components/BtnS/BtnS.js';
import vector1 from "../components/GetStarted/Vector1.svg"
import vector2 from "../components/GetStarted/Vector2.svg"
import vector3 from "../components/GetStarted/Vector3.svg"


const Home = () => {
  
  return (
    <>
    <NavBar />
    <div className="hero_section flex-col-center">
      <Header text="Inventory management made easy" />
      <TextInputS text="API KEY:" />
      <BtnS text="Get Started" />
    </div>
    <div class="vector-wrapper">
      <img src={vector1} alt="No vector" class="home-vector1" />
      <img src={vector2} alt="No vector" class="home-vector2" />
      <img src={vector3} alt="No vector" class="home-vector3" />
    </div>

    </>
  )
}

export default Home