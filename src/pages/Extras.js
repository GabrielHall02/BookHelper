import React,{useState, setText} from 'react'
import NavBar from '../components/NavBar'
import Header1 from '../components/Header1/Header1'
import SubHeader1 from '../components/Subheader1/Subheader1'
import Editoras from '../components/Editoras/Editoras'
import vector1 from "../vectors/Vector5.svg"
import vector2 from "../vectors/Vector6.svg"
import './style.css'  

const Extras = () => {

  const [hide, setHide] = useState(true);
  const [text, setText] = useState('');
    const handleChange = event => {
        setText(event.target.value);
        const message = event.target.value;
        console.log(message);
        if(String(message)==="Leya"){
            setHide(false)
        }else{
            setHide(true)
        }
    };

  return (
    <>
    <NavBar />
    <div className='container-mid'>
    <Header1 text={"Extras"}/>
    <SubHeader1 text={"Editoras de um fornecedor"} />
    <div className='input-section move-up'>
      <input onChange={handleChange} className="text-input" type="text" placeholder="Fornecedor"></input>
    </div>
    <Editoras text={!hide? "ExtraContainer" : "ExtraContainer-hide"}/> 
    </div>
    <div class="vectors-wrapper">
      <img src={vector1} alt="No vector" className={hide? "extras-vector1" : "extras-vector1-down"} />
      <img src={vector2} alt="No vector" className={hide? "extras-vector2" : "extras-vector2-down"} />

    </div>
    
    </>
  )
}

export default Extras