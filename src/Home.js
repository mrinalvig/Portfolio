import React from 'react';
import Particles from 'react-particles-js';
import NavBar from './NavBar.js';
import arrow from './arrow.png';
import './Home.css';
import {Link} from 'react-router-dom';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state ={

    }
  }

  render() {
    return(
      <div>
        <div id="introBox">
          <h1 id="introLine1">Hello, my name is Mrinal Vig</h1>
          <h1 id="introLine2">and I'm a Full-Stack Web Developer.</h1>
          <div id="checkWork">
            <h1>Check out my work!</h1>
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
