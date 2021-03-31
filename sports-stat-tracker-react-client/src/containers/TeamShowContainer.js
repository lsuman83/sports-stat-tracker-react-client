import React, { Component } from 'react'
import PlayerList from '../components/PlayerList.js'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchTeam } from '../actions/teams'


class TeamShowContainer extends Component {


    state = {
        team: {},
        players: [],
        games: [],
        loading: true
    }

    componentDidMount(){
        const teamId = this.props.match.params.teamID
        this.props.getTeam(teamId)
    }
    
    render() {

        if(this.props.loadingState !== 'successful'){
            return(
                <button type='button' className='rounded-lg ml-10 mt-5 bg-blue-800 text-center ...' disabled>
                    <svg className='animate-pulse h-5 w-5 mr-3 color-black ...' viewBox='0 0 24 24'>
                    </svg>
                    Processing
                </button>
            )
        }
        
        return(
            <section>
                <div>
                    <h1 className='font-mono text-xl text-center mt-10'><strong>{this.props.team.name}</strong></h1>
                    <div className='grid grid-rows-3 justify-center'>
                        <div>{this.props.team.location}</div>
                        <div>{this.props.team.sport}</div>
                        <div>{this.props.team.league_name}</div>
                    </div>
                    <PlayerList key={this.props.team.id} players={this.props.players} />
                </div>
                <button type='submit' className='rounded-md bg-blue-500 p-1 ml-20'>
                    <Link to={`/teams/${this.props.match.params.teamID}/players/new`}>
                        New Player
                    </Link>
                </button>
            </section>
        )
    }
}


const mapStateToProps = (state, { match }) => {
    const teamId = match.params.teamID
    const loadingState = state.players.teamsLoaded[teamId] || 'notStarted'
    
    return {
        team: state.teams.list.find(team => team.id == teamId),
        players: state.players.list.filter(player => player.team_id == teamId),    
        loadingState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTeam: (teamId) => dispatch(fetchTeam(teamId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamShowContainer)