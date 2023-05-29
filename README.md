# Todo App

This is a small and basic todo website created with PERN stack (PostgreSQL, Express, React and Node).     
With this app you can create, view, edit and delete todos. 

This app was created within the time limit of 12 hours and it was my very first fullstack project.

![preview](https://github.com/laurelcrelia/todo-app/assets/102039234/cdebbdea-5dd8-476a-80a9-bd99d615f485)

# User Instructions

Ensure that PostgreSQL and Node.js are installed on your machine.   

### 1. Create .env file inside server directory. 
Here is an example:

![.env example](https://github.com/laurelcrelia/todo-app/assets/102039234/204e85ca-5ee9-4463-a067-6ce622d302df)

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
