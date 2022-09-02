import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/users/:id", (req, res) => {
  const user = data.users.find((x) => x._id === req.params.id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: "User not Found" });
  }
});

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
