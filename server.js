const express = require("express");
const connectDB = require("./config/db");
const app = express();

// Connect Database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the contact keeper api" })
);

//Define Routes
app.use("/api/users", require("./route/Users"));
app.use("/api/auth", require("./route/Auth"));
app.use("/api/contacts", require("./route/Contact"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
