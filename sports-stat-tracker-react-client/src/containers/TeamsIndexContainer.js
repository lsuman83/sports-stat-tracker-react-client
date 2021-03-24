import React, { Component } from 'react'
import TeamsList from '../components/TeamsList.js'


class TeamsIndexContainer extends Component {

    state = {
        teams: [],
        loading: true
    }
    
    componentDidMount() {
        return fetch('http://localhost:3001/teams', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(teamsJSON => {
                    setTimeout(() => {
                        this.setState({
                            teams: teamsJSON,
                            loading: false
                        })
                    }, 1000)
                }) 
    }
    render(){
        return(
            <section className='max-w-6xl w-11/12 mx-auto mt-20'>
                {this.state.loading ? 'loading spinner' : <TeamsList teams={this.state.teams} />}
            </section>
        )
    }
}



export default TeamsIndexContainer
