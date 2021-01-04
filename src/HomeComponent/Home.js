import React from 'react';
import './Home.css';

import { Row, Col, Container } from 'reactstrap'

class HomeComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row1">
          <h1>namma<br></br>chennai</h1>
        </div>
        <div className="row2">
          <h5>
          Madras has it all; from forests to forts, dramas and droughts, massive malls, parties and an IT city. <br/>
          Incredible people, cuisine, events, festivals and fests, and yet overwhelming tranquility.<br/>
          With a careful blend of modern and conservative, with a hustle of a hundred stories and bustle of busy <br/> beaches, Madras has her place in each of our hearts.<br/>
          After all, it is Namma Chennai.<br/>
          </h5>
        </div>

      </div>
      

      /*<Container className="home-container">
        <Row className="justify-content-around responsiveness-home">
        <Col sm="7" md="5" lg="5" xs="7" className="align-center-home">
              <Row className="justify-content-center borderline">
                <h1 className="nammatext">namma</h1>
              </Row>
              <Row className="justify-content-center borderline bottomborder">
                <h1 className="nammatext">chennai</h1>
              </Row>
          </Col>
          <Col sm="12" md="5" lg="5" xs="12" className="align-center-home">
            
            <Row className="info-home">
              Madras has it all; from forests to forts, dramas and droughts, massive malls, parties and an IT city.< br />
              Incredible people, cuisine, events, festivals and fests, and yet overwhelming tranquility.<br />
              With a careful blend of modern and conservative, with a hustle of a hundred stories and bustle of busy beaches, Madras has her place in each of our hearts.
           <br />
            </Row>
          </Col>
        </Row>
      </Container>*/
    )
  }
}

export default HomeComponent;