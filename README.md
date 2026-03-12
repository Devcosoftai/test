# DevCoSoft.ai — MERN Stack Application

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) website for DevCoSoft.ai — a modern tech startup offering full-stack development, cloud, and AI-powered solutions.

---

## 📁 Project Structure

```
devcosoft-ai/
├── client/                  # React.js Frontend
│   └── src/
│       ├── components/
│       │   ├── Navbar/
│       │   ├── Hero/
│       │   ├── Stats/
│       │   ├── About/
│       │   ├── Services/
│       │   ├── Process/
│       │   ├── Industries/
│       │   ├── TechStack/
│       │   ├── Contact/
│       │   └── Footer/
│       ├── pages/
│       ├── hooks/
│       ├── utils/
│       └── styles/
└── server/                  # Node.js + Express Backend
    ├── routes/
    ├── controllers/
    ├── models/
    ├── middleware/
    └── config/
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas URI)
- npm or yarn

### Installation

```bash
# 1. Clone or extract the project
cd devcosoft-ai

# 2. Install all dependencies
npm run install-all

# 3. Configure environment
cp server/.env.example server/.env
# Edit server/.env with your MongoDB URI and other settings

# 4. Run in development mode (both client & server)
npm run dev
```

### Individual Start
```bash
# Frontend only (http://localhost:3000)
cd client && npm start

# Backend only (http://localhost:5000)
cd server && npm run dev
```

### Production Build
```bash
npm run build
cd server && npm start
```

---

## ⚙️ Environment Variables (server/.env)

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/devcosoft
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
CLIENT_URL=http://localhost:3000
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

---

## 🛠️ Tech Stack

| Layer      | Technology                  |
|------------|-----------------------------|
| Frontend   | React.js 18, React Router   |
| Styling    | CSS Modules + Custom CSS    |
| Backend    | Node.js, Express.js         |
| Database   | MongoDB + Mongoose          |
| API        | RESTful JSON API            |
| Dev Tools  | Nodemon, Concurrently       |

---

## 📡 API Endpoints

| Method | Route                     | Description               |
|--------|---------------------------|---------------------------|
| POST   | /api/contact              | Submit contact form       |
| GET    | /api/services             | Get all services          |
| GET    | /api/services/:id         | Get single service        |
| GET    | /api/stats                | Get company stats         |
| POST   | /api/newsletter/subscribe | Subscribe to newsletter   |

---

## 📦 Deployment

- **Frontend**: Vercel / Netlify
- **Backend**: Railway / Render / AWS EC2
- **Database**: MongoDB Atlas

---

Built with ❤️ by **DevCoSoft.ai** — India 🇮🇳
