# Student Task Manager

Problem Statement -
  This project is based on Problem 4: The "Student Task Manager" Website.  
  The main goal of this project is to help students manage their daily homework and tasks in a simple way.

  It is a **full-stack web application** where students can add, view, update, and delete their tasks easily.  
  The application works as a **Single Page Application (SPA)**, which means the page does not refresh when tasks are added or updated.


## Features
  - Add new tasks using an input box
  - View all added tasks in a list
  - Edit/update an existing task
  - Delete a task when it is no longer required
  - Tasks update dynamically without page reload
  - Simple, clean, and responsive user interface



## Tech Stack
Frontend
  - HTML – for page structure  
  - CSS – for styling and responsive design  
  - JavaScript – for handling user actions and API calls  

Backend
  - Node.js – for server-side logic  
  - Express.js – for creating REST APIs  

Storage
  - Local JSON file (`tasks.json`) is used to store tasks instead of a database



## Project Flow (How the Project Works)

1. The user opens the Student Task Manager website in the browser.
2. The frontend sends a request to the backend API to fetch existing tasks.
3. The backend reads the data from the `tasks.json` file and sends it back to the frontend.
4. When the user adds a new task:
   - The task is sent from frontend to backend using a POST request.
   - The backend saves the task in the JSON file.
   - The updated task list is shown instantly without refreshing the page.
5. When the user edits a task:
   - A PUT request is sent to the backend with updated task data.
   - The backend updates the task in the JSON file.
6. When the user deletes a task:
   - A DELETE request is sent to the backend.
   - The task is removed from the JSON file.
7. All CRUD operations happen dynamically using JavaScript and Fetch API.

