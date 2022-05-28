import React from "react"
import "./style.css"
import vector1 from "./Vector1.svg"
import vector2 from "./Vector2.svg"
import vector3 from "./Vector3.svg"

export default function GetStarted() {
    return(
    
    <div className="property-1-default flex-col-hstart-vstart">
    <div className="group-167 flex-col-hcenter">
      <div className="get-started-btn flex-row-vcenter">
        <p className="txt-701">Get Started</p>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/j72me28kf3n-143%3A37?alt=media&token=715083eb-cb29-4f8e-ae47-1f913517c7ba"
          alt="Not Found"
          className="arrow-1"
        />
      </div>
      <div class="vector-wrapper">
        <img src={vector1} alt="No vector" class="home-vector1"/>
        <img src={vector2} alt="No vector" class="home-vector2"/>
        <img src={vector3} alt="No vector" class="home-vector3"/>  
      </div>
      


    </div>
  </div>
  
  )
}
