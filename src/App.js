import React from 'react';
import About from './components/About'
import Card from './components/Card'
import Footer from './components/Footer'
import Stack from './components/Stack'
import ContactMe from './components/contact'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() 
{
  useEffect(() => 
  {
    AOS.init({
      once: true,
    })
  })
  
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <div data-aos='fade-down' data-aos-duration='800'>
        <Card />
      </div>

      <div data-aos='fade-up' data-aos-duration='800' data-aos-delay='400'>
        <About />
        
      </div>

        <Stack />
        <ContactMe />
        <Footer />

      </div>
  )
}
export default App;