import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Me from "../image/me5.jpg";
import "./styles.css";

function About() {
  return (
    <div className="contact">
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>CONTACT</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <img src={Me} className="image"/>
            <br/>
            <br/>
            <p>Email : <a href="mailto: hibino.aoom@gmail.com">hibino.aoom@gmail.com</a></p>
            <p>Github : @Sulada</p>
            <p>LinkeIn : <a href="www.linkedin.com/in/sulada-sudjai-0075bb118">www.linkedin.com/in/sulada-sudjai-0075bb118</a></p>
            <p>Facebook : Hibinoo Hararuya</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
