const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MySQL connection (Render / Railway)
const db = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT
});

db.connect(err => {
  if (err) {
    console.error("❌ MySQL Error:", err);
    return;
  }
  console.log("✅ MySQL Connected");
});

// ✅ API
app.post("/login", (req, res) => {
  const { email, phone, service } = req.body;

  if (!email || !phone || !service) {
    return res.status(400).json({ message: "All fields required" });
  }

  const sql = "INSERT INTO leads (email, phone, service) VALUES (?, ?, ?)";
  db.query(sql, [email, phone, service], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "DB insert failed" });
    }
    res.status(201).json({ message: "Lead saved successfully" });
  });
});

// ✅ IMPORTANT: Render PORT
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
