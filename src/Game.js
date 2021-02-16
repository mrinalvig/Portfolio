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
  }

  keyUp(e){
    console.log('hello');
    this.setState({
        standingX: 0,
        standingY: -384
    })
  }

  render() {
    return(
      <div id="gameWindow">
        <div id="innerWindow">
            <div
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
            />
        </div>
      </div>
    );
  }
}

export default Game;
