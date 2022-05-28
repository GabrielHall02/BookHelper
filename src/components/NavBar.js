import React from "react"
//import NavBar from "./components/NavBar.js"
import "./style.css"
import DropDown from "./DropDown"

const items = [
  {
    id: 1,
    value: 'Introduzir documentos',
  },
  {
    id: 2,
    value: 'Introduzir produtos',
  },
  {
    id: 3,
    value: 'Apuramento de vendas',
  },
  {
    id: 4,
    value: 'Extras',
  },

  {
    id: 3,
    value: 'Módulo Cliente',
  },
];

export default function NavBar() {
  return (
    <div className="nav-bar">
    <div className="group-964 flex-row">
      <div className="logo flex-row">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/aj42ydq29ct-143%3A27?alt=media&token=c7c4a190-a966-435e-bd13-10f44499d931"
          alt="Not Found"
          className="open-book-1"
        />
        <p className="txt-396">BookHelper</p>
      </div>
      <div className="menu-btn">
        <DropDown className = "aa" title="Menu" items={items}/>
      </div>
    </div>
  </div>
  )
}
