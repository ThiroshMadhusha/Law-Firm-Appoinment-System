import React from "react";

// import components
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Team from "./components/Team";

import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div>
      <Banner />
      <Testimonials />
      <Skills />
      <Team/>
      <div className="h-[2000px"></div>
    </div>
  );
};

export default App;
