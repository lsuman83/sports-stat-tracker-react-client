import React from 'react'



const PlayerListTable = ({ player }) => {
           return(
            <tbody class="bg-gray-200">
              <tr class="bg-white border-4 border-gray-200">
                <td class="px-16 py-2 flex flex-row items-center">
                  <img
                    class="h-8 w-8 rounded-full object-cover "
                    src={player.player_pic_url}
                    alt={player.name}
                  />
                </td>
                <td>
                  <h2 class="text-center ml-2 font-semibold">{player.name}</h2>
                </td>
                <td class="px-16 py-2 text-center">
                  <button class="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                    Stats
                  </button>
                </td>
                <td class="px-16 py-2 text-center">
                  <h2>{player.position}</h2>
                </td>
                <td class="px-16 py-2 text-center">
                  <h2>{player.jersey_number}</h2>
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
            </tbody>
           )
}



export default PlayerListTable