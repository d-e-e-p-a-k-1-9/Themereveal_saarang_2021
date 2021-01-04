import React from 'react';
import './Contact.css';
import {Row,Col} from 'reactstrap'
class ContactComponent extends React.Component {
  render() {
    return (
      <div className="fill">
        <div className="date">
          <div>
            8<sup>th</sup> to 12<sup>th</sup> January 2020
          </div>
        </div>
        {/* <div className="social">
          <div className="pre"><p>to know more about us</p></div>
          <div className="panel social-links">
          
          </div>
        </div> */}
        <div className="social">
            <Row className="contact-text justify-content-center align-items-center">to know more about us</Row>
            <Row className="justify-content-around icons">
            <a rel="noopener noreferrer"  target="_blank" href="https://www.facebook.com/saarangiitm/?ref=br_rs"><i className="fab fa-facebook-f social2 fb"></i></a>
          <a rel="noopener noreferrer" target="_blank"  href="http://twitter.com/Saarang_IITM"><i className="fab fa-twitter social2 twitter"></i></a>
          <a rel="noopener noreferrer" target="_blank"  href="https://www.instagram.com/saarang_iitmadras/"><i className="fab fa-instagram social2 instagram"></i></a>
          <a rel="noopener noreferrer" target="_blank"  href="https://www.youtube.com/user/iitmsaarang"><i className="fab fa-youtube social2 youtube"></i></a>
          {/* <a rel="noopener noreferrer" target="_blank"  href="https://in.linkedin.com/in/saarangiitmadras"><i className="fab fa-linkedin socail2"></i></a> */}
            </Row>
        </div>
      </div>
    );
  }
}

export default ContactComponent;