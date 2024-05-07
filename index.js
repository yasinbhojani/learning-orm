const express = require("express");
const sequelize = require("./config/db.config.js");
const user = require("./models/user.model.js");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sequelize INIT
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/user", async (req, res) => {
  const { first_name, last_name, dob } = req.body;
  const resp = await user.create({ first_name, last_name, dob });
  res.json(resp);
});

app.get("/users", async (req, res) => {
  try {
    const users = await user.findAll();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "your request failed" });
  }
});

app.listen(8000, () => {
  console.log("server listening on port 8000");
});
