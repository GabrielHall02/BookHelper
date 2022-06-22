import React, {useState} from "react"
//import NavBar from "./components/NavBar.js"
import { Link } from 'react-router-dom';
import "./style.css"
import { Icon } from '@iconify/react';
import Menu from "./Menu/Menu";


export default function NavBar() {
  
  return (
    <div className="nav-bar">
    <div className="group-964 flex-row mid">
      <div className="logo flex-row">
        
        <Icon icon="icon-park-solid:love-and-help" color="black" width="24" height="24" />
        <Link to='/' style={{ textDecoration: 'none' }} className="txt-396">
          BookHelper
        </Link>

        
      </div>
      <Menu/>
    </div>
    
  </div>
  )
}
