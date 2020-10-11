import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Me from "../image/me2.jpg";
import "./styles.css";

function About() {
  return (
    <div className="about">
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <img src={Me} className="image"/>
            <br/>
            <br/>
            <p>My name is Sulada Sudjai. I am 29 years old. I am Thai And come from Thailand.</p>
            <p>I live in Los Angeles, California. I have been here for 3 years.</p>
            <br/>
            <p>I graduated bachelor's degree in Computer science from Maejo University, Thailand</p>
            <p>I have been working about my profession for 2 years.</p>
            <p>I like to learn a new thing and new experience. Then I came to the USA to study more and learn different culture.</p>
            <br/>
            <p>I Love Korean BBQ. I Love Sushi. Salmon is the best!!. But, Thai food is always number one in my heart forever.</p>
            <br/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
