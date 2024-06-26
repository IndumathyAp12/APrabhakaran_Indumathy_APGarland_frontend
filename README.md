# Capstone Project Title - AP Garland Website(using MERN STACK)

## Project Overview
The Garland website is a MERN stack application that allows users to browse and purchase garlands online. It includes user authentication, Register New user and login user, garland listings, add to cart functionality , with edit and remove option, contact us form and a search feature.

## Folder Structure
- /client: React frontend application
- /server: Node.js backend application

## Technologies Used
- Frontend: React, React Router, Axios
- Backend: Node.js, Express.js, MongoDB, Mongoose


## API Documentation
### Products Endpoints
- **GET** `/api/products`: Fetch all garlands.
- **POST** `/api/products`: Create a new garland.
- **PUT** `/api/products/:id`: Update a garland by ID.
- **DELETE** `/api/products/:id`: Delete a garland by ID.

Users Endpoints
POST /api/users

Description: Create a new user.
GET /api/users

Description: Fetch all users.
GET /api/users/:id

Description: Retrieve a user by ID.
PUT /api/users/:id

Description: Update a user by ID.
DELETE /api/users/:id

Description: Delete a user by ID.

Orders Endpoints
POST /api/orders

Description: Create a new order.
GET /api/orders

Description: Fetch all orders.
GET /api/orders/:id

Description: Retrieve an order by ID.
PUT /api/orders/:id

Description: Update an order by ID.
DELETE /api/orders/:id

Description: Delete an order by ID.


## Frontend Components
- **GarlandList**: Displays a list of garlands fetched from the API.
- **GarlandItem**: Represents each garland item with details.
- **SearchBar**: Component for filtering garlands based on user input.

## Authentication
User authentication is implemented using JWT (JSON Web Tokens) stored in local storage.

## Deployment
- Backend: Deployed on render.com with MongoDB Atlas as the database provider.
- Frontend: Deployed on Netlify for static hosting.
## Links

[Deployed Capstone Frontend  Netlify Link](https://keen-tarsier-f75c82.netlify.app/)

[Capstone Backend Github Link](https://github.com/IndumathyAp12/APrabhakaran_Indumathy_APGarland_backend)

[Deployed Capstone Backend Render Link](https://aprabhakaran-indumathy-apgarland-backend.onrender.com)