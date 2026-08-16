const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");
const tellUsRoutes = require("./routes/tellUsRoutes");

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

// MongoDB
connectDB();

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Backend is running",
  });
});

// Tell Us API
app.use("/api/tell-us", tellUsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});