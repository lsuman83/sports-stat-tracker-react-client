import {
    START_LOADING_TEAMS,
    SUCCESSFULLY_LOADED_TEAMS,
    START_LOADING_TEAM,
    SUCCESSFULLY_LOADED_TEAM_PLAYERS_AND_GAMES,
    SUCCESSFULLY_CREATED_TEAM
} from './index.js'

export const fetchTeams = () => {
    return (dispatch) => {
        dispatch({type: START_LOADING_TEAMS})
        return fetch('http://localhost:3001/teams', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(teamsJSON => {
                   dispatch({
                       type: SUCCESSFULLY_LOADED_TEAMS,
                       payload: teamsJSON
                })
            }) 
    }
}

export const fetchTeam = (teamId) => {
    return (dispatch) => {
        dispatch({type: START_LOADING_TEAM, payload: teamId})
        return fetch(`http://localhost:3001/teams/${teamId}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(teamsJSON => {
                   dispatch({
                       type: SUCCESSFULLY_LOADED_TEAM_PLAYERS_AND_GAMES,
                       payload: teamsJSON
                })
            }) 
    }
}


export const createTeam = (formData) => {
    return (dispatch) => {
        return fetch('http://localhost:3001/teams', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({team: formData})
        })
        .then(resp => {
            if (resp.ok) {
                return resp.json()
            }
            else {
                return resp.json().then(errors => Promise.reject(errors))
            }
        })
        .then(teamJSON => {
            dispatch({
                type: SUCCESSFULLY_CREATED_TEAM,
                payload: teamJSON
            })
        })
        .catch(err => Promise.reject(err))
    }
}


