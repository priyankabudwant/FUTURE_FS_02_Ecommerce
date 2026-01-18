import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import Admin from "./models/Admin.js";
import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

// GET ADMINS


import bcrypt from "bcryptjs"; // <-- import bcrypt

app.post("/admins", async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email: email.trim() });

    if (!admin) {
      return res.status(401).json({ message: "Admin not found" });
    }

    // Compare hashed password
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Wrong password" });
    }

    res.json({
      message: "Login success",
      admin,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




// --------------------
// USER MODEL
// --------------------


const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
