import React, {useState} from "react"
import "./style.css"
import { Link } from "react-router-dom"

export default function Menu() {

    const [isActive, setIsActive] = useState(false);
    const handleClick = event => {
        setIsActive(s => !s);
        event.preventDefault();
    };

    return(
        <>
        <div className='menu-btn-mid' onClick={handleClick} >
            <p className="txt-666">Menu</p>
        </div>


        <div className={!isActive ? 'menuWrapper-hide' : 'menuWrapper'}>

            <div className="menu-btn loc" onClick={handleClick} >
                <p className="txt-666">Close</p>
            </div>
            
            <div className="menuContainer">
                <div className="menu-item-wrapper">
                <Link to='/InputDocs' style={{ textDecoration: 'none' }} className="menu-item">Introduzir documentos</Link>
                </div>
                <div className="menu-item-wrapper">
                <Link to='/InputProds' style={{ textDecoration: 'none' }} className="menu-item">Introduzir produtos</Link>
                </div>
                <div className="menu-item-wrapper">
                <Link to='/Apuramento' style={{ textDecoration: 'none' }} className="menu-item">Apuramento de vendas</Link>
                </div>
                <div class="dropdown-text">
                    <span className="menu-item">Extras </span>
                    <div class="dropdown-text-content">
                        <div className="menu-item-wrapper">
                            <Link to='/Extras' style={{ textDecoration: 'none' }} className="menu-item">Editoras de um fornecedor</Link>
                        </div>
                    </div>
                </div>

                <div class="dropdown-text m-top" >
                    <span className="menu-item">Módulo Cliente</span>
                    <div class="dropdown-text-content">
                        <div className="dorpdown-item-wrapper">
                            <Link to='/ClientModule' style={{ textDecoration: 'none' }} className="menu-item">Adicionar autor</Link>
                        </div>
                        <div className="dorpdown-item-wrapper">
                            <Link to='/ClientModule' style={{ textDecoration: 'none' }} className="menu-item">Adicionar imagem</Link>
                        </div>
                        <div className="dorpdown-item-wrapper">
                            <Link to='/ClientModule' style={{ textDecoration: 'none' }} className="menu-item">Adicionar livros</Link>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
        </>
    )}