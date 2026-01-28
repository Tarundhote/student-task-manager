---

### *1. Project Title & Goal*

Student Task Manager is a simple full-stack web application that allows students to add, view, update, and delete their daily tasks in an organized and easy way.

---

### *2. Setup Instructions*

*Backend Setup*
Run the following commands in the terminal:

bash
cd backend
npm install
node server.js


After running these commands, the backend server will start at:


http://localhost:3000


*Frontend Setup*

* Open frontend/index.html directly in a web browser
  *OR*
* Open the file using *VS Code Live Server*

---

### *3. The Logic (How I Thought)*

*Why did I choose this approach?*
I chose HTML, CSS, JavaScript, and Node.js (Express) because this project is meant to understand basic full-stack concepts clearly.
Using a local tasks.json file instead of a database keeps the project simple and easy to understand at a student level.

This approach helped me focus on:

* CRUD operations
* Frontend and backend communication using APIs
* Updating the UI dynamically without page refresh (SPA concept)

---

### *4. Hardest Bug Faced & Solution*

The hardest issue I faced was a *CORS error* while connecting the frontend with the backend.

*Problem:*
The browser was blocking requests from frontend to backend.

*Solution:*
I fixed this issue by using the cors middleware in the Express server:

js
app.use(cors());


After enabling CORS, the frontend and backend started working together correctly.

---

### *5. Output & Future Improvements*

*Output Screenshots*
The screenshot shows the working Student Task Manager application with tasks added successfully.
This proves that:

* Tasks are displayed properly
* Edit and Delete buttons work
* No page refresh happens during operations
* All CRUD operations happen dynamically using JavaScript and Fetch API

*Future Improvements*
If I had 2 more days, I would add:

* User login and authentication
* Option to mark tasks as completed
* Task due dates and reminders
* Use MongoDB instead of JSON for storage
* Light and dark theme toggle

---
