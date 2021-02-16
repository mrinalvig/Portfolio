import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home.js';
import Intro from './Intro.js';
import Particles from 'react-particles-js';
import Resume from './Resume.js';
import Skills from './Skills.js';
import NavBar from './NavBar.js';
import Game from './Game.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={

    }

  }

  render() {
    return(
      <div>
        <div id='particles'>
          <Particles
            params={{
              particles: {
                number: {
                  value: 7,
                  density: {
                    enable: true,
                    value_area: 50,
                  }
                },
                color: {
                  value: "#ffffff"
                },
                line_linked: {
                  color: "#ffffff",
                  width: .75
                },
                size: {
                  value: 4
                },
                move: {
                  speed: 1.7
                }
              },
            }}
          />
        </div>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/game" component={Game} />
            <Route path="/skills" component={Skills} />
            <Route path="/resume" component={Resume} />
            <Route path="/intro" component={Intro} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
