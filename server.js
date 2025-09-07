// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // Connect MongoDB Atlas
// mongoose.connect(
//   "mongodb+srv://cc:Brahm@m9908@cluster0.mpmrf2y.mongodb.net/cheatsheetDB?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// )
// .then(() => console.log("MongoDB Atlas connected"))
// .catch((err) => console.log(err));

// // Schema & Model
// const cheatSchema = new mongoose.Schema({
//   title: String,
//   content: String,
// });

// const Cheat = mongoose.model("Cheat", cheatSchema);

// // Routes
// app.get("/cheats", async (req, res) => {
//   try {
//     const cheats = await Cheat.find();
//     res.json(cheats);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.post("/cheats", async (req, res) => {
//   try {
//     const { title, content } = req.body;
//     const newCheat = new Cheat({ title, content });
//     await newCheat.save();
//     res.json(newCheat);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB Atlas
// mongoose.connect(
//   "mongodb+srv://cc:Brahm@m9908@cluster0.mpmrf2y.mongodb.net/cheatsheetDB?retryWrites=true&w=majority",
//   { useNewUrlParser: true, useUnifiedTopology: true }
// )
// .then(() => console.log("MongoDB Atlas connected"))
// .catch((err) => console.error("MongoDB connection error:", err));

// // Schema & Model (explicit collection name)
// const cheatSchema = new mongoose.Schema({
//   title: String,
//   content: String,
// });

// const Cheat = mongoose.model("Cheat", cheatSchema, "cheatsheets");

// // Routes

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

// // Add new cheat
// app.post("/cheats", async (req, res) => {
//   try {
//     const { title, content } = req.body;
//     if (!title || !content) return res.status(400).json({ error: "Fill all fields" });

//     const newCheat = new Cheat({ title, content });
//     const savedCheat = await newCheat.save();

//     console.log("Cheat saved:", savedCheat);
//     res.json(savedCheat);
//   } catch (err) {
//     console.error("Error adding cheat:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // Start server
// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // Replace with your actual MongoDB connection string
// const mongoURI = "mongodb+srv://cc:Brahm%40m9908@cluster0.mpmrf2y.mongodb.net/cheatsheetDB?retryWrites=true&w=majority";

// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// const cheatSchema = new mongoose.Schema({
//   title: String,
//   content: String,
// });

// const Cheat = mongoose.model("Cheat", cheatSchema);

// Get all cheats
// app.get("/cheats", async (req, res) => {
//   try {
//     const cheats = await Cheat.find();
//     res.json(cheats);
//   } catch (err) {
//     console.error("Error fetching cheats:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const SUBJECTS = [
//   "JavaScript",
//   "Python",
//   "React",
//   "Node.js",
//   "CSS",
//   "HTML",
//   "MongoDB",
  
//   "Other"
// ];

// function App() {
//   const [subject, setSubject] = useState(SUBJECTS[0]);
//   const [content, setContent] = useState("");
//   const [cheats, setCheats] = useState([]);

//   // Fetch all cheat sheets
//   const fetchCheats = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/cheats");
//       setCheats(res.data);
//     } catch (err) {
//       console.error("Error fetching cheats:", err);
//     }
//   };

//   useEffect(() => {
//     fetchCheats();
//   }, []);

//   // Add new cheat sheet
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!subject || !content) return alert("Fill both fields!");
//     try {
//       const res = await axios.post("http://localhost:5000/cheats", {
//         title: subject,
//         content,
//       });
//       setContent("");
//       fetchCheats();
//     } catch (err) {
//       if (err.response) {
//         alert("Server error: " + err.response.data.error);
//       } else {
//         console.error("Error adding cheat:", err);
//       }
//     }
//   };

//   return (
//     <div style={{ padding: "2rem", fontFamily: "Arial" }}>
//       <h1>Cheat Sheet App</h1>

//       <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
//         <select
//           value={subject}
//           onChange={(e) => setSubject(e.target.value)}
//           style={{ marginRight: "1rem", padding: "0.5rem" }}
//         >
//           {SUBJECTS.map((subj) => (
//             <option key={subj} value={subj}>
//               {subj}
//             </option>
//           ))}
//         </select>
//         <input
//           type="text"
//           placeholder="Content"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           style={{ marginRight: "1rem", padding: "0.5rem" }}
//         />
//         <button type="submit" style={{ padding: "0.5rem 1rem" }}>
//           Add
//         </button>
//       </form>

//       <h2>All Cheat Sheets</h2>
//       <ul>
//         {cheats.map((cheat) => (
//           <li key={cheat._id} style={{ marginBottom: "0.5rem" }}>
//             <strong>{cheat.title}:</strong> {cheat.content}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
// // Add a new cheat
// app.post("/cheats", async (req, res) => {
//   try {
//     console.log("Received POST /cheats with body:", req.body);
//     const { title, content } = req.body;
//     if (!title || !content) {
//       console.log("Missing title or content");
//       return res.status(400).json({ error: "Fill all fields" });
//     }

//     const newCheat = new Cheat({ title, content });
//     const savedCheat = await newCheat.save();
//     console.log("Cheat saved:", savedCheat);
//     res.json(savedCheat);
//   } catch (err) {
//     console.error("Error adding cheat:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const mongoURI = "mongodb+srv://cc:Brahm%40m9908@cluster0.mpmrf2y.mongodb.net/cheatsheetDB?retryWrites=true&w=majority";

// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// const cheatSchema = new mongoose.Schema({
//   title: String,
//   content: String,
// });

// const Cheat = mongoose.model("Cheat", cheatSchema);

// // Get all cheats
// app.get("/cheats", async (req, res) => {
//   try {
//     const cheats = await Cheat.find();
//     res.json(cheats);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Get cheats by subject
// app.get("/cheats/subject/:subject", async (req, res) => {
//   try {
//     const subject = req.params.subject;
//     const cheats = await Cheat.find({ title: subject });
//     res.json(cheats);
//   } catch (err) {
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
//     res.status(500).json({ error: err.message });
//   }
// });

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// require("dotenv").config(); // Add this at the top

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const mongoURI = process.env.MONGO_URI; // Use environment variable

// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// const cheatSchema = new mongoose.Schema({
//   title: String,
//   content: String,
// });

// const Cheat = mongoose.model("Cheat", cheatSchema);

// // Routes
// app.get("/cheats", async (req, res) => {
//   try {
//     const cheats = await Cheat.find();
//     res.json(cheats);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.get("/cheats/subject/:subject", async (req, res) => {
//   try {
//     const subject = req.params.subject;
//     const cheats = await Cheat.find({ title: subject });
//     res.json(cheats);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.post("/cheats", async (req, res) => {
//   try {
//     const { title, content } = req.body;
//     if (!title || !content) return res.status(400).json({ error: "Fill all fields" });

//     const newCheat = new Cheat({ title, content });
//     const savedCheat = await newCheat.save();
//     res.json(savedCheat);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const mongoURI = process.env.MONGO_URI;

// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// const cheatSchema = new mongoose.Schema({
//   title: String,
//   content: String,
// });

// const Cheat = mongoose.model("Cheat", cheatSchema);

// app.get("/cheats", async (req, res) => {
//   try {
//     const cheats = await Cheat.find();
//     res.json(cheats);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.get("/cheats/subject/:subject", async (req, res) => {
//   try {
//     const subject = req.params.subject;
//     const cheats = await Cheat.find({ title: subject });
//     res.json(cheats);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.post("/cheats", async (req, res) => {
//   try {
//     const { title, content } = req.body;
//     if (!title || !content) return res.status(400).json({ error: "Fill all fields" });

//     const newCheat = new Cheat({ title, content });
//     const savedCheat = await newCheat.save();
//     res.json(savedCheat);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// const PORT = process.env.PORT;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // Use environment variable for MongoDB connection string
// const mongoURI = process.env.MONGO_URI;

// // Connect to MongoDB Atlas
// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // Schema & Model
// const cheatSchema = new mongoose.Schema({
//   title: String,
//   content: String,
// });

// const Cheat = mongoose.model("Cheat", cheatSchema);

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

// // Get cheats by subject
// app.get("/cheats/subject/:subject", async (req, res) => {
//   try {
//     const subject = req.params.subject;
//     const cheats = await Cheat.find({ title: subject });
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

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

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