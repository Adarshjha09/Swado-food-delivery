# Swado — Food Delivery Platform

A full-stack food delivery web application built with the MERN stack (MongoDB, Express, React, Node.js). Swado supports three user roles — Customer, Restaurant Owner, and Delivery Partner — and includes real-time order tracking, online payments, and OTP-based authentication.

**Live Demo:** https://swado-food-delivery-zaen.vercel.app
**Backend API:** https://swado-backend.onrender.com

> Note: The backend is hosted on Render's free tier, so the first request after a period of inactivity may take 30–50 seconds to respond (cold start).

---

## Vision

Swado aims to be a lightweight, easy-to-extend food delivery platform for local restaurants and small businesses — the kind of city-specific delivery network that lets independent food vendors reach customers without depending on large aggregator platforms. The long-term goal is to build a complete, production-ready ecosystem covering ordering, real-time delivery tracking, and shop management, while keeping the codebase simple enough for individual restaurants or small teams to self-host and customize.

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

| Category | Technology | Purpose |
|---|---|---|
| **Frontend** | React 19 + Vite | Core UI framework and build tool |
| **Frontend** | Redux Toolkit | Global state management (user, cart, location) |
| **Frontend** | Tailwind CSS | Styling and responsive design |
| **Frontend** | React Leaflet | Interactive maps for delivery tracking |
| **Backend** | Node.js + Express 5 | API server and routing |
| **Backend** | Mongoose | MongoDB object modeling |
| **Database** | MongoDB Atlas | Cloud-hosted NoSQL database |
| **Authentication** | JWT (JSON Web Tokens) | Session management via secure cookies |
| **Authentication** | Firebase Auth | Google OAuth sign-in |
| **OTP / Email** | Resend | Transactional emails — password reset and delivery OTPs |
| **Image Storage** | Cloudinary | Shop and food item image uploads |
| **Payments** | Razorpay | Online payment processing and verification |
| **Location** | Geoapify | Geocoding — converting addresses to coordinates |
| **Real-time** | Socket.io | Live order status and delivery location updates |
| **Deployment** | Vercel | Frontend hosting |
| **Deployment** | Render | Backend hosting |
| **Deployment** | MongoDB Atlas | Database hosting |

---

## Project Structure

### Backend (`/backend`)

| Folder/File | Purpose |
|---|---|
| `index.js` | Application entry point — sets up Express, HTTP server, and Socket.io |
| `config/` | MongoDB connection setup |
| `models/` | Mongoose schemas (User, Shop, Item, Order) |
| `routes/` | API route definitions, mapped to controllers |
| `controllers/` | Business logic for each route (auth, shop, item, order, user) |
| `middlewares/` | Authentication checks (JWT) and file upload handling (Multer) |
| `utils/` | Helper modules — email sending (Resend), image upload (Cloudinary) |
| `socket.js` | Socket.io event handlers for real-time location and order updates |

### Frontend (`/frontend/src`)

| Folder/File | Purpose |
|---|---|
| `App.jsx` | Route definitions — maps URLs to page components |
| `main.jsx` | React application entry point |
| `pages/` | Page-level components (SignIn, SignUp, Home, Cart, Checkout, Orders, Owner/Delivery dashboards) |
| `components/` | Reusable UI components (Navbar, Food Card, etc.) |
| `redux/` | Redux Toolkit slices for global state (user, owner, map/location) |
| `hooks/` | Custom hooks for location tracking and data fetching |
| `assets/` | Static images and icons |

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

## Future Enhancements

- Verify a custom domain with Resend so transactional emails (OTPs, password resets) land in the primary inbox instead of spam
- Upgrade backend hosting to avoid cold-start delays on the free tier
- Add ratings and reviews for shops and items
- Add order cancellation and refund flow
- Add push notifications for order status updates
- Admin dashboard for platform-wide analytics and shop approvals
- Multi-language support
- Wishlist / favorites for frequently ordered items
- Filters and sorting on the shop/item listing pages (price, rating, delivery time)
- Automated tests (unit and integration) for critical flows like checkout and payments

---

## License

This project is for educational and portfolio purposes.
