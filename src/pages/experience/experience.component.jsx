import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_Genpact from "../../assets/img/experience/Genpact-Logo.wine.svg";
import L_MASCORP from "../../assets/img/experience/mascorp.svg";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_Genpact} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Process Developer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong>Duration:</strong> October 2015 - March 2020
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                    <li className="text-center" style={{listStyle:'none'}}>Worked as <strong>QA &amp;Trainer</strong> for Google's critical escalation team</li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                  </Card.Text>
                  
                </div>
              </Card.Body>
              
            </Card>
          </Tilt>
          <Tilt>
          <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_MASCORP} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Senior Customer Analyst</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong>Duration:</strong> June 2020 - present
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                     
                      <li className="text-center" style={{listStyle:'none'}}> Worked as <strong>SAP Basis Consultant </strong> providing technical support on SAP Basis systems including establishing standards and requirements, evaluating and directing enhancements and implementing solutions for performance monitoring, and system configuration,design and implementation
                      </li>
                      

                    </ul>
                  </Card.Text>
                  
                </div>
              </Card.Body>
              
            </Card>
          </Tilt>
         
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;