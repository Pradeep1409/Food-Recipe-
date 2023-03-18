import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';
import Header from './Component/Header';
import Home from './Component/Home';
import About from './Component/About';

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Contact from './Component/Contact';
import Guide from './Component/Guide';

function App() {
  return (
    <BrowserRouter>
    {/* <Header/> */}
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/guide" element={<Guide/>} />
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
