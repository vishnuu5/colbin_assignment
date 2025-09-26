# Recruitment Platform

A modern full-stack recruitment platform built with React, Node.js, Express, and MongoDB. This platform enables users to register, authenticate, and manage their professional profiles with JWT-based security.

## Features

- **User Authentication**: Secure registration and login with JWT tokens
- **Profile Management**: Comprehensive user profiles with professional information
- **Responsive Design**: Mobile-first design with TailwindCSS
- **Security**: Password hashing, input validation, and rate limiting
- **Error Handling**: Comprehensive error management and user feedback
- **Modern UI**: Clean, professional interface with smooth animations

## Tech Stack

### Frontend

- **Vite** - Fast build tool and development server
- **React 18** - Modern React with hooks and context
- **JavaScript** - ES6+ features
- **TailwindCSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing

## Production Demo

**View Project Demo**
[view project](https://colbin-assignment-swart.vercel.app)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/vishnuu5/colbin_assignment.git
cd recruitment-platform
```

2. **Setup Backend**

```bash
cd Backend
npm install
```

3. **Setup Frontend**

```bash
cd ../Frontend
npm install
```

### Environment Configuration

1. **Backend Environment Variables**

   Create a `.env` file in the `Backend` directory:

```bash
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/recruitment-platform
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   JWT_EXPIRES_IN=7d
   FRONTEND_URL=http://localhost:5173
   BCRYPT_ROUNDS=12
```

2. **Frontend Environment Variables**

   Create a `.env` file in the `Frontend` directory:

```bash
   VITE_API_URL=http://localhost:5000/api
```

### Database Setup

1. **Start MongoDB**

```bash

   # If using local MongoDB
   mongod
   # Or use MongoDB Atlas cloud database
   # Update MONGODB_URI in .env file with your Atlas connection string
```

2. **Database will be created automatically** when the application starts

### Running the Application

1. **Start the Backend Server**

```bash
cd Backend
npm run dev
```

Server will run on http://localhost:5000

2. **Start the Frontend Development Server**

```bash
cd Frontend
npm run dev
```

Application will run on http://localhost:5173

3. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000/api
   - Health Check: http://localhost:5000/api/health

## API Documentation

### Authentication Endpoints

#### Register User

```bash
http
POST /api/auth/register
Content-Type: application/json

{
"email": "user@example.com",
"password": "password123",
"profile": {
"firstName": "John",
"lastName": "Doe",
"phone": "+1234567890",
"location": "New York, NY"
}
```

#### Login User

```bash
http
POST /api/auth/login
Content-Type: application/json

{
"email": "user@example.com",
"password": "password123"
}
```

#### Verify Token

```bash
http
GET /api/auth/verify
Authorization: Bearer <jwt-token>
```

### User Profile Endpoints

#### Get User Profile

```bash
http
GET /api/user/profile
Authorization: Bearer <jwt-token>
```

#### Update User Profile

```bash
http
PUT /api/user/profile
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
"profile": {
"firstName": "John",
"lastName": "Doe",
"phone": "+1234567890",
"location": "New York, NY",
"bio": "Experienced developer...",
"skills": ["JavaScript", "React", "Node.js"],
"experience": "3-5 years"
}
}
```

### Response Format

All API responses follow this structure:

```json
{
  "success": true,
  "message": "Operation successful",
  "data": {
    // Response data
  }
}
```

Error responses:

```json
{
  "success": false,
  "message": "Error description",
  "errors": [
    // Validation errors (if applicable)
  ]
}
```

## Database Schema

### User Model

```javascript
{
email: String (required, unique),
password: String (required, hashed),
profile: {
firstName: String (required),
lastName: String (required),
phone: String (optional),
location: String (optional),
bio: String (optional),
skills: [String],
experience: String (enum)
},
isActive: Boolean (default: true),
lastLogin: Date,
createdAt: Date,
updatedAt: Date
}
```

## Security Features

### Authentication & Authorization

- **JWT Tokens**: Secure token-based authentication
- **Password Hashing**: bcrypt with 12 salt rounds
- **Token Expiration**: Configurable token lifetime
- **Protected Routes**: Middleware-based route protection

### Input Validation

- **express-validator**: Server-side input validation
- **Mongoose Validation**: Database-level validation
- **XSS Protection**: Input sanitization
- **SQL Injection Prevention**: NoSQL injection protection

### Security Middleware

- **Helmet**: Security headers
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: Request rate limiting
- **Error Handling**: Secure error responses

## License

This project is licensed under the MIT License - see the LICENSE file for details.
