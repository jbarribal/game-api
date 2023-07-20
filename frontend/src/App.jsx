import { useState, useEffect } from 'react'
import axios from 'axios'
import Table from './components/Table'
import AddGameForm from './components/AddGameForm';
import EditGameForm from './components/EditGameForm';


function App() {

  const [games, setGames] = useState([])
  const [success, setSuccess] = useState(false);

  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editGameData, setEditGameData] = useState({});

  const handleAddButtonClick = () => {
    setShowAddForm(true);
    setShowEditForm(false);
  };

  const handleEditButtonClick = (gameData) => {
    setShowAddForm(false);
    setShowEditForm(true);
    setEditGameData(gameData);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/games');
      setGames(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };




  const handleFormSubmit = () => {

    fetchData();
    setShowAddForm(false);
    setShowEditForm(false);
  };

  useEffect(() => {

    fetchData();
  }, []);




  return (
    <div className='h-full bg-gray-100'>
      <div className='h-full'>
      <div className="min-h-full">
        <div className="py-10">
          <header>
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">Game List</h1>
            </div>
          </header>
          <main>
            <div className="mx-auto sm:px-6 lg:px-8">
              <div className='mx-auto'>
                <button onClick={handleAddButtonClick}className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Game</button>
              </div>
              {showAddForm && <AddGameForm onFormSubmit={handleFormSubmit}/>}
              {showEditForm && <EditGameForm editGameData = {editGameData} onFormSubmit={handleFormSubmit}/>}
              <Table  data = {games} onEditButtonClick= {handleEditButtonClick}/>
            </div>
          </main>
        </div>
      </div>

      </div>
    </div>
  )
}

export default App
