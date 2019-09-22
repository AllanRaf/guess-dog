const initial = {
threeDogs: [],
correctDogName: '',
score: 0,
questionNumber: 0,
dogURL: '',
gameEnds: false
}

const reducer = (state = initial, action = {}) => {
    switch (action.type) {
        case 'GET_BREED_AND_URL':
            console.log()
            return { ...state, ...action.payload }
        case 'GET_THREE_DOGS':
            console.log('GET_THREE_DOGS action')
            return { ...state, ...action.payload }
        case "GET_CORRECT_DOG_NAME":
            console.log('GET_CORRECT_DOG_NAME')
            return { ...state, ...action.payload }
        case 'UPDATE_QUESTION_NO':
            console.log("UPDATE_QUESTION_NO")
            return { ...state, questionNumber: state.questionNumber + 1 }
        case 'UPDATE_SCORE':
            console.log("UPDATE_SCORE")
            return { ...state, score: state.score + 1 }
        case 'UPDATE_CORRECT_DOG_URL':
            console.log("reducer updating with UPDATE_CORRECT_DOG_URL", action.payload)
            return { ...state, dogURL: action.payload}
        case 'END_GAME':
            return { ...state, ...action.payload }
        default:
        return state 
    }
  }

  export default reducer