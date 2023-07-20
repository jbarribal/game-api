# MERN Web App - README

This README provides an overview and instructions for setting up and using the MERN (MongoDB, Express.js, React.js, Node.js) web app. The app allows users to manage and display information about different games.

## Prerequisites

Before getting started, ensure that you have the following software installed on your system:

- Node.js (v14 or higher)
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd <repository_directory>
   ```

2. Install the dependencies for both the backend and frontend:

   ```bash
   cd backend
   npm install

   cd ../frontend
   npm install
   ```

## Backend Setup

1. In the `backend` directory, create a `.env` file and configure your MongoDB connection:

   ```env
   MONGODB_URI=<your_mongodb_uri>
   PORT=3000
   ```

2. Start the backend server:

   ```bash
   cd backend
   npm start
   ```

   The backend server will run on `http://localhost:3000`.

## Frontend Setup

1. In the `frontend` directory, create a `.env` file and configure the backend API URL:

   ```env
   REACT_APP_API_URL=http://localhost:3000/api/v1/games
   ```

2. Start the frontend development server:

   ```bash
   cd frontend
   npm start
   ```

   The frontend development server will run on `http://localhost:3001`.

## API Endpoints

The backend exposes the following API endpoints:

- `GET /api/v1/games`: Retrieve a list of all games.
- `POST /api/v1/games`: Add a new game to the database.
- `GET /api/v1/games/id/:id`: Retrieve a specific game by its ID.
- `PUT /api/v1/games/:id`: Update the details of a specific game.
- `DELETE /api/v1/games/:id`: Delete a specific game from the database.

## Usage

- Access the web app by visiting `http://localhost:3001` in your browser.
- The homepage displays a "Hello World!" message. To access the API and view the games, go to `http://localhost:3000/api/v1/games`.
- Use API clients like Postman or tools like `curl` to interact with the backend API endpoints.

## Contributing

If you want to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch to your fork.
4. Create a pull request and provide a detailed explanation of the changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

Thanks to the contributors and anyone whose code was used in this project.

## Contact

If you have any questions or suggestions, feel free to contact us at [your_email@example.com](mailto:your_email@example.com).

Happy gaming! 🎮
