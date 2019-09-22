import React, { Component } from 'react'


export default class Game2Visualiser extends Component {
  render() {
    return (
      this.props.showCorrectAnswer ? this.props.showCorrect() : <div>
        <h1>Game 2!!!!!!</h1>
        <div>{this.props.displayCorrectDogImage && <div><h2>The correct image is</h2><img width = "200px" src = {this.props.correctDogURL} alt = "dog"/></div>}</div>
        <h2>Question Number: {this.props.questionNumber}</h2>
        <h2>Score: {this.props.score}</h2>
        <button onClick={this.props.startGame}>Start Game 2</button>
        { <div>
        {this.props.imgUrls&&
            this.props.imgUrls.map(dogImage =><img value = {dogImage} onClick = {(event, dogImage) => this.props.dogClick(event, dogImage)} width = "200px" src= {dogImage} alt = "dog"></img>
        )}</div>}
        Which one is the 
        <strong> {this.props.imgUrls&&this.props.correctDogName}</strong>
        
      </div>
    )
  }
}

