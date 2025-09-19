import React from "react";
import Hero from "./Hero";
import About from "./About";    
import Posts from "./Posts";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Posts />
      <Contact />
    </div>
  );
};

export default Home;
