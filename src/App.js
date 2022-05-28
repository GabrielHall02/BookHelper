import React, { useEffect }  from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from "./pages/Home"
import InputDocs from "./pages/InputDocs"
import InputProds from "./pages/InputProds"
import Apuramento from "./pages/Apuramento"
import ClientModule from "./pages/ClientModule"
import Extras from "./pages/Extras"
import DropDown from "./components/DropDown"


function App() {
  useEffect(() => {document.body.style.overflow = "hidden";}, []);
  return(
    

    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/InputDocs" exact element={<InputDocs />} />
        <Route path="/InputProds" exact element={<InputProds/>} />
        <Route path="/Apuramento" exact element={<Apuramento/>} />
        <Route path="/ClientModule" exact element={<ClientModule/>} />
        <Route path="/Extras" exact element={<Extras/>} />
      </Routes>
    </Router>
  );
}

export default App;
