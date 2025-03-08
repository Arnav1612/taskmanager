A simple Task Manager application built using MERN Stack (MongoDB, Express, React, Node.js) that allows users to create, update, delete, and manage tasks efficiently.

🚀 Features

Add new tasks

Mark tasks as completed or pending

Delete tasks

Persistent storage using MongoDB Atlas

Interactive UI with React.js

RESTful API with Express.js & Node.js

🛠 Technologies Used

Frontend: React.js, CSS

Backend: Node.js, Express.js

Database: MongoDB (Atlas)

State Management: React Hooks

API Testing: Postman

📌 Prerequisites

Ensure you have the following installed:

Node.js (v16 or later) → Download

MongoDB Atlas Account → Sign Up

Git → Download

📦 Installation

1️⃣ Clone the Repository

 git clone https://github.com/Arnav1612/task-manager.git
 cd task-manager

2️⃣ Backend Setup

 cd task-manager-backend
 npm install

Create a .env file inside backend folder and add:

 MONGO_URI=your_mongodb_atlas_connection_string
 PORT=5000

Start the Backend Server:

 npm start

3️⃣ Frontend Setup

 cd ../task-manager-frontend
 npm install
 npm start

The React app should now be running at http://localhost:3000/

🎯 Usage

Open http://localhost:3000/

Add a new task using the input field

Click on a task to mark it as completed

Click the ❌ button to delete a task

🐞 Troubleshooting

If Backend Fails to Start:

Ensure MONGO_URI in .env is correct

Run npm install inside task-manager-backend

If Frontend Shows Blank Page:

Open browser console (F12) and check for errors

Run npm install inside task-manager-frontend
