import React, { Component } from 'react'
import PlayerList from '../components/PlayerList.js'
<<<<<<< Updated upstream
import { Link } from 'react-router-dom'
=======
import GamesList from '../components/GamesList.js'
import { connect } from 'react-redux'
import { fetchTeam } from '../actions/teams'

>>>>>>> Stashed changes

class TeamShowContainer extends Component {


    state = {
        team: {},
        players: [],
        loading: true
    }

    componentDidMount(){
        return fetch(`http://localhost:3001/teams/${this.props.match.params.teamID}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(({team, players}) => {
                    setTimeout(() => {
                        this.setState({
                            team,
                            players,
                            loading: false
                        })
                    }, 1000)
                }) 
    }
    
    render() {

        if(this.state.loading){
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
<<<<<<< Updated upstream
                <div>
                    <h1 className='font-mono text-xl text-center mt-10'><strong>{this.state.team.name}</strong></h1>
                    <div className='grid grid-rows-3 justify-center'>
                        <div>{this.state.team.location}</div>
                        <div>{this.state.team.sport}</div>
                        <div>{this.state.team.league_name}</div>
                    </div>
                    <PlayerList key={this.state.team.id} players={this.state.players} />
                </div>
                <button type='submit' className='rounded-md bg-blue-500 p-1 ml-20'>
                    <Link to='/teams/{this.props.match.params.teamID}/players/new'>
                        New Player
                    </Link>
                </button>
=======
                <div className='grid auto-rows-min'>
                    <div className='text-center'>
                        <h1 className='font-mono text-xl text-center mt-10'><strong>{this.props.team.name}</strong></h1>
                        <div>{this.props.team.location}</div>
                        <div>{this.props.team.sport}</div>
                        <div>{this.props.team.league_name}</div>
                    </div>
                    <PlayerList key={this.props.team.id} players={this.props.players} />
                    <GamesList  games={this.props.games} />
                </div>
>>>>>>> Stashed changes
            </section>
        )
    }
}

<<<<<<< Updated upstream
export default TeamShowContainer
=======

const mapStateToProps = (state, { match }) => {
    const teamId = match.params.teamID
    const loadingState = state.players.teamsLoaded[teamId] || 
    state.games.teamsLoaded[teamId] || 'notStarted'

    return {
        team: state.teams.list.find(team => team.id == teamId),
        players: state.players.list.filter(player => player.team_id == teamId),
        games: state.games.list.filter(game => game.team_id !== teamId),    
        loadingState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTeam: (teamId) => dispatch(fetchTeam(teamId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamShowContainer)
>>>>>>> Stashed changes
