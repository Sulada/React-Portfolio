import React from "react";
import Hero from "../components/Hero";
import view from "../image/view1.jpg";

function About() {
  return (
    <div>
      <Hero backgroundImage={view}>
        <h1>SULADA SUDJAI</h1>
        <h2>Portfolio</h2>
      </Hero>
    </div>
  );
}

export default About;
