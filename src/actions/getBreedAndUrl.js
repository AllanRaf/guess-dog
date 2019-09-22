import request from 'superagent'

export const getBreedAndUrl = () => {
    return (dispatch, getState) => {
        const dogsList = getState().dogsList
        const random = Math.floor((Math.random() * dogsList.length) - 1)
        const randomBreed = dogsList[random]
        const link = 'https://dog.ceo/api/breed/' + randomBreed + '/images/random'
        request
            .get(link)
            .then(response => {
                dispatch({
                type: 'GET_BREED_AND_URL',
                payload: {
                    breed: randomBreed,
                    url: response.body.message
                }
            })
        })
    }
}

