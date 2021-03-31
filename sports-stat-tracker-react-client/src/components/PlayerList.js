import React from 'react'
import { Link } from 'react-router-dom'

const PlayerList = ({ players }) => {
    
    return(
        <div className='grid mt-10'>
            <div>
      <table class="min-w-full table-auto">
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
        <tbody class="bg-gray-200">
          <tr class="bg-white border-4 border-gray-200">
            <td class="px-16 py-2 flex flex-row items-center">
              <img
                class="h-8 w-8 rounded-full object-cover "
                src="https://randomuser.me/api/portraits/men/30.jpg"
                alt=""
              />
            </td>
            <td>
              <h2 class="text-center ml-2 font-semibold">Dean Lynch</h2>
            </td>
            <td class="px-16 py-2 text-center">
              <button class="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                Stats
              </button>
            </td>
            <td class="px-16 py-2 text-center">
              <h2>05/06/2020</h2>
            </td>
            <td class="px-16 py-2 text-center">
              <h2>10:00</h2>
            </td>

            <td class="px-16 py-2 items-center">
              <span class="text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h5 "
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </span>
            </td>
          </tr>
          <tr class="bg-white border-4 border-gray-200">
            <td class="px-16 py-2 flex flex-row items-center">
            <img
                  class="h-8 w-8 rounded-full object-cover "
                  src="https://randomuser.me/api/portraits/men/76.jpg"
                  alt=""
                />
            </td>
            <td>
              <h2 class="text-center ml-2 font-semibold">Ralph Barnes</h2>
            </td>
            <td class="px-16 py-2 text-center">
              <button class="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                Stats
              </button>
            </td>
            <td class="px-16 py-2 text-center">
              <h2>05/06/2020</h2>
            </td>
            <td class="px-16 py-2 text-center">
              <h2>12:15</h2>
            </td>

            <td class="px-16 py-2">
              <h2 class="text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15 15" />
                </svg>
              </h2>
            </td>
          </tr>
          <tr class="bg-white border-4 border-gray-200">
            <td class="px-16 py-2 flex flex-row items-center">
            <img
                  class="h-8 w-8 rounded-full object-cover "
                  src="https://randomuser.me/api/portraits/men/38.jpg"
                  alt=""
                />
            </td>
            <td>
              <h2 class="text-center ml-2 font-semibold">Brett Castillo</h2>
            </td>
            <td class="px-16 py-2 text-center">
              <button class="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                Stats
              </button>
            </td>
            <td class="px-16 py-2 text-center">
              <h2>05/06/2020</h2>
            </td>
            <td class="px-16 py-2 text-center">
              <h2>08:35</h2>
            </td>

            <td class="px-16 py-2">
              <h2 class="text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </h2>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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