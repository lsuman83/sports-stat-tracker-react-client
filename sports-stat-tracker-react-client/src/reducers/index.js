import { combineReducers } from 'redux'
import teamsReducer from './teams.js'
import playersReducer from './players.js'


export default combineReducers({
    teams: teamsReducer,
    players: playersReducer
})