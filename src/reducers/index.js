import { combineReducers } from 'redux'
import game from './game'
import dogsList from './dogsList'
import breedAndUrl from './breedAndUrl'

export default combineReducers({
      dogsList,
      game,
      breedAndUrl
})
