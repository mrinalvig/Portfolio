import React from 'react';
import './Game.css';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
        standingX: 0,
        standingY: -384
    }
    this.keyClick = this.keyClick.bind(this);
    this.keyUp = this.keyUp.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyClick);
  }

  keyClick(e) {
    console.log(e.keyCode);
    if(e.keyCode === 39) {
        this.setState({
            standingY: -(192 + 384)
        })
        if(this.state.standingX === -(768 - 96)) {
            this.setState({
                standingX: 0
            })
        }
        this.setState({
            standingX: this.state.standingX -96
        })
    }

    else if(e.keyCode === 37) {
        this.setState({
            standingY: -(288 + 384)
        })
        if(this.state.standingX === -(768 - 96)) {
            this.setState({
                standingX: 0
            })
        }
        this.setState({
            standingX: this.state.standingX -96
        })
    }

    else if(e.keyCode === 40) {
        this.setState({
            standingY: -384
        })
        if(this.state.standingX === -768) {
            this.setState({
                standingX: 0
            })
        }
        this.setState({
            standingX: this.state.standingX -96
        })
    }

    else if(e.keyCode === 38) {
        this.setState({
            standingY: -(96 + 384)
        })
        if(this.state.standingX === -768) {
            this.setState({
                standingX: 0
            })
        }
        this.setState({
            standingX: this.state.standingX -96
        })
    }

    else if(e.keyCode === 32) {
        this.setState({
            standingY: 0
        })
        setInterval(() => {
            if(this.state.standingX === -768) {
                this.setState({
                    standingX: 0
                })
            }
            this.setState({
                standingX: this.state.standingX -96
            })
        }, 50);
    }
  }

  keyUp(e){
    console.log(e.keyCode);
    this.setState({
        standingX: 0,
        standingY: -384
    })
  }

  render() {
    return(
      <div id="gameWindow">
        <div id="innerWindow">
            {/* <div
                style={{
                    display: "inline-block",
                    height: "96px",
                    width: "96px",
                    backgroundImage: `url('https://i.ibb.co/PrTZX5C/link-sheet.png')`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: `${this.state.standingX}px ${this.state.standingY}px`,
                    position: "absolute",
                    left: "37.5vw",
                    top: "36vh"
                }}
                onKeyDown={(e) => this.keyClick(e)}
                onKeyUp={(e) => this.keyUp(e)}
            /> */}
            <div>
            <h2 id="tryItHeader" >TRY IT OUT!
                <ol id="controlls">
                    <li>SPACEBAR - ATTACK</li>
                    <li>ARROW KEYS - MOVE LINK</li>
                    <li>Z - USE ITEM</li>
                    <li>CLICK MOUSE ON ITEM ICON - CHANGE ITEM</li>
                </ol>
            </h2>
                <iframe id="gamePlay" src="https://mrinals8bitzeldagame.netlify.app" />
            </div>
        </div>
      </div>
    );
  }
}

export default Game;
