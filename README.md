# Book Library Management System

## Overview

Welcome to the MERN (MongoDB, Express, React, Node.js) Book Management System! This project provides a platform for managing books, allowing users to add new books, search Book ID to check them in and out, and view available and checked-out books.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
  - [Backend](#backend)
  - [Frontend](fFrontend)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
  - [API Endpoints](#api-endpoints)
  - [Frontend App](#frontend-app)
- [Contributing](#contributing)

## Features

* Add new books to the library
* Get a list of available books
* Get a list of checked out books
* Search for a book by title to get its ID
* Checkout a book by ID
* Checkin a book by ID

## Technologies Used

- MongoDB: A NoSQL database used to store book information.
- Express.js: A Node.js framework used for building the server and API endpoints.
- React: A JavaScript library used for building the user interface.
- Node.js: A JavaScript runtime environment used for server-side development.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js, used for interacting with the MongoDB database.
- CSS and Bootstrap: Used for styling the front-end user interface.


## Setup and Installation

### Backend

1. Clone the repository
```
git clone Muhammad-Qassim/MERN-Library-Manager
```
2. Navigate to the backend folder 
```
cd backend
```
2. Install dependencies: 
```
npm install
```
3. Create a `.env` file and add the following variable: `MONGODB_URI=your_mongodb_uri`

* To use `.env` file, install `dotenv` package:
```
npm install dotenv
```

### Frontend

1. Navigate to the frontend folder 
```
cd frontend
```
2. Install dependencies: 
```
npm install
```
4. Install Axios: 
```
npm install axios
```
6. Install Bootstrap: 
```
npm install bootstrap
```

### Running the Application

1. Start the Express server.
```
cd ../server && npm start
```
2. Start the React app
```
cd ../client && npm install
```
3. Open your browser and navigate to http://localhost:PORT to view the application.

## Usage

### API Endpoints

* **GET /books**: Get a list of available books
* **GET /books/checkedout**: Get a list of checked out books
* **GET /books/:title**: Search for a book by title and get its ID
* **POST /books/checkout/:id**: Checkout a book by ID
* **POST /books/checkin/:id**: Checkin a book by ID

### Frontend App

Once the application is running, you can use the following steps to interact with the system:

1. **Viewing Available Books**:
- Automatically list all available books in the system.

2. **Viewing Checked-Out Books**:
- Automatically list all books that are currently checked out.

3. **Searching for a Book by Title**:
- Use the search bar provided to search for a book by its title.
- Click on the "Search" button to see the ID, note its ID for checking out.

4. **Checking Out a Book**:
- To borrow a book, enter its ID (found through search) in the "Check Out" input field with the borrowers name and due date.
- Click on the "Check Out" button to borrow the book.

5. **Checking In a Book**:
- If you have a book checked out and want to return it, Enter the book ID and click on the "Check In" button.

6. **Adding a New Book**:
- Fill in the required information for the new book in the form.
- Click on the "Add Book" button to add the book to the system.

These actions should cover the basic interactions users will have with your MERN Book Library Management System. Feel free to explore the interface and interact with the buttons and search functionality to manage the books effectively.

## Contributing

Contributions are welcome!
