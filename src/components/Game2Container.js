import React, { Component } from 'react'
import Game2Visualiser from './Game2Visualiser'
import { connect } from 'react-redux'
import { getThreeRandomDogs, getCorrectDogName, updateQuestionNo,updateScore, updateCorrectDogURL } from '../actions/getThreeRandomDogs'

class Game2Container extends Component {

    state = {

        displayCorrectImage: false
    }

    componentDidMount() {
        //get three random dog image URLs
        this.props.getThreeRandomDogs()
    }
/*
    getDogName = (imgURLs) => {
        if (this.props.threeDogs !== null) {
            console.log('props of game2', this.props.threeDogs)
            // display one name under three dog images
            console.log("getDogName imgUrls", imgURLs)
            const chosenDog = imgURLs[Math.floor(Math.random() * imgURLs.length)]
            this.props.updateCorrectDogURL(chosenDog) //send correct dog URL to redux store
            const firstIndex = chosenDog.indexOf("eeds")
            const secondIndex = chosenDog.indexOf("/", firstIndex + 5)
            const dogNameDisplay = chosenDog.slice(firstIndex + 5, secondIndex)
            console.log('dogNameDisplay', dogNameDisplay)
            this.props.getCorrectDogName(dogNameDisplay)
            return dogNameDisplay
        }
    }
    */

    dogClick = (event, dogName) => {
        event.preventDefault()
        const dogGuessed = event.target.src
        let selectedAnsweris = dogGuessed.includes(this.props.correctDogName)
        this.setState({ questionNumber: this.questionNumber + 1 })
        this.props.updateQuestionNo()

        if(selectedAnsweris === true){
            alert("You guessed correctly")
            console.log("you gueesed", dogGuessed, this.props.correctDogName)
            this.props.updateScore()
        } else {
            alert("Wrong dog")
            this.setState({displayCorrectImage: true})
            setTimeout(()=>{
                this.props.getThreeRandomDogs()
                this.setState({displayCorrectImage: false})}, 2000)
            //setTimeout(this.setState({displayCorrectImage: false}), 2000)
            return
        }

        
        this.props.getThreeRandomDogs() //get three new random image URLs
    }
    showCorrect = () => {
        console.log('hello')
        const answer = this.props.threeDogs.filter(url => url.includes(this.props.correctDogName))
        if (answer.length > 0) {
            return <div>
                    <p>The correct answer was </p>
                <img src={answer[0]} alt="" width="100px" />
                </div>
        }
      
    }

          
    render() {
        console.log('Game2Container this.props test:', this.props)
        return <Game2Visualiser 
        imgUrls={this.props.threeDogs} 
        correctDogName = {this.props.correctDogName}
        dogClick = {this.dogClick}
        startGame = {this.startGame}
        questionNumber = {this.props.questionNumber}
        score ={this.props.score}
        correctDogURL = {this.props.dogURL}
        displayCorrectDogImage = {this.state.displayCorrectImage} />
    }   
}


const mapStateToProps = (state) => {
    return {
        dogsList: state.dogsList,
        threeDogs: state.game.threeDogs, //three image URLs
        correctDogName: state.game.correctDogName,  //dog name displayed under images
        questionNumber: state.game.questionNumber,
        score: state.game.score,
        dogURL: state.game.dogURL
    }
  }

const mapDispatchToProps = {
    getThreeRandomDogs,
    getCorrectDogName,
    updateQuestionNo,
    updateScore,
    updateCorrectDogURL
}

export default connect(mapStateToProps, mapDispatchToProps)(Game2Container)