import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import view from "../image/view1.jpg";
// import "./Home.css";

function About() {
  return (
    <div>
      <Hero backgroundImage={view}>
        <h1>SULADA SUDJAI</h1>
        <h2>Portfolio</h2>
      </Hero>
      {/* <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <div className="welcome">
            <p>Welcome To Sulada Portfolio!</p>
            </div>
          </Col>
        </Row>
        </Container> */}
    </div>
  );
}

export default About;
