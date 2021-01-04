import React from 'react';
import './Join.css';
import {Container,Row,Col} from 'reactstrap'
class JoinComponent extends React.Component {
  render() {
    return (
      // <div class="section">
        
      //   <div class="image-left image">
      //     <img
      //       src={require('../res/main elements/central.png')}
      //       height="100%"
      //       alt="Central"
      //     />
      //   </div>
      //   <div class="text text-left">
      //     <div class="title">
      //       JOIN US
      //     </div>
      //     <div class="info">
      //       Having embarked on a journey through Lost Cities guided by nothing but Wanderlust, we have finally arrived at Madras Memoirs! 2019 presents you Saarang in its newest avatar, set to be more thrilling, splendid, and entertaining than ever before. Write to us a story of not more than 100 words of a day spent in a lost city of your choice, and get a chance to win exciting prizes.
      //     </div>
      //   </div>

      // </div>
      
      <div className="container">
        <div className="row1">
          <h1>join<br></br> us</h1>
        </div>
        <div className="row2">
          <h5>
          Having embarked on a journey through Lost Cities guided by nothing but Wanderlust,<br/> we have finally arrived at Madras Memoirs! 2019 presents you Saarang in its newest avatar, <br/>set to be more thrilling, splendid, and entertaining than ever before. Write to us a story of not<br/> more than 100 words of a day spent in a lost city of your choice, and get a chance to<br/> win exciting prizes.
          </h5>
        </div>

      </div>
    );
  }
}

export default JoinComponent;