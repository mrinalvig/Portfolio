import React from 'react';
import Particles from 'react-particles-js';
import NavBar from './NavBar.js';
import arrow from './arrow.png';
import './Home.css';
import {Link} from 'react-router-dom';
import github from './github.png';
import linkedin from './linkedin.png';
import email from './email.png';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state ={

    }
  }

  componentDidMount() {

  }

  render() {
    return(
      <div id="home">
        <div id="introBox">
          <h1 id="introLine1">Mrinal  Vig</h1>
          <h1 id="introLine2">Full Stack Web Developer</h1>
          <div id="bar" />
          <div id="checkWork">
            {/* <h1>Check out my work!</h1> */}
            <div id="myInfo">
              <img id="linkedin" onClick={()=> window.open("https://www.linkedin.com/in/mrinal-vig/", "_blank")} src={linkedin} />
              <img src={email} style={{top: "1vh", left: "2vw", margin: "auto", position: "relative", height: "5vh", width: "auto", filter: "brightness(0) invert(1)"}} />
              <img id="githubLogoHome" onClick={()=> window.open("https://github.com/mrinalvig", "_blank")} src={github} />
            </div>
            <Link to="/intro">
                <img id ='arrow' src={arrow} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
