# API Project README

This README.md file provides an overview of a Node.js API project developed using Express.js and MongoDB. It contains essential information and instructions for setting up and running the project.

## Project Overview

This project is an API built using Node.js, Express.js, and MongoDB. It provides a platform to perform CRUD (Create, Read, Update, Delete) operations on a specific data model. The project follows the RESTful API architecture and utilizes the MongoDB database for data storage.

## Prerequisites

To run this project, you need to have the following software installed on your machine:

- Node.js (version 16.20.0 or above)
- MongoDB (version 4 or above)

## Getting Started

Follow the steps below to set up and run the project on your local machine:

1. Clone the repository:

   ```
   $ git clone git@github.com:narengupta84/nodejs-expressjs-mongodb.git
   ```

2. Install dependencies:

   ```   
   $ npm i
   ```

3. Configure the MongoDB connection:

   - Open the `.env` file in the project root directory.
   - Modify the `DATABASE_URL` value to match your MongoDB connection string.

4. Start the application:

   ```
   $ npm run start
   ```

   The API server will start running at `http://localhost:3000`.

## API Endpoints

The following are the API endpoints available in the project:

- `GET /vehicle` - Retrieve all resources
- `GET /vehicle/:id` - Retrieve a specific resource by ID
- `POST /vehicle` - Create a new resource
- `PATCH /avehicle/:id` - Update an existing resource by ID
- `DELETE /vehicle/:id` - Delete a resource by ID


## Contributing

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the project repository.

## License

This project is licensed under the [MIT License](LICENSE).