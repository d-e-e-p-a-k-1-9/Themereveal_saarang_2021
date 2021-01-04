import React from 'react'
import './About.css'
import { Row, Col, Container } from 'reactstrap'
import logo  from '../res/saaranglogo/final_logo.png';
import tv  from '../res/saaranglogo/television.svg';
import cam from '../res/saaranglogo/camera.svg';

class AboutComponent extends React.Component {
  render() {
    return <div className="cont" >
      
      
      <img id="img3" src= { logo } height = '45%' width = '45%' />
      
      <img id="img2" src= {tv} height= "15%" width = "15%"  />
    
    </div>
  }
}

export default AboutComponent
