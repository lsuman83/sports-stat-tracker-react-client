import React from 'react'
import { Link } from 'react-router-dom'


const TeamsListItem = ({ team }) => {
    return (
        <li>
            <Link to={`/teams/${team.id}`} key={team.id} className='text-bold text-red-800 text-2xl mx-10 m-auto'>
                {team.name}
            </Link>
        </li>
    )
}

export default TeamsListItem