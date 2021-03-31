import { SUCCESSFULLY_CREATED_PLAYER } from './index.js'




export const createPlayer = (formData) => {
    return ((dispatch) => {
        return fetch('http://localhost:3001/players', {
            method: 'POST',
            body: formData
        })
        .then(resp => {
            if(resp.ok) {
                return resp.json()
            }
            else {
                return resp.json().then(errors => Promise.reject(errors))
            }
        })
        .then(playersJSON => {
            
            dispatch({
                type: SUCCESSFULLY_CREATED_PLAYER,
                payload: playersJSON
            })
        })
    })
}