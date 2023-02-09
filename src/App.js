import React from "react";
import {BrowserRouter ,Routes ,Route} from 'react-router-dom';
import './index.css'
import './App.css'

// Import Files
import Navbar from "./Components/Navbar/Navbar";
import Home from '../src/Components/Home/Home';
import About from "../src/Components/About/About";
import Contact from "../src/Components/Contact/Contact";
import Login from "../src/Components/Login/Login";

function App() {
  return(
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;