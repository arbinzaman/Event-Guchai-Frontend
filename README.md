# Eventগুছাই

Eventগুছাই is a multivendor event management system built with React (using Vite) and Firebase for authentication. The backend is powered by Node.js and MySQL. The platform supports two roles: users and vendors, with an admin interface for management. Users can customize their events, while vendors can offer their services.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Roles and Permissions](#roles-and-permissions)
- [Database Schema](#database-schema)
- [Authentication](#authentication)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User and vendor registration and authentication via Firebase.
- Event customization for users.
- Vendor services listing and booking.
- Admin dashboard for managing users, vendors, and events.
- Real-time notifications and updates.
- Secure and scalable architecture.

## Tech Stack

- **Frontend:** React, Vite, Firebase Authentication
- **Backend:** Node.js, Express.js, MySQL
- **Database:** MySQL
- **Hosting:** Vercel (Frontend), Heroku (Backend)
- **Other:** JWT for authentication, Sequelize ORM

## Installation

### Prerequisites

- Node.js
- MySQL
- Firebase account

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/EventGuchai.git
   cd EventGuchai
   ```

2. **Setup frontend:**

   ```bash
   cd client
   npm install
   ```

3. **Setup backend:**

   ```bash
   cd ../server
   npm install
   ```

4. **Configure environment variables:**

   Create a `.env` file in the `server` directory and add the following:

   ```env
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   JWT_SECRET=your_jwt_secret
   FIREBASE_API_KEY=your_firebase_api_key
   FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   FIREBASE_PROJECT_ID=your_firebase_project_id
   FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   FIREBASE_APP_ID=your_firebase_app_id
   ```

5. **Run the frontend:**

   ```bash
   cd ../client
   npm run dev
   ```

6. **Run the backend:**

   ```bash
   cd ../server
   npm start
   ```

## Usage

- Visit `http://localhost:3000` for the frontend.
- Access the admin dashboard at `http://localhost:3000/admin`.
- Use the API at `http://localhost:5000/api`.

## Roles and Permissions

- **User:**
  - Customize and manage their events.
  - Book vendor services.
  - View and manage their profile.

- **Vendor:**
  - List services.
  - Manage bookings.
  - View and update their profile.

- **Admin:**
  - Manage users and vendors.
  - Approve or reject vendor listings.
  - Monitor system activity.

## Database Schema

### Users Table

| Column         | Type         | Description                  |
|----------------|--------------|------------------------------|
| id             | INT          | Primary key                  |
| name           | VARCHAR(255) | User's name                  |
| email          | VARCHAR(255) | User's email                 |
| password       | VARCHAR(255) | User's password (hashed)     |
| role           | ENUM         | 'user', 'vendor', 'admin'    |
| created_at     | TIMESTAMP    | Record creation timestamp    |
| updated_at     | TIMESTAMP    | Record update timestamp      |

### Events Table

| Column         | Type         | Description                  |
|----------------|--------------|------------------------------|
| id             | INT          | Primary key                  |
| user_id        | INT          | Foreign key to Users table   |
| name           | VARCHAR(255) | Event name                   |
| date           | DATE         | Event date                   |
| location       | VARCHAR(255) | Event location               |
| description    | TEXT         | Event description            |
| created_at     | TIMESTAMP    | Record creation timestamp    |
| updated_at     | TIMESTAMP    | Record update timestamp      |

### Vendors Table

| Column         | Type         | Description                  |
|----------------|--------------|------------------------------|
| id             | INT          | Primary key                  |
| user_id        | INT          | Foreign key to Users table   |
| service_name   | VARCHAR(255) | Vendor service name          |
| description    | TEXT         | Service description          |
| price          | DECIMAL      | Service price                |
| created_at     | TIMESTAMP    | Record creation timestamp    |
| updated_at     | TIMESTAMP    | Record update timestamp      |

## Authentication

Authentication is handled by Firebase. Users can sign up and log in using their email and password. JWT tokens are used to secure API endpoints.

## API Endpoints

### User

- **Register:** `POST /api/auth/register`
- **Login:** `POST /api/auth/login`
- **Get Profile:** `GET /api/users/profile`

### Vendor

- **List Services:** `GET /api/vendors/services`
- **Add Service:** `POST /api/vendors/services`
- **Update Service:** `PUT /api/vendors/services/:id`
- **Delete Service:** `DELETE /api/vendors/services/:id`

### Event

- **Create Event:** `POST /api/events`
- **Get Events:** `GET /api/events`
- **Update Event:** `PUT /api/events/:id`
- **Delete Event:** `DELETE /api/events/:id`

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a Pull Request.



![Screenshot 2024-05-22 014226](https://github.com/arbinzaman/Event-Guchai/assets/108592062/43b746ff-c95d-4e16-a7d9-bb75ca577e79)


