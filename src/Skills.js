import React from 'react';
import './Skills.css';
import NavBar from './NavBar';

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state ={

    }

  }

  render() {
    return(
      <div id="skillsPage">
        {/* <NavBar /> */}
        <div id="skillsBlock">
          <div id="skillsContainer">
            <h2 id="skillsTag">JavaScript(es5 & es6)</h2>
            <h2 id="skillsTag">HTML + CSS</h2>
            <h2 id="skillsTag">React</h2>
            <h2 id="skillsTag">React Native</h2>
            <h2 id="skillsTag">jQuery</h2>
            <h2 id="skillsTag">Node.js</h2>
            <h2 id="skillsTag">Express</h2>
            <h2 id="skillsTag">PostgreSQL</h2>
            <h2 id="skillsTag">MySQL</h2>
          </div>
          <div id="skillsContainer2">
            <div id="skillsBar">
              <div id="load1" />
            </div>
            <div id="skillsBar">
              <div id="load1" />
            </div>
            <div id="skillsBar">
              <div id="load1" />
            </div>
            <div id="skillsBar">
              <div id="load2" />
            </div>
            <div id="skillsBar">
              <div id="load4" />
            </div>
            <div id="skillsBar">
              <div id="load1" />
            </div>
            <div id="skillsBar">
              <div id="load1" />
            </div>
            <div id="skillsBar">
              <div id="load3" />
            </div>
            <div id="skillsBar">
              <div id="load2" />
            </div>
          </div>
          <div id="skillsContainer">
            <h2 id="skillsTag">Git</h2>
            <h2 id="skillsTag">npm</h2>
            <h2 id="skillsTag">E-Commerce</h2>
            <h2 id="skillsTag">Adobe Photoshop</h2>
            <h2 id="skillsTag">Sony Vegas</h2>
            <h2 id="skillsTag">RESTful API Development</h2>
            <h2 id="skillsTag">C++</h2>
            <h2 id="skillsTag">Python</h2>
          </div>
          <div id="skillsContainer2">
            <div id="skillsBar">
              <div id="load1" />
            </div>
            <div id="skillsBar">
              <div id="load1" />
            </div>
            <div id="skillsBar">
              <div id="load2" />
            </div>
            <div id="skillsBar">
              <div id="load2" />
            </div>
            <div id="skillsBar">
              <div id="load4" />
            </div>
            <div id="skillsBar">
              <div id="load1" />
            </div>
            <div id="skillsBar">
              <div id="load3" />
            </div>
            <div id="skillsBar">
              <div id="load4" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
