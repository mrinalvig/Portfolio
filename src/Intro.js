import React from 'react';
import NavBar from './NavBar.js';
import Particles from 'react-particles-js';
import './App.css';

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state ={

    }
  }

  render() {
    return(
      <div id="intro">
        <NavBar />
        <div>
          <div /> <div /> <div />
        </div>
      </div>
    );
  }
}

export default Intro;
