const reducer = (state = initial, action = {}) => {
    switch (action.type) {
        case 'CHECK_ANSWER':
            const total = state.total + action.payload.total
            const correct = state.correct + action.payload.correct
            const score = (correct / total) * 100
            return {
                total: total,
                correct,
                score
            }
        default:
            return state 
    }
}

const initial = {
    total: 1, 
    correct: 0, 
    score: 0 
}

export default reducer