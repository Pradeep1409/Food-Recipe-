import React from 'react';
 
import Home from './Component/Home';
import About from './Component/About';

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Contact from './Component/Contact';
import Guide from './Component/Guide';
import Cardrecipe from './Component/Cardrecipe';

function App() {
  return (
    <BrowserRouter>
    {/* <Header/> */}
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/:Mealid" element={<Cardrecipe/>} />
        <Route exact path="/about" element={<About/>} />
        {/* <Route exact path="/guide" element={<Guide/>} /> */}
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
