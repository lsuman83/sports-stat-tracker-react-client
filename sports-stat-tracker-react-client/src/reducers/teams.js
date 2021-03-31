import {
    START_LOADING_TEAMS,
    SUCCESSFULLY_LOADED_TEAMS,
    SUCCESSFULLY_LOADED_TEAM_PLAYERS_AND_GAMES,
    SUCCESSFULLY_CREATED_TEAM,
    SUCCESSFULLY_LOADED_TEAM_GAMES
} from '../actions/index.js'


const initialState = {
    loadingState: 'notStarted',
    list: []
}

export default function teamsReducer(state = initialState, action){

    switch(action.type){
    
        case START_LOADING_TEAMS:
            return {...state, teamsLoadingState: 'inProgress'}

        case SUCCESSFULLY_LOADED_TEAMS:
            return {
                list: action.payload,
                loadingState: 'Successful'
            }

        case SUCCESSFULLY_LOADED_TEAM_PLAYERS_AND_GAMES:
            const foundTeam = state.list.find(team => team.id == action.payload.team.id)
            
            if (foundTeam) {
                return state
            }
            else {
                return {
                    ...state,
                    list: state.list.concat(action.payload.team)
                }
            }

        case SUCCESSFULLY_CREATED_TEAM:
             return {
                ...state,
                list: state.list.concat(action.payload)
            }

        default:
            return state;

    }
}