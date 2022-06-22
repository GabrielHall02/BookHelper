import React,{useState} from 'react'
import NavBar from "../components/NavBar.js" 
import Header from "../components/Header1/Header1.js"
import BtnS from '../components/BtnS/BtnS.js';
import vector1 from "../components/GetStarted/Vector1.svg"
import vector2 from "../components/GetStarted/Vector2.svg"
import vector3 from "../components/GetStarted/Vector3.svg"
import { Link } from 'react-router-dom';
import BtnM from '../components/BtnM/BtnM.js';




const Home = () => {

  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);

    console.log('value is:', event.target.value);
  };

  const handleSubmit= event => {
    console.log('A name was submitted: ' + message);
    event.preventDefault();
  }
  
  const [isActive, setIsActive] = useState(true);
  const handleClick = event => {

    if (message === '123456789'){
      setIsActive(false);
    }else{
      alert('Invalid API KEY: ' + message);
    }
    event.preventDefault();
  };

  return (
    <>
    <NavBar />
    <div className="hero_section flex-col-center">
      <Header text="Inventory management made easy" />
      <form className='flex-col-center' onSubmit={handleSubmit}>
      <input className="text-input-S" type="text" placeholder="API KEY:" value={message} onChange={handleChange}></input>
      <div onClick={handleClick} className={isActive ? '' : 'getStarted-btn-out'}><BtnS text="Get Started" /></div>
      </form>
      
      
    </div>
    <div class="vector-wrapper">
      <img src={vector1} alt="No vector" className={isActive ? 'home-vector1' : 'home-vector1-out'} />
      <img src={vector2} alt="No vector" className={isActive ? 'home-vector2' : 'home-vector2-out'} />
      <img src={vector3} alt="No vector" className={isActive ? 'home-vector3' : 'home-vector3-out'}  />
    </div>
    
    <div className={isActive ? 'dispNone' : 'dashboard'}>
    <div className='flex-col-center'>
      <div className='frame flex-row-vcenter-hspbetween'>
        <Link to="/InputDocs" style={{ textDecoration: 'none' }}>
          <BtnM text="Introduzir Documentos" />
        </Link>
        <Link to="/InputProds" style={{ textDecoration: 'none' }}>
          <BtnM text="Introduzir Produtos" />
        </Link>
      </div>
      <div className='frame flex-row-vcenter-hspbetween'>
        <Link to="/Apuramento" style={{ textDecoration: 'none' }}>
          <BtnM text="Apuramento de Vendas" />
        </Link>
        <Link to="/Extras" style={{ textDecoration: 'none' }}>
          <BtnM text="Editoras de um fornecedor" />
        </Link>
      </div>
      <div className='frame flex-row-vcenter-hspbetween'>
          <BtnM text="Exportar Template Docs" />
          <BtnM text="Exportar Template Prods" />
      </div>
      <Link to="/ClientModule" style={{ textDecoration: 'none' }}>
        <BtnM text="Módulo Cliente" />
      </Link>
      </div>
    </div>


    </>
  )
}

export default Home