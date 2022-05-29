import React, {useState} from "react"
//import NavBar from "./components/NavBar.js"
import { Link } from 'react-router-dom';
import "./style.css"
import DropDown from "./DropDown"
import { Icon } from '@iconify/react';


export default function NavBar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
      setDropdown(true);
    
  };

  const onMouseLeave = () => {
      setDropdown(false);
    
  };

  return (
    <div className="nav-bar">
    <div className="group-964 flex-row">
      <div className="logo flex-row">
        
      <Icon icon="icon-park-solid:love-and-help" color="black" width="24" height="24" />
        <Link to='/' style={{ textDecoration: 'none' }} className="txt-396" onClick={closeMobileMenu}>
          BookHelper
        </Link>
      </div>
      
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}>
            <Link
            to='/'>
              Menu
            </Link>
            {dropdown && <DropDown />}
          </li>
          
        </ul>
    </div>
  </div>
  )
}
