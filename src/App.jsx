import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Tech from "./Components/Tech";

import Feedbacks from "./Components/Feedbacks";
import Contact from "./Components/Contact";
import AnimatedCursor from "react-animated-cursor";
import Works from "./Components/Works";

// import {
//   About,
//   Contact,
//   Experience,
//   Projects,
//   Feedbacks,
//   Hero,
//   Navbar,
//   Tech,
//   Stacks,
//   Works,
//   StarsCanvas,
// } from "./Components";

function App() {
  return (
    <BrowserRouter>
      <AnimatedCursor
        innerSize={18}
        outerSize={18}
        color="255, 255, 255"
        outerScale={8}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />

      <div className="relative z-0 bg-primary">
        <div className="  bg-center bg-cover bg-hero-pattern bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Feedbacks />
        <Tech />
        <Works />

        <Feedbacks />
        <div className="z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
