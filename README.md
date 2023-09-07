# REST API Node.js Project

## Introduction

This is a Node.js-based REST API project that serves as a foundation for building web applications with user authentication, user management, and more. It's designed to be a starting point for developers looking to create their own Node.js APIs.

The project includes basic user authentication and CRUD operations for user management. It utilizes Node.js, Express.js, MongoDB, and various npm packages to provide essential API functionality.

## Getting Started

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/ahmedllshafiey/REST-API-Node.git
   ```

2. Change into the project directory:

   ```bash
   cd REST-API-Node
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

The server will start on `http://localhost:3000`.

## Usage

### Endpoints

The API provides the following endpoints:

- `GET /users`: Get a list of all users.
- `POST /auth/register`: Create a new user.
- `POST /auth/login`: User login.
- `GET /users/:id`: Get user details by ID.
- `PUT /users/:id`: Update user information.
- `DELETE /users/:id`: Delete a user.

### Authentication

Authentication is handled using session tokens. When a user registers or logs in, they receive a session token, which should be included in the request headers for protected routes.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/ahmedllshafiey/REST-API-Node/blob/main/LICENSE) file for details.

## Contact

If you have any questions or feedback, feel free to reach out:

- Ahmed Shafiey - [Email](ahmedll.shafiey@gmail.com)
