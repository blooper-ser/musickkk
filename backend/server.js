require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");

const app = express();


// ✅ Middleware
app.use(cors());
app.use(express.json());


// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));


// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);


// ✅ Health Check Route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});


// ✅ IMPORTANT: Render-Compatible Port Setup
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});