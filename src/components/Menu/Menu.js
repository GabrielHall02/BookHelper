import React, {useState, useRef, useEffect} from "react"
import "./style.css"
import { Link } from "react-router-dom"

export default function Menu() {

    const [isActive, setIsActive] = useState(false);

    

    const useOutsideClick = (callback) => {
        const ref = useRef();
      
        useEffect(() => {
          const handleClick = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
          };
      
          document.addEventListener('click', handleClick);

      
          return () => {
            document.removeEventListener('click', handleClick);
          };
        }, [ref]);
      
        return ref;
      };

      const handleClick = event => {
        setIsActive(false);
        event.preventDefault();
    };

      const handleClickOutside = () => {
        console.log("clicked outside");
        if (!isActive) {
            setIsActive(s => !s);
        }
      };

      const ref = useOutsideClick(handleClickOutside);


    
    

    

    return(
        <>
        <div className='menu-btn-mid' onClick={handleClick} >
            <p className="txt-666">Menu</p>
        </div>


        <div ref={ref} className={isActive ? 'menuWrapper' : 'menuWrapper-hide'}>

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