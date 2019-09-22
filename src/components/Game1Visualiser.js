import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Game1Visualiser extends Component {
  render() {
    console.log('questionnumber from visualiser', this.props.questionNumber)
    return (
      <div>
        <Link to='/'><button><h6>back to main</h6></button></Link>
        { !this.props.display ? <h1>GAME 1</h1> : <h1>GOOD LUCK!</h1> }
        <div>
          { this.props.display && <h2>Score: {this.props.score}</h2> }
          { !this.props.display && <button onClick={this.props.nextQuestion}><h2>START GAME</h2></button> }
          { this.props.display && <h2>Question {this.props.questionNumber}</h2> }
          { this.props.display && 
          <div>
            { this.props.answer === 'start' ? <p>What kind of breed is this?</p> : <p></p> }
            { this.props.answer === 'correct' ? <h3>You are correct! it is a {this.props.breed}! </h3> : <p></p> } 
            { this.props.answer === 'incorrect' ? <h3>Oops, wrong answer... it is a {this.props.breed}! </h3> : <p></p> }   
            {this.props.dogAnswers && this.props.dogAnswers.map(dog =>
            <button key={dog} onClick={this.props.checkAnswer}>{dog}</button>)}
            <br />
            <img src={this.props.url} alt='dog'></img>
            <br />
            {!this.props.dogAnswers && 'loading...'}
          </div>
          }
        </div>
      </div>
    )
  }
}