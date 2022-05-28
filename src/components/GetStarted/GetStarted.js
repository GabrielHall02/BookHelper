import React, { useState } from "react"
import { Link } from 'react-router-dom';
import "./style.css"
import vector1 from "./Vector1.svg"
import vector2 from "./Vector2.svg"
import vector3 from "./Vector3.svg"

export default function GetStarted() {
  const [hide, sethide] = useState(true)

  

    return(
    
    <div className="property-1-default flex-col-hstart-vstart">
    <div className="group-167 flex-col-hcenter">
    {hide ? <><div className="btn-s flex-row-vcenter" onClick={() => sethide(s => !s)}>
            <p className="btn-txt">Get Started</p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/j72me28kf3n-143%3A37?alt=media&token=715083eb-cb29-4f8e-ae47-1f913517c7ba"
              alt="Not Found"
              className="arrow-1" />
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
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/u0qysmr583e-143%3A67?alt=media&token=4c5d0397-99b4-400a-89a9-30b999372d6a"
              alt="Not Found"
              className="arrow-1"
            />
          </Link>
          <Link to="/InputProds" style={{ textDecoration: 'none' }} className="btn-m-1 flex-row-vcenter">
            <p className="btn-txt">Introduzir Produtos</p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/u0qysmr583e-143%3A73?alt=media&token=609b7532-fe75-4507-ac16-e91d35702f35"
              alt="Not Found"
              className="arrow-1"
            />
          </Link>
        </div>
        <div className="frame-27 flex-row-vcenter-hcenter">
          <Link to="/Apuramento" style={{ textDecoration: 'none' }} className="btn-m flex-row-vcenter">
            <p className="btn-txt">Apuramento de Vendas</p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/u0qysmr583e-143%3A81?alt=media&token=a7d98c93-b736-4834-a999-b5e208708637"
              alt="Not Found"
              className="arrow-1"
            />
          </Link>
          <Link to="/Extras" style={{ textDecoration: 'none' }} className="btn-m-1 flex-row-vcenter">
            <p className="btn-txt">Extras</p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/u0qysmr583e-143%3A87?alt=media&token=7f87f187-a1f6-4fdc-9550-c3208b4e36a7"
              alt="Not Found"
              className="arrow-1"
            />
          </Link>
        </div>
        <div className="frame-27 flex-row-vcenter-hcenter">
          <div className="btn-m flex-row-vcenter">
            <p className="btn-txt">Exportar Template Docs</p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/u0qysmr583e-143%3A94?alt=media&token=28525576-049c-47ed-8746-5bda55aba52d"
              alt="Not Found"
              className="arrow-1"
            />
          </div>
          <div className="btn-m-1 flex-row-vcenter">
            <p className="btn-txt">Exportar Template Prods</p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/u0qysmr583e-143%3A100?alt=media&token=a2db2e2a-229c-4a9b-a347-eae81943102c"
              alt="Not Found"
              className="arrow-1"
            />
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
