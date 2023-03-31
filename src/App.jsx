import React from "react"
import { BrowserRouter } from "react-router-dom"
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  // Tech,
  Works,
  StarsCanvas,
} from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary '>
        <div className=' bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className='bg-[#1A1A1A] w-full h-full '>
          <Experience />
        </div>
        {/* <Tech /> */}
        <div className='bg-[#161618] w-full h-full'>
          <Works />
        </div>
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
