import React from 'react'
import PlayerListTable from './PlayerListTable.js'
import { Link } from 'react-router-dom'

const PlayerList = ({id, players }) => {
    
    return(
      <div className='grid mx-10 mt-10'>
      <table class="table-auto min-w-full table-auto">
          <thead class="justify-between">
              <tr class="bg-gray-800">
                  <th class="px-16 py-2">
                      <span class="text-gray-300"></span>
                  </th>
                  <th class="px-16 py-2">
                      <span class="text-gray-300">Player Name</span>
                  </th>
                  <th class="px-16 py-2">
                      <span class="text-gray-300"></span>
                  </th>
                  <th class="px-16 py-2">
                      <span class="text-gray-300">Positioon</span>
                  </th>

                  <th class="px-16 py-2">
                      <span class="text-gray-300">Jersey Number</span>
                  </th>

                  <th class="px-16 py-2">
                      <span class="text-gray-300">Status</span>
                  </th>
              </tr>
          </thead>
          {players.map(player => 
            <PlayerListTable player={player} />,
            )}
        </table>
        <button type='submit' className='rounded-md bg-blue-500 px-4 mx-auto mt-20'>
              <Link to={`/teams/${id}/players/new`}>
                New Player
              </Link>
            </button>
      </div>
    )
}


export default PlayerList