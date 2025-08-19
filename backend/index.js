const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8008;

// Middleware
app.use(cors());
app.use(express.json());

// Sample data
let doctors = [
  { id: 1, name: "Basarath", specialization: "Cardiologist" },
  { id: 2, name: "Roshan", specialization: "Dermatologist" },
  { id: 3, name: "Rifaya", specialization: "Neurologist" }
];

// Routes
app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.get("/doctors", (req, res) => {
  res.json(doctors);
});

// Start server
app.listen(PORT, () => {
  console.log(`■ Server running on http://localhost:${PORT}`);
});
