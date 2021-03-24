import React from 'react'
import TeamsListItem from './TeamsListItem.js'

const TeamsList = ({ teams }) => {

    return (
        <section>
            <h1 className='py-4 text-3xl'><strong>My Teams</strong></h1>
            <ul>
                {teams.map((team) => <TeamsListItem key={team.id} team={team} />)}
            </ul>
        </section>
    )
}

export default TeamsList;