const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
require("dotenv").config();

const isLoggedIn = async (req, res, next) => {
  try {
     //console.log("Cookies received:", req.cookies);
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(401).json({ message: "Unauthorized" });

    req.user = user; // attach user to request
    next(); // proceed to the route
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

const userVerification = async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.json({ status: false });

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(decoded.id);
    if (user) return res.json({ status: true, user: user.username });
    else return res.json({ status: false });
  } catch (err) {
    return res.json({ status: false });
  }
};

// ✅ Export both
module.exports = { isLoggedIn, userVerification };
