require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Use environment variable for MongoDB connection string
const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB Atlas
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Schema & Model
const cheatSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Cheat = mongoose.model("Cheat", cheatSchema);

app.get('/',(req,res)=>{
    res.send('Hellow World')
})

// Get all cheats
app.get("/cheats", async (req, res) => {
  try {
    const cheats = await Cheat.find();
    res.json(cheats);
  } catch (err) {
    console.error("Error fetching cheats:", err);
    res.status(500).json({ error: err.message });
  }
});

// Get cheats by subject (partial, case-insensitive match)
app.get("/cheats/subject/:subject", async (req, res) => {
  try {
    const subject = req.params.subject;
    // Find all records where title contains the subject string (case-insensitive)
    const cheats = await Cheat.find({ title: { $regex: subject, $options: "i" } });
    res.json(cheats);
  } catch (err) {
    console.error("Error fetching cheats by subject:", err);
    res.status(500).json({ error: err.message });
  }
});

// Add a new cheat
app.post("/cheats", async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) return res.status(400).json({ error: "Fill all fields" });

    const newCheat = new Cheat({ title, content });
    const savedCheat = await newCheat.save();
    res.json(savedCheat);
  } catch (err) {
    console.error("Error adding cheat:", err);
    res.status(500).json({ error: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const mongoURI = process.env.MONGO_URI;

// // Connect to MongoDB Atlas (no deprecated options)
// if (!mongoose.connection.readyState) {
//   mongoose.connect(mongoURI);
// }

// // Schema & Model
// const cheatSchema = new mongoose.Schema({
//   title: String,
//   content: String,
// });

// const Cheat = mongoose.models.Cheat || mongoose.model("Cheat", cheatSchema);

// // Get all cheats
// app.get("/cheats", async (req, res) => {
//   try {
//     const cheats = await Cheat.find();
//     res.json(cheats);
//   } catch (err) {
//     console.error("Error fetching cheats:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // Get cheats by subject (partial, case-insensitive match)
// app.get("/cheats/subject/:subject", async (req, res) => {
//   try {
//     const subject = req.params.subject;
//     const cheats = await Cheat.find({ title: { $regex: subject, $options: "i" } });
//     res.json(cheats);
//   } catch (err) {
//     console.error("Error fetching cheats by subject:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // Add a new cheat
// app.post("/cheats", async (req, res) => {
//   try {
//     const { title, content } = req.body;
//     if (!title || !content) return res.status(400).json({ error: "Fill all fields" });

//     const newCheat = new Cheat({ title, content });
//     const savedCheat = await newCheat.save();
//     res.json(savedCheat);
//   } catch (err) {
//     console.error("Error adding cheat:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // Export the handler for Vercel (do NOT use app.listen)
// module.exports = app;