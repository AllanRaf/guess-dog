import request from 'superagent'
// import _ from 'lodash'

export const getDogs = () => {
    return (dispatch, getState) => {
        //here we are checking if there isn't already a list of dogs in the state
        const dogsList = getState().dogsList
        if(dogsList !== null) { 
            return 
        } else {
        return request.get('https://dog.ceo/api/breeds/list/all')
                .then(response => {
                    dispatch({
                        type: 'SET_DOGS_LIST',
                        payload: Object.keys(response.body.message)
                })
            })
        }
    }
}