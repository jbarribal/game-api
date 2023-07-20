import React from 'react'
import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline'

import axios from 'axios';

const Table = ({ data, onEditButtonClick  }) => {

    const handleDeleteClick =  (gameId) => {

        try{
            
            axios.delete(`http://localhost:3000/api/v1/games/${gameId.toString()}`)
          

        }catch(error) {
            console.log(error)
        }

      };

    const handleEditClick = async (gameId) => {

      try{

        const fetchGame = await axios.get(`http://localhost:3000/api/v1/games/id/${gameId.toString()}`)
        onEditButtonClick(fetchGame.data);



      }catch (error) {
        console.log(error)
      }
      
     
      
    };

    const handleViewClick = async (gameId) => {

      try{
        const fetchGame = await axios.get(`http://localhost:3000/api/v1/games/id/${gameId.toString()}`)
        console.log(fetchGame.data)
        
      }catch (error) {
        console.log(error)
      }
    }

  return (
    <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Platforms
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Release Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Library Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Rating
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Tags
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>

                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.map((game) => (
                    <tr key={game.id.toString()}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{game.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{game.platforms.join(", ")}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(game.releaseDate).toLocaleDateString("en-US")}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{game.libraryStatus}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{game.Rating}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{game.tags.join(", ")}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className='grid grid-cols-3 gap-4'>
                            <button onClick={()=> handleEditClick(game.id)} className="text-indigo-600 hover:text-indigo-900">
                                <PencilIcon className='w-3 h-3'/>
                            </button>
                            <button onClick={() => handleDeleteClick(game.id)} className="text-indigo-600 hover:text-indigo-900">
                                <TrashIcon className='w-3 h-3'/>
                            </button>

                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Table