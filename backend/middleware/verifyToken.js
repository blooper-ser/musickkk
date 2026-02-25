const jwt = require("jsonwebtoken");
const User = require("../models/User");

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("TOKEN ID:", decoded.id);

    // 🔥 VERY IMPORTANT PART
    const user = await User.findById(decoded.id);
    console.log("DB USER:", user.email, user.role);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user; // full user including role
    next();

  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
};

module.exports = verifyToken;