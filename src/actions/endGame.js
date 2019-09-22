export const endGame = () => {
        console.log('END OF GAME!! from the action creator')
        return {
            type: 'END_GAME',
            payload: {
                gameEnds: true
        }
    }
}
