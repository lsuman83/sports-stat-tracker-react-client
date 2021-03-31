import React from 'react'
import { Link } from 'react-router-dom'

const PlayerList = ({ players }) => {
    
    return(
        <div className='grid mt-10'>
            <table className='table-fixed'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Player Name</th>
                        <th>Position</th>
                        <th>Jersey Number</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player) => 
                        <tr className='text-center'>
                            <td>
                                <img className='inline-block w-10 h-10 mr-3 rounded-xl' alt={player.name} src={player.player_pic_url} />
                            </td>
                            <td>
                                {player.name}
                            </td>
                            <td>
                                {player.position}
                            </td>
                            <td>
                                {player.jersey_number}
                            </td>
                        </tr>
                    )} 
                </tbody>
            </table>
            <button type='submit' className='rounded-md bg-blue-500 px-4 mx-auto mt-10'>
                <Link to={`/teams/${players.team_id}/players/new`}>
                    New Player
                </Link>
            </button>
        </div>
    )
}


export default PlayerList