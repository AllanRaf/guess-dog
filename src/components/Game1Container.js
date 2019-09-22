import React, { Component } from 'react'
import Game1Visualiser from './Game1Visualiser'
import GameEnds from './GameEnds'
import { connect } from 'react-redux'
import { getDogs } from '../actions/getDogs'
import { getBreedAndUrl } from '../actions/getBreedAndUrl'
import { updateQuestionNo, updateScore } from '../actions/getThreeRandomDogs'
import { endGame } from '../actions/endGame' 

class Game1Container extends Component {
    state = {
        display: false,
        answer: 'start'
    }

    componentDidMount() {
        this.props.getDogs()
    }

    nextQuestion = () => {
        console.log(this.props.score)
        this.props.updateQuestionNo() 
            this.setState({
            display: true,
            answer: 'start'
            })
        return this.props.getBreedAndUrl()
    }
        
    createRandomAnswers = () => {
        if(this.props.dogsList !== null) {
            const dogsList = this.props.dogsList
            let dogAnswers = [this.props.breed]
            let randomAnswer = null
            let listOfWrongDogs = dogsList.filter(dog => dog !== this.props.breed)
            while(dogAnswers.length < 3){
                randomAnswer = listOfWrongDogs[Math.floor(Math.random()*listOfWrongDogs.length)]
                dogAnswers = dogAnswers.concat(randomAnswer)
                listOfWrongDogs = listOfWrongDogs.filter(dog => dog !== randomAnswer)
            }
            return dogAnswers.sort(() => Math.random() - 0.5)
        }
    }

    checkAnswer = (event) => {
        event.preventDefault()
        const answer = event.target.innerHTML
        if(answer === this.props.breed) { 
            this.props.updateScore()
            this.setState({
                answer: 'correct'
            })
            if(this.props.questionNumber < 10) {
                setTimeout(this.nextQuestion, 2000)
            } else {
                this.props.endGame()
            }
        } else {
            this.setState({
                answer: 'incorrect'
            })
            if(this.props.questionNumber < 10) {
                setTimeout(this.nextQuestion, 2000)
            } else {
                this.props.endGame()
            }
        }
    }
    
    render() {
        return (
        <div>
        { !this.props.end ? 
                <Game1Visualiser 
                    questionNumber={this.props.questionNumber}
                    score={this.props.score}
                    url={this.props.url} 
                    breed={this.props.breed} 
                    dogAnswers = {this.createRandomAnswers()}
                    nextQuestion = {this.nextQuestion}
                    checkAnswer = {this.checkAnswer}
                    display = {this.state.display}
                    answer = {this.state.answer}/> 
                : <GameEnds
                    score={this.props.score}
                />
        } </div> 
        ) 
    }
}

const mapStateToProps = (state) => {
    console.log('game1state', state)
    return {
        dogsList: state.dogsList,
        breed: state.breedAndUrl.breed,
        url: state.breedAndUrl.url,
        questionNumber: state.game.questionNumber,
        score: Math.floor((state.game.score / state.game.questionNumber) * 100),
        end: state.game.gameEnds
    }
}

export default connect(mapStateToProps, { getDogs, getBreedAndUrl, updateQuestionNo, updateScore, endGame })(Game1Container)