import { BrowserRouter as Router } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from "./components";

function App() {
  return (
    <>
    <Router>
      <div>
        {/* position: relative,
        background-color: #000 */}
        <div>
          {/* bg-center, bg-norepeat, bg-cover */}
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
          {/* position: relative */}
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </Router>
    </>
  )
}

export default App
