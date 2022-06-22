import React,{useState,useEffect} from "react"
import "./style.css"

/*$(function() {
    $( "#button" ).click(function() {
      $( "#button" ).addClass( "onclic", 250, validate);
    });
  
    function validate() {
      setTimeout(function() {
        $( "#button" ).removeClass( "onclic" );
        $( "#button" ).addClass( "validate", 450, callback );
      }, 2250 );
    }
      function callback() {
        setTimeout(function() {
          $( "#button" ).removeClass( "validate" );
        }, 1250 );
      }
    });*/

export default function ImportBtn() {
    const [state, setState] = useState(1);

    useEffect(() => {
        const timer = setTimeout(() => {
          console.log('This will run after n ms!')
        }, 1000);
        return () => clearTimeout(timer);
      }, []);

    const handleClick = event => {
        event.preventDefault();
        if (state === 1){
            setState(2);
            setTimeout(() => {
                setState(3);
                console.log('This will run after 250 ms!')
            }, 2650);
        }
        if (state === 3){
          setState(1);
        }
    }

    
    return (
        
        <button className={state===1 ? "botao-importar" : state===2 ? "onclic" : state === 3 ? "validate" : "botao-importar"} id="button" onClick={handleClick}></button>
    )
}

