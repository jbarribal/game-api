import React, { useState } from 'react';
import axios from 'axios'

const AddGameForm = ({ onFormSubmit }) => {

 

  const [formData, setFormData] = useState({
    title: '',
    platforms: [],
    releaseDate: '',
    libraryStatus: '',
    Rating: undefined,
    tags: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: name === 'Rating' ? parseFloat(value) : value, 
    });
  };

  const handlePlatformChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      platforms: checked
        ? [...prevData.platforms, name]
        : prevData.platforms.filter((platform) => platform !== name),
    }));
  };

  const handleTagChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      tags: checked
        ? [...prevData.tags, name]
        : prevData.tags.filter((tag) => tag !== name),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {

      const formattedReleaseDate = formData.releaseDate + 'T00:00:00.000Z';

      const updatedFormData = { ...formData, releaseDate: formattedReleaseDate };

        setFormData({
            title: '',
            platforms: [],
            releaseDate: '',
            libraryStatus: '',
            Rating: '',
            tags: [],
          });

        console.log(formData)

      axios.post('http://localhost:3000/api/v1/games', updatedFormData);

      onFormSubmit()

    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-3 mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="border rounded-lg px-4 py-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Platforms</label>
        <div className="flex flex-wrap">
          <label className="flex items-center mr-4">
            <input
              type="checkbox"
              name="Xbox"
              checked={formData.platforms.includes('Xbox')}
              onChange={handlePlatformChange}
              className="form-checkbox"
            />
            <span className="ml-2">Xbox</span>
          </label>
          <label className="flex items-center mr-4">
            <input
              type="checkbox"
              name="PlayStation"
              checked={formData.platforms.includes('PlayStation')}
              onChange={handlePlatformChange}
              className="form-checkbox"
            />
            <span className="ml-2">PlayStation</span>
          </label>
          <label className="flex items-center mr-4">
            <input
              type="checkbox"
              name="Nintendo Switch"
              checked={formData.platforms.includes('Nintendo Switch')}
              onChange={handlePlatformChange}
              className="form-checkbox"
            />
            <span className="ml-2">Nintendo Switch</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="PC"
              checked={formData.platforms.includes('PC')}
              onChange={handlePlatformChange}
              className="form-checkbox"
            />
            <span className="ml-2">PC</span>
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="releaseDate" className="block text-gray-700 font-bold mb-2">
          Release Date
        </label>
        <input
          type="date"
          id="releaseDate"
          name="releaseDate"
          value={formData.releaseDate}
          onChange={handleChange}
          className="border rounded-lg px-4 py-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="libraryStatus" className="block text-gray-700 font-bold mb-2">
          Library Status
        </label>
        <select
          id="libraryStatus"
          name="libraryStatus"
          value={formData.libraryStatus}
          onChange={handleChange}
          className="border rounded-lg px-4 py-2 w-full"
          required
        >
          <option value="" disabled>Select Library Status</option>
          <option value="Wishlist">Wishlist</option>
          <option value="Owned">Owned</option>
          <option value="Completed">Completed</option>
          <option value="Now Playing">Now Playing</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="Rating" className="block text-gray-700 font-bold mb-2">
          Rating
        </label>
        <select
          id="Rating"
          name="Rating"
          value={formData.Rating}
          onChange={handleChange}
          className="border rounded-lg px-4 py-2 w-full"
          required
        >
          <option value="" dis>Select Rating</option>
          {Array.from({ length: 10 }, (_, index) => index + 1).map((ratingValue) => (
            <option key={ratingValue} value={ratingValue}>
              {ratingValue}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Tags</label>
        <div className="flex flex-wrap">
          <label className="flex items-center mr-4">
            <input
              type="checkbox"
              name="Strategy"
              checked={formData.tags.includes('Strategy')}
              onChange={handleTagChange}
              className="form-checkbox"
            />
            <span className="ml-2">Strategy</span>
          </label>
          <label className="flex items-center mr-4">
            <input
              type="checkbox"
              name="Multiplayer"
              checked={formData.tags.includes('Multiplayer')}
              onChange={handleTagChange}
              className="form-checkbox"
            />
            <span className="ml-2">Multiplayer</span>
          </label>
          <label className="flex items-center mr-4">
            <input
              type="checkbox"
              name="RPG"
              checked={formData.tags.includes('RPG')}
              onChange={handleTagChange}
              className="form-checkbox"
            />
            <span className="ml-2">RPG</span>
          </label>
          <label className="flex items-center mr-4">
            <input
              type="checkbox"
              name="Shooting"
              checked={formData.tags.includes('Shooting')}
              onChange={handleTagChange}
              className="form-checkbox"
            />
            <span className="ml-2">Shooting</span>
          </label>
          <label className="flex items-center mr-4">
            <input
              type="checkbox"
              name="Racing"
              checked={formData.tags.includes('Racing')}
              onChange={handleTagChange}
              className="form-checkbox"
            />
            <span className="ml-2">Racing</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="MMO"
              checked={formData.tags.includes('MMO')}
              onChange={handleTagChange}
              className="form-checkbox"
            />
            <span className="ml-2">MMO</span>
          </label>
        </div>
      </div>
      <div className="text-center">
        <button type="submit" className="bg-indigo-600 text-white font-bold px-4 py-2 rounded-lg">
            Submit
        </button>
      </div>
    </form>
  );
};

export default AddGameForm;
