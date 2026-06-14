# Swado — Food Delivery Platform

A full-stack food delivery web application built with the MERN stack (MongoDB, Express, React, Node.js). Swado supports three user roles — Customer, Restaurant Owner, and Delivery Partner — and includes real-time order tracking, online payments, and OTP-based authentication.

**Live Demo:** https://swado-food-delivery-zaen.vercel.app
**Backend API:** https://swado-backend.onrender.com

> Note: The backend is hosted on Render's free tier, so the first request after a period of inactivity may take 30–50 seconds to respond (cold start).

---

## Features

### Customer
- Email/password and Google (Firebase) authentication
- OTP-based password reset via email (Resend)
- Browse shops and food items by category and location
- Search for food items
- Cart and checkout with Cash on Delivery or online payment (Razorpay)
- Track order status and live delivery location on a map
- Order history

### Restaurant Owner
- Create and manage shop profile with image upload (Cloudinary)
- Add, edit, and remove menu items
- View and update incoming order status

### Delivery Partner
- View available delivery requests
- Accept and complete deliveries
- Real-time location sharing for order tracking
- OTP-based delivery confirmation
- Daily earnings overview

### Real-time Updates
- Live order status and location updates powered by Socket.io

---

## Tech Stack

**Frontend**
- React 19 + Vite
- Redux Toolkit
- Tailwind CSS
- React Leaflet (maps)
- Socket.io Client
- Firebase Authentication

**Backend**
- Node.js + Express 5
- MongoDB + Mongoose
- Socket.io
- JWT Authentication
- Cloudinary (image storage)
- Razorpay (payments)
- Resend (transactional email)

**Deployment**
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## Project Structure

```
swado/
├── backend/
│   ├── config/        # Database connection
│   ├── controllers/    # Route logic
│   ├── middlewares/    # Auth & file upload middleware
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API routes
│   ├── utils/           # Email, Cloudinary helpers
│   ├── socket.js        # Real-time event handlers
│   └── index.js          # Entry point
└── frontend/
    └── src/
        ├── components/   # Reusable UI components
        ├── pages/          # Page-level components
        ├── redux/          # Redux Toolkit slices
        ├── hooks/          # Custom hooks (location, data fetching)
        └── App.jsx
```

---

## Running Locally

### Prerequisites
- Node.js
- MongoDB Atlas account
- Cloudinary, Razorpay, Firebase, and Resend accounts (for full functionality)

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Environment Variables

**backend/.env**
```
PORT=8000
MONGODB_URL=
JWT_SECRET=
RESEND_API_KEY=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
```

**frontend/.env**
```
VITE_FIREBASE_APIKEY=
VITE_GEOAPIKEY=
VITE_RAZORPAY_KEY_ID=
```

---
