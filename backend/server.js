import express from "express";
import mongoose from "mongoose";
// import data from "./data.js";
import userRouter from "./routers/userRouter.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost/interviewTest", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`Serve at http://localhost:${port}`);
});
