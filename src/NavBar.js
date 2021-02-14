import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
      super(props);
      this.state ={

      }

    }

    render() {
      return(
        <div id='navBar'>
          <div id="navSelection">
            <Link id="homeLink" to="/">
              <button id="homePick" >HOME</button>
            </Link>
            <Link id="applicationsLink" to="/intro">
              <button id="applications" >APPLICATIONS</button>
            </Link>
            <Link id="resumeLink" to="/">
              <button id="resume" >RESUME</button>
            </Link>
          </div>
        </div>
      );
    }
  }

  export default NavBar;
