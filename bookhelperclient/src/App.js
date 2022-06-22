import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"

function App() {
  useEffect(() => {document.body.style.overflow = "hidden";}, []);
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;
