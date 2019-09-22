import request from 'superagent'

export const getDogName = (imgURLs, dispatch) => {
    if(imgURLs !== null){
        const chosenDog = imgURLs[Math.floor(Math.random()*imgURLs.length)]
        console.log("getThreeRandomDogs.js chosenDog is:", chosenDog)
        const action = updateCorrectDogURL(chosenDog)
        dispatch(action)
        const firstIndex = chosenDog.indexOf("eeds")
        const secondIndex = chosenDog.indexOf("/", firstIndex+5)
        const dogNameDisplay = chosenDog.slice(firstIndex+5, secondIndex)
        return dogNameDisplay
    }
}

export const getThreeRandomDogs = () => {
    return (dispatch, getState) => {
        const threeDogs = getState().threeDogs
        //console.log("threeDogs is", threeDogs)
            return request
                .get('https://dog.ceo/api/breeds/image/random/3')
                .then(response =>{
                    console.log("response in three random dogs is", response.body.message)
                    dispatch({
                        type: 'GET_THREE_DOGS',
                        payload: {
                            threeDogs: response.body.message
                        }
                    })
                    const newDogName = getDogName(response.body.message, dispatch)
                    dispatch({
                        type: 'GET_CORRECT_DOG_NAME',
                        payload: {
                            correctDogName: newDogName
                        }
                    })
                })
                .catch(console.error)
            }
}

export const getCorrectDogName = (name)=>{
    console.log("getCorrectDogName is running", name)
    return {
        type: 'GET_CORRECT_DOG_NAME',
        payload: {
            correctDogName: name
        }
    }
}

export const updateQuestionNo = () => {
    return {
        type: 'UPDATE_QUESTION_NO'
    }
}

export const updateScore = () => {
    return {
        type: 'UPDATE_SCORE'
    }
}

export const updateCorrectDogURL = (dogURL) =>{
    console.log("UPDATE_CORRECT_DOG_URL working", dogURL)
    return {
        type: 'UPDATE_CORRECT_DOG_URL',
        payload: dogURL
    }
}

