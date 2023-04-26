import React from "react";
import { BrowserRouter } from "react-router-dom";

import {
  Hero, Navbar, About, Tech, Experience, Works, Contact, EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas, Steps
} from './components'

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary"> 
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        {/* <Steps/> */}
        <Experience/>
        <Tech/>
        <Works/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App