import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/users", (req, res) => {
  res.send(data.users);
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});

const port = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`Serve at http://localhost:${port}`);
});
