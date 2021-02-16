import React from 'react';
import NavBar from './NavBar.js';
import Particles from 'react-particles-js';
import './Intro.css';
import ReactPlayer from 'react-player';
import github from './github.png';
import {Link} from 'react-router-dom';

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state ={

    }
  }

  render() {
    return(
      <div id="intro">
        {/* <NavBar /> */}
        <h1 id="introHeader" >Check out some of my projects!</h1>
        <div id="previewContainer" >
          <div id="preview1">
            <ReactPlayer width="100%" height="100%" id="player1" url='https://www.youtube.com/watch?v=T9oSWhWbRVo&ab_channel=RussellEsperanza' />
          </div>
          <div id="preview2">
            <ReactPlayer width="100%" height="100%" id="player1" url='https://www.youtube.com/watch?v=VesPoangahE&ab_channel=MKOVamv' />
          </div>
          <div id="preview3">
            <ReactPlayer width="100%" height="100%" id="player1" url='https://www.youtube.com/watch?v=2HlSbJodyhY&ab_channel=MKOVamv' />
          </div>
        </div>
        <div id="descriptionContainer">
          <div id="description1">
            <img onClick={()=> window.open("https://github.com/know-it-alls/KnowItAll", "_blank")} id="githubLogo" src={github} style={{top: "1vh", left: "0vw", margin: "auto", position: "relative", height: "5vh", width: "auto", filter: "brightness(0) invert(1)"}} />
            {/* <td onClick={()=> window.open("https://github.com/know-it-alls/KnowItAll", "_blank")}>text</td> */}
            <h2  style={{cursor:'pointer'}} onClick={()=> window.open("https://github.com/know-it-alls/KnowItAll", "_blank")} id="github1">https://github.com/know-it-alls/KnowItAll </h2>
            <p id="paragraph1">
              This is a demo of the IOS and Android based trivia game, "Know it All". Using technologies such as React Native, Android Studio, Node.js, and the Open Trivia DB API, my team and I were able to develope a game where formed teams are pitted against each other to win trivia categories. Open Trivia DB API was used to correctly manage the trivia questions and answers for the categories that are being selected.
            </p>
          </div>
          <div id="description1">
            <img onClick={()=> window.open("https://github.com/mrinalvig/Zelda-Group-Project", "_blank")} id="githubLogo" src={github} style={{top: "1vh", left: "0vw", margin: "auto", position: "relative", height: "5vh", width: "auto", filter: "brightness(0) invert(1)"}} />
            {/* <td onClick={()=> window.open("https://github.com/know-it-alls/KnowItAll", "_blank")}>text</td> */}
            <h2  style={{cursor:'pointer'}} onClick={()=> window.open("https://github.com/mrinalvig/Zelda-Group-Project", "_blank")} id="github1">https://github.com/mrinalvig/Zelda-Group-Project </h2>
            <p id="paragraph1">
              This is a demo of an 8-bit Legend of Zelda JavaScript game my team I made back in 2017. By utilizing sprite sheets, we were able to create unique maps and dungeons for Link to traverse through. We also managed to add functions that are unique to the game such as a weapon inventory, exploding bombs, arrows you can shoot, a potion to heal you, and of cours Link's all too famous "HA HYA" attach shouts.
            </p>
          </div>
          <div id="description1">
            <img onClick={()=> window.open("https://github.com/Dumpling-Squad", "_blank")} id="githubLogo" src={github} style={{top: "1vh", left: "0vw", margin: "auto", position: "relative", height: "5vh", width: "auto", filter: "brightness(0) invert(1)"}} />
            {/* <td onClick={()=> window.open("https://github.com/know-it-alls/KnowItAll", "_blank")}>text</td> */}
            <h2  style={{cursor:'pointer'}} onClick={()=> window.open("https://github.com/Dumpling-Squad", "_blank")} id="github2">https://github.com/Dumpling-Squad </h2>
            <p id="paragraph1">
              On this project, my team and I replicated the product page of Glossier.com. It was important for us to make sure that our site was indistinguishable from the original. Not only does the site look the same, but it functions the same as well. By utilizing RESTful API endpoints and recreating the same UI, we were able to replicate the functionality.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;