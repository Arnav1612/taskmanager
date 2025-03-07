const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Database error:", err));

  const taskRoutes = require("./routes/taskRoutes");
  app.use("/api", taskRoutes);
app.listen(5000, () => console.log("Server running on port 5000"));
