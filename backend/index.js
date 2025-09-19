require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoute = require("./routes/AuthRoute");
const { HoldingsModel } = require('./models/HoldingsModel');
const { PositionsModel } = require('./models/PositionsModel');
const { OrdersModel } = require('./models/OrdersModel');
const { isLoggedIn } = require('./middlewares/AuthMiddleware');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// ---------- CORS Middleware ----------
const allowedOrigins = [
  "https://zerodhaclone-frontend-sw5c.onrender.com",
  "https://zerodhaclone-dashboard-ty33.onrender.com",
  "http://localhost:3000", // frontend local dev
  "http://localhost:3001", // dashboard local dev (if needed)
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); // allow tools like Postman or same-origin
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `CORS policy: origin ${origin} not allowed`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

// ---------- Middleware ----------
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

// ---------- Routes ----------
app.use("/", authRoute);

// ---------- Holdings & Positions ----------
app.get('/allHoldings', isLoggedIn, async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get('/allPositions', async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

// ---------- Orders ----------
app.post("/newOrder", isLoggedIn, async (req, res) => {
  const { name, qty, price, mode } = req.body;
  const newOrder = new OrdersModel({ name, qty, price, mode });
  await newOrder.save();
  res.json({ message: "Buy order saved!" });
});

app.post("/sellOrder", isLoggedIn, async (req, res) => {
  const { name, qty, price, mode } = req.body;
  const newOrder = new OrdersModel({ name, qty, price, mode });
  await newOrder.save();
  res.json({ message: "Sell order saved!" });
});

// ---------- MongoDB Connection ----------
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB connected");
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch(err => console.error("❌ MongoDB connection failed:", err.message));
