import React, { useState } from "react"
import { Link } from 'react-router-dom';
import "./style.css"
import vector1 from "./Vector1.svg"
import vector2 from "./Vector2.svg"
import vector3 from "./Vector3.svg"
import { Icon } from '@iconify/react';

export default function GetStarted() {
  const [hide, sethide] = useState(true)

  

    return(
    
    <div className="property-1-default flex-col-hstart-vstart">
    <div className="group-167 flex-col-hcenter">
    {hide ? <><div className="btn-s flex-row-vcenter" onClick={() => sethide(s => !s)}>
            <p className="btn-txt">Get Started</p>
            <Icon icon="akar-icons:arrow-right" color="white" width="30" height="30" />
          </div><div class="vector-wrapper">
              <img src={vector1} alt="No vector" class="home-vector1" />
              <img src={vector2} alt="No vector" class="home-vector2" />
              <img src={vector3} alt="No vector" class="home-vector3" />
            </div></> : null}
      {!hide ? <div className="property-1-variant-2 flex-col-hstart-vstart">
      <div className="dashboard flex-col-hcenter">
        <div className="frame-27 flex-row-vcenter-hcenter">
          <Link to="/InputDocs" style={{ textDecoration: 'none' }} className="btn-m flex-row-vcenter" >
            <p className="btn-txt">Introduzir Documentos</p>
            <Icon icon="akar-icons:arrow-right" color="white" width="30" height="30" />
          </Link>
          <Link to="/InputProds" style={{ textDecoration: 'none' }} className="btn-m-1 flex-row-vcenter">
            <p className="btn-txt">Introduzir Produtos</p>
            <Icon icon="akar-icons:arrow-right" color="white" width="30" height="30" />
          </Link>
        </div>
        <div className="frame-27 flex-row-vcenter-hcenter">
          <Link to="/Apuramento" style={{ textDecoration: 'none' }} className="btn-m flex-row-vcenter">
            <p className="btn-txt">Apuramento de Vendas</p>
            <Icon icon="akar-icons:arrow-right" color="white" width="30" height="30" />
          </Link>
          <Link to="/Extras" style={{ textDecoration: 'none' }} className="btn-m-1 flex-row-vcenter">
            <p className="btn-txt">Extras</p>
            <Icon icon="akar-icons:arrow-right" color="white" width="30" height="30" />
          </Link>
        </div>
        <div className="frame-27 flex-row-vcenter-hcenter">
          <Link to="test.txt" style={{ textDecoration: 'none' }} className="btn-m flex-row-vcenter" download="test.txt">
            <p className="btn-txt">Exportar Template Docs</p>
            <Icon icon="akar-icons:arrow-right" color="white" width="30" height="30" />
          </Link>
          <div className="btn-m-1 flex-row-vcenter">
            <p className="btn-txt">Exportar Template Prods</p>
            <Icon icon="akar-icons:arrow-right" color="white" width="30" height="30" />
          </div>
        </div>
        <Link to="/ClientModule" style={{ textDecoration: 'none' }} className="btn-m-2">
          <p className="btn-txt">Módulo Cliente</p>
        </Link>
      </div>
    </div> : null}
      
      


    </div>
  </div>
  
  )
}
