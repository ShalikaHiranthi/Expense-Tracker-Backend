# Backend – Expense Tracker API

## A RESTful backend built with Node.js, Express, MongoDB that supports:

## Google OAuth login

JWT authentication  
User management  
Expense CRUD operations (per user)

## Features

🔐 Google Login Authentication  
🪪 JWT-based secure API  
👤 User saved in MongoDB  
💰 Add / Edit / Delete Expenses  
📊 User-specific expense tracking  
🛡️ Protected routes using middleware

## Tech Stack

Node.js  
Express.js  
MongoDB + Mongoose  
JSON Web Token (JWT)  
Google Auth Library  
dotenv  
CORS

## Clone repository

git clone https://github.com/your-username/expense-tracker.git  
cd backend

## Install dependencies

npm install

## Setup .env file

Create .env in root:

PORT=9000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_jwt_secret  
GOOGLE_CLIENT_ID=your_google_client_id

## Run server

npm start  
or (development mode)  
npm run dev

## Authentication Flow

User logs in with Google  
Frontend sends Google credential to backend  
Backend verifies token  
User is created if not exists  
JWT token is generated  
Token is used for protected APIs

## API Endpoints

### Google Login

POST /auth/google

Body:

{"token": "google_credential" }

Response:

{  
"token": "jwt_token",  
 "user": {  
 "name": "John",  
 "email": "john@gmail.com"  
 }  
}

## 💰 Expenses

### Get all expenses (user-specific)

GET /api/expenses  
Authorization: Bearer <token>

### Add expense

POST /api/expenses  
Authorization: Bearer <token>

### Update expense

PUT /api/expenses/:id  
Authorization: Bearer <token>

### Delete expense

DELETE /api/expenses/:id  
Authorization: Bearer <token>

## Middleware

Protected routes use:

Authorization: Bearer <token>

JWT is verified using middleware before accessing API routes.

## User Model

Each user contains:

{  
name,  
email,  
picture,  
role: "user" // default  
}

## Future Improvements

📈 Analytics dashboard  
🔄 Refresh token system  
👑 Admin role system  
📱 Mobile API support  
📤 Export expenses (CSV/PDF)  
👨‍💻 Author

## Built by Shalika Hiranthi Dissanayaka

### Full Stack Developer
