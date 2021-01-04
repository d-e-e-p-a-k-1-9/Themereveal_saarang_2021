import React, { useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import { Parallax, ParallaxLayer } from 'react-spring/addons'
import HomeComponent from './HomeComponent/Home'
import AboutComponent from './AboutComponent/About'
import ContactComponent from './ContactComponent/Contact'
import JoinComponent from './JoinComponent/Join'
import Img from './res/saaranglogo/CamperVan.svg'
import bg from './res/saaranglogo/1x/bg-100.jpg'
import cam from './res/saaranglogo/camera.svg'
import './styles.css'
import fullbg from './res/saaranglogo/fullbg.jpg'
import back from './res/saaranglogo/bg2.jpg'
import phone from './res/saaranglogo/phone.svg'
// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

class App extends React.Component {
  render() {
    return (
      
      <Parallax ref={(ref) => (this.parallax = ref)} pages={4} style={{backgroundImage: `URL(${ fullbg})`, backgroundSize: 'cover' }}> 
       
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#709FB0' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#A0C1B8' }} />
        <ParallaxLayer offset={3} speed={1} syle={{ backgroundColor: '#F4EBC1' }} />
        <ParallaxLayer offset={0} speed={2} factor={3} style={{ backgroundImage:  `URL(${ back })`, backgroundSize:'100%'}} />

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
         
          <img className="van" src={Img} alt="retrovan" />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset = {0.0} speed = {-1.0} style ={{opacity:0.9}}>
          <img src = {cam}  style={{ width: '15%', marginRight: '70%',position: 'absolute',  bottom: '-10%'}}/>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
         
          <img className="ph" src={ phone } alt="gramophone" />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>

        

        <ParallaxLayer
          className="busparallax"
          offset={0}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(1)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <AboutComponent />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(2)}

          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HomeComponent />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.1}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => this.parallax.scrollTo(3)}>
          <JoinComponent />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.4}
          onClick={() => this.parallax.scrollTo(0)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ContactComponent />
        </ParallaxLayer>
      </Parallax>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
