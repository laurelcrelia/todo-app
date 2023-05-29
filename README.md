# Todo App

This is a small and basic todo website created with PERN stack (PostgreSQL, Express, React and Node).     
With this app you can create, view, edit and delete todos. 

This app was created within the time limit of 12 hours and it was my very first fullstack project.

![preview](https://github.com/laurelcrelia/todo-app/assets/102039234/8bd49fa6-52c8-48a6-9107-38e3914cb448)

# User Instructions

Ensure that [PostgreSQL](https://www.postgresql.org/download/) and [Node.js](https://nodejs.org/en) are installed on your machine.   

### 1. Create .env file inside server directory. 
Here is an example:

![.env.example](https://github.com/laurelcrelia/todo-app/assets/102039234/242f97fc-d2d4-44fc-a122-84b1e50600bc)

### 2. Install dependencies (server):
Navigate to the server directory and run the following command.   
``npm install``

### 3. Set up the Database:
  
- Create a new PostgreSQL database for this app:    
``CREATE DATABASE <database_name>;``

- Set up the database schema (./server):   
``psql -d <database_name> < database.sql``

- Connect to the database:    
``\c <database_name>;``

### 4. Start the server (./server):
``npm start``

### 5. Install dependencies (client):
Navigate to the client directory and run the following command.   
``npm install``

### 6. Start client side (./client) :
``npm start``
