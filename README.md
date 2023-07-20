# MERN Web App - README

This README provides an overview and instructions for setting up and using the MERN (MongoDB, Express.js, React.js, Node.js) web app. The app allows users to manage and display information about different games.

## Prerequisites

Before getting started, ensure that you have the following software installed on your system:

- Node.js (v16 or higher)
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
   npm i

   cd frontend
   npm i
   ```

## Backend Setup

1. In the `backend` directory, create a `.env` file and configure your MongoDB connection:

   ```env
   DATABASE_URL=<your_mongodb_uri>
   PORT=3000
   ```

2. Start the backend server:

   ```bash
   cd backend
   npx prisma generate
   npm start
   ```

   The backend server will run on `http://localhost:3000`.

## Frontend Setup



1. Start the frontend development server:

   ```bash
   cd frontend
   npm run dev
   ```

   The frontend development server will run on `http://127.0.0.1:5173/`.

## API Endpoints

The backend exposes the following API endpoints:

- `GET /api/v1/games`: Retrieve a list of all games.
- `POST /api/v1/games`: Add a new game to the database.
- `GET /api/v1/games/id/:id`: Retrieve a specific game by its ID.
- `PUT /api/v1/games/:id`: Update the details of a specific game.
- `DELETE /api/v1/games/:id`: Delete a specific game from the database.

## Usage

- Access the web app by visiting `http://127.0.0.1:5173/` in your browser.
- The homepage displays a "Hello World!" message. To access the API and view the games, go to `http://localhost:3000/api/v1/games`.
- Use API clients like Postman or tools like `curl` to interact with the backend API endpoints.

