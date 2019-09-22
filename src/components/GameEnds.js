import React, { Component } from 'react'
//import UIfx from 'uifx'
import barkAudio from '../sounds/bark.mp3'
import { Link } from 'react-router-dom'

//const bark = new UIfx({asset: barkAudio});

export default class GameEnds extends Component {
    componentDidMount() {
        //bark.play()
    }

    handleClick = () => {
        //console.log(bark)
        //bark.play()
    }
  
    render() {

    return (
      <div>
        <h1>GAME OVER</h1>
        <h2>your total score: {this.props.score}</h2>
        <img src="https://media.giphy.com/media/pSpmpxFxFwDpC/giphy.gif" alt="dog" height='auto' width="400"></img>
        <p>thanks for playing</p>
        <Link to='/'><button><h6>back to main</h6></button></Link>
      </div>
    )
  }
}
