const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔹 MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Root",
  database: "spotlight_db"
});

db.connect(err => {
  if (err) {
    console.error("❌ MySQL Error:", err);
    return;
  }
  console.log("✅ MySQL Connected");
});

// 🔹 API: Save login data
app.post("/login", (req, res) => {
  const { email, phone, service } = req.body;

  const sql = "INSERT INTO leads (email, phone, service) VALUES (?, ?, ?)";
  db.query(sql, [email, phone, service], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "DB insert failed" });
    } else {
      res.status(201).json({ message: "Lead saved" });
    }
  });
});

// 🔹 Start server
app.listen(5000, () => {
  console.log("🚀 Server running at http://localhost:5000");
});
