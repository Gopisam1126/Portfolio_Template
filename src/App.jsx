/* eslint-disable no-unused-vars */
import { BrowserRouter as Router } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from "./components";

function App() {
  return (
    <>
    <Router>
      <div>
        <Hero/>
        <Navbar/>
      </div>
      <div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
      </div>
      <div>
        <Contact/>
        <StarsCanvas/>
      </div>
    </Router>
    </>
  )
}

export default App
