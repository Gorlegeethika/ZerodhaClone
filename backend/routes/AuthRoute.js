const { Signup, Login } = require("../controllers/AuthController");
const { userVerification } = require("../middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/verify", userVerification); // now this works
router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true, // set to true in production with HTTPS
    sameSite: "None",
    path: "/",
  });
  res.status(200).json({ message: "Logged out successfully" });
});


module.exports = router;
