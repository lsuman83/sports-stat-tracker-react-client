import {
    SUCCESSFULLY_LOADED_TEAM_PLAYERS_AND_GAMES,
    START_LOADING_TEAM,
    SUCCESSFULLY_CREATED_PLAYER
} from '../actions/index.js'

const initialState = {
    teamsLoaded: {},
    list: []
}


export default function playersReducer(state = initialState, 
    action) {
        switch(action.type) {
            case START_LOADING_TEAM:
                return {
                    ...state,
                    teamsLoaded: {...state.teamsLoaded, [action.payload]: 'inProgress'}
                }
            case SUCCESSFULLY_LOADED_TEAM_PLAYERS_AND_GAMES:
                return {
                    teamsLoaded: { ...state.teamsLoaded,
                    [action.payload.team.id]: 'successful'},
                    list: state.list.filter(player => player.team_id !== action.payload.team.id)
                    .concat(action.payload.players)
                }
            case SUCCESSFULLY_CREATED_PLAYER:
                return {
                    ...state,
                    list: state.list.concat(action.payload)
                }
            default:
                return state
        }
    }