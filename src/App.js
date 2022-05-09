import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './Pages/Index.js';
import { useEffect } from 'react';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Work from './Pages/Work';
import Title from './Components/Title';
import NavBar from './Components/NavBar';

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "black";
  }, []);
  return (<>
    <Title/>
    <NavBar/>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/work" element={<Work/>} />


        

       
        </Routes>
        </BrowserRouter>
        </>
   
  );
}

export default App;
