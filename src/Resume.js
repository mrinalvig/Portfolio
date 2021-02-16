import React from 'react';
import './Resume.css';
import file from './Resume.pdf';
import NavBar from './NavBar.js';

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state ={

    }
  }

  render() {
    return(
      <div id="resumePage">
        {/* <NavBar /> */}
        <img onClick={()=> window.open("https://i.ibb.co/hX7j0Mw/Resume.jpg", "_blank")} id="resumeImage" src="https://i.ibb.co/hX7j0Mw/Resume.jpg" />
        <div id="thing"></div>
      </div>
    );
  }
}

export default Resume;
