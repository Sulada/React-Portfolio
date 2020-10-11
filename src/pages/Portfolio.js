import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

import Passgen from "../image/project/passwordgenerator.jpg";
import Dayplan from "../image/project/dayplan.png";
import Project1 from "../image/project/project1.png";
import Project2 from "../image/project/project2.png";
import Project3 from "../image/project/project3.png";
import Burger from "../image/project/burger.png";
import Employeetrack from "../image/project/employeetrack.png";
import "./styles.css";

function Portfolio() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
      <Row>
          <Col size="md-12">
            <h1 className="port">Portfolio</h1>
          </Col>
        </Row>
        <div className="passgen">
          <br/>
          <br/>
          <img className="imagesize" src={Passgen} />
          <br/>
          <br/>
          <p>Exercise: Password Generator</p>
          <p>GitHub Repo: <a href="https://github.com/Sulada/PasswordGenerator" target="_blank">https://github.com/Sulada/PasswordGenerator</a></p>
        </div>
        <div className="passgen">
          <br/>
          <img className="imagesize" src={Dayplan} />
          <br/>
          <br/>
          <p>Exercise: Day Planner</p>
          <p>GitHub Repo: <a href="https://github.com/Sulada/homework.Work-Day-Scheduler" target="_blank">https://github.com/Sulada/homework.Work-Day-Scheduler</a></p>
          <p>GitHub io: <a href="https://sulada.github.io/homework.Work-Day-Scheduler/" target="_blank">https://sulada.github.io/homework.Work-Day-Scheduler/</a></p>
        </div>
        <div className="passgen">
          <br/>
          <img className="imagesize" src={Burger} />
          <br/>
          <br/>
          <p>Exercise: Burger</p>
          <p>GitHub Repo: <a href="https://github.com/Sulada/Burger" target="_blank">https://github.com/Sulada/Burger</a></p>
          <p>Heroku Deploy: <a href="https://desolate-dawn-70373.herokuapp.com/" target="_blank">https://desolate-dawn-70373.herokuapp.com/</a></p>
        </div>
        <div className="passgen">
          <br/>
          <img className="imagesize" src={Employeetrack} />
          <br/>
          <br/>
          <p>Exercise: Employee Tracker</p>
          <p>GitHub Repo: <a href="https://github.com/Sulada/Employee_Tracker" target="_blank">https://github.com/Sulada/Employee_Tracker</a></p>
          <p>Video Link: <a href="https://drive.google.com/file/d/1yl02QkpWtLCTicRvcrI8EtF6CQ51CL4A/view" target="_blank">https://drive.google.com/file/d/1yl02QkpWtLCTicRvcrI8EtF6CQ51CL4A/view</a></p>
        </div>
        <div className="passgen">
          <br/>
          <img className="imagesize" src={Project1} />
          <br/>
          <br/>
          <p>Project 1: Trek</p>
          <p>GitHub Repo: <a href="https://github.com/Sulada/Project1_Trek" target="_blank">https://github.com/Sulada/Project1_Trek</a></p>
        </div>
        <div className="passgen">
          <br/>
          <img className="imagesize" src={Project2} />
          <br/>
          <br/>
          <p>Project 2: Afterly</p>
          <p>GitHub Repo: <a href="https://github.com/Sulada/Project2_Afterly" target="_blank">https://github.com/Sulada/Project2_Afterly</a></p>
          <p>Heroku Deploy: <a href="https://sheltered-escarpment-16015.herokuapp.com/" target="_blank">https://sheltered-escarpment-16015.herokuapp.com/</a></p>
        </div>
        <div className="passgen">
          <br/>
          <img className="imagesize" src={Project3} />
          <br/>
          <br/>
          <p>Project 3: Smood</p>
          <p>GitHub Repo: <a href="https://github.com/Sulada/Project3_Smood" target="_blank">https://github.com/Sulada/Project3_Smood</a></p>
          <p>Heroku Deploy: <a href="https://projectsmood.herokuapp.com/" target="_blank">https://projectsmood.herokuapp.com/</a></p>
        </div>
      </Container>
    </div>
  );
}

export default Portfolio;
