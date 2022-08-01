import React from "react";
import BackToTopBtn from "./components/BackToTopBtn";

// import components
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Skills from "./components/Skills";
import Team from "./components/Team";

import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div>
      <Banner />
      <Testimonials />
      <Skills />
      <Team />
      <Newsletter />
      <Contact />
      <Footer />
      <BackToTopBtn/>
    </div>
  );
};

export default App;
