import React from 'react';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Skills from './Components/Skills/Skills.jsx';
import Education from './Components/Education/Education.jsx';
import Contact from './Components/Contact/Contact.jsx';

const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <div className='mb-0'><Hero/></div>
      <Skills/>
      {/* <Education/> */}
      <Contact/>
    </div>
  )
}
export default App;