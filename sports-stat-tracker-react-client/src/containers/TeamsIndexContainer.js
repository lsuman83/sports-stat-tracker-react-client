import React, { Component } from 'react'
import TeamsList from '../components/TeamsList.js'
import { connect } from 'react-redux'
import { fetchTeams } from '../actions/teams.js'
import IncrementorComponent from '../components/IncrementorComponent.js'

class TeamsIndexContainer extends Component {
 
    componentDidMount() {
        this.props.getTeams()
    }

    render(){
        if(this.props.loadingState === 'notStarted'){
            return null
        }
        return(
            <section className='max-w-6xl w-11/12 mx-auto mt-20'>
                {this.props.loadingState === 'inProgress' ? 'loading spinner' :            
                    (<div>
                        <IncrementorComponent />,
                        <TeamsList teams={this.props.teams} />
                    </div>)}
            </section>
        )
    }
}


const mapStateToProps = state => {
    return {
        teams: state.teams.list,
        loadingState: state.teams.loadingState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTeams: () => {dispatch(fetchTeams())}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TeamsIndexContainer)
