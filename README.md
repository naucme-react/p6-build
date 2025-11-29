# React TODO List Application
This is a simple TODO list application built with Next.js and React. It allows users to add, view, and manage their tasks efficiently.
It uses PostgreSQL as the database to store tasks.

## Run Locally

To run this project locally, follow these steps:
1. Clone the repository:
   ```bash
   git clone ...
    ```
2. Navigate to the project directory:
   ```bash
   cd react-todo-list
    ```
3. Install the dependencies:
   ```bash
   npm install
    ```
4. Set up your environment variables - copy the `.env.example` file to `.env` and update the values as needed.
   ```bash
   cp .env.example .env
    ```
5. Run docker-compose to start the PostgreSQL database:
   ```bash
   docker-compose up
    ```
6. Start the development server:
   ```bash
   npm run dev
    ```