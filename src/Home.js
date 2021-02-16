import React from 'react';
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
              <img id="email" src={email} onClick={() => window.open('mailto:mrinalvig@hotmail.com')}/>
              <img id="githubLogoHome" onClick={()=> window.open("https://github.com/mrinalvig", "_blank")} src={github} />
            </div>
            <Link to="/intro">
                <img id ='arrow' src={arrow} />
            </Link>
            {/* <h2 id="about">I am a Full-Stack Developer who enjoys functionality and design, currently seeking my next professional opportunity. Technology has always had a grasp on my heart, so I'm always tinkering with new technologies. I love to program and create fun UI's for people to enjoy!</h2> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

