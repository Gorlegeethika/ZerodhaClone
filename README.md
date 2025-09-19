# Zerodha Clone — Full Stack Trading Platform
Check it Out first:

Frontend Url -https://zerodhaclone-frontend-sw5c.onrender.com

Backend Url - https://zerodhaclone-backend-6e4l.onrender.com

Dashboard Url - https://zerodhaclone-dashboard-ty33.onrender.com

## 📌 Project Overview
A full-stack stock trading platform (Zerodha Clone) built with React (Frontend & Dashboard) and Express/MongoDB (Backend).  
Features: Holdings, Positions, Watchlist, Buy/Sell Orders, Charts, and Secure User Authentication.

# 💻 Zerodha Clone — Frontend

This is the **landing page & authentication frontend** for the Zerodha Clone project.  
It is built using **React** and connects to the backend.
## 📂 Folder Overview

- `src/landing_page/` → Homepage, Signup, Login components  
- `src/index.js` → Root component with routes -start with this u can understand the project clearly .After opening index.js click on the route paths by ctrl+click on windows and see the codes in it.
- 
- ## 📦 Tech Stack

- **React + React Router** – SPA navigation  
- **Axios** – API calls with `withCredentials: true`  
- **React-Toastify** – Notifications for success/error  
- **Bootstrap / Custom CSS** – Styling and layout  

## ⚙️ Setup Instructions

 1️⃣ Install Dependencies
```bash or Terminal
cd frontend
npm install
2️⃣ Run Locally
npm start
Frontend will run at: http://localhost:3000
Set the Root Directory in Render → frontend folder.
![image alt](https://github.com/Gorlegeethika/ZerodhaClone/blob/aed9f0e81c9e297623bebd4a27a1a96a30656b22/frontend.png)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------
# 🛠️ Zerodha Clone — Backend

This is the **backend server** for the Zerodha Clone project.  
It is built with **Node.js, Express, and MongoDB** and handles user authentication, holdings, positions, and order placement.

---

## 📂 Folder Overview

- `models/` → Mongoose schemas for Users, Holdings, Positions, Orders  
- `routes/` → Authentication routes (signup, login, logout)  
- `middlewares/` → `isLoggedIn` middleware for JWT verification  
- `index.js` → Main server file, connects to MongoDB and runs Express server  

## 📦 Tech Stack

- **Node.js + Express.js** – REST API server  
- **MongoDB + Mongoose** – Database and ORM  
- **JWT + bcrypt** – Secure authentication  
- **cookie-parser** – To read JWT from cookies  
- **dotenv** – Environment variable management  
- **CORS** – Secure frontend-backend communication

## ⚙️ Setup Instructions

1️⃣ Install Dependencies
```bash
cd backend
npm install
2️⃣ Create .env File
PORT=3002
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key

3️⃣ Run in Development
Server will run at: http://localhost:3002
npm start
Deployment (Render)
When deploying to Render, no changes are required except:
Ensure .env variables are added in Render dashboard
Render will run npm install and npm start by default
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# 📊 Zerodha Clone — Dashboard

This is the **trading dashboard** of the Zerodha Clone project.  
It shows **holdings, positions, orders** and allows **placing buy/sell orders**.

## 📂 Folder Overview
- `src/components/` → Dashboard components (Holdings, Positions, Orders)  
- `src/components/GeneralContext.js` → Global state (login status, open/close windows)  
- `src/comonents/BuyActionWindow.js` → Model for placing buy order  
- `src/components/SellActionWindow.js` → Model for placing sell order
- `src/components/login.js,signup.js,logout.js`  →For Authentication and Authorization

## 📦 Tech Stack

- **React** – Dashboard UI  
- **Axios** – Fetch holdings/positions from backend  
- **React-Toastify** – Success/error notifications  
- **Context API** – Shared state (open/close buy/sell windows)

## ⚙️ Setup Instructions

1️⃣ Install Dependencies
```bash
cd dashboard-struct and cd dashboard
npm install
2️⃣ Run Locally
npm start

Dashboard will run at: http://localhost:3001
🚀 Deployment (Render)

Render uses a production build:

npm install
npm run build
npx serve -s build

Set the Root Directory in Render → dashboard-struct folder.
🧪 Testing

Open dashboard → Holdings & Positions should load

Try Buy/Sell → Toast message should show success/failure

Logout → Accessing dashboard APIs should give 401 Unauthorized

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


 `npm install && npm run build` + `npx serve -s build` step only in **dashboard** and npm install and npm start for **frontend**, because backend does not need a build step  
- This keeps your repo professional and beginner-friendly.
## 🙌 Thanks for Visiting!

Thanks for checking out my Zerodha Clone project!  
If you found this helpful or inspiring, feel free to ⭐ the repo or share your feedback.  
Contributions, suggestions, and pull requests are always welcome!





