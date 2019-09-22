export const updateScore = (total, correct) => {
    return {
        type: 'CHECK_ANSWER',
        payload: {
            total: total,
            correct: correct,   
        }
    }
}
