import express from "express";
import expressAsyncHandler from "express-async-handler";
// import data from "../data.js";
import User from "../models/userModel.js";

const userRouter = express.Router();

userRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    res.send(users);
  })
);

// userRouter.get(
//   "/seed",
//   expressAsyncHandler(async (req, res) => {
//     // await User.remove({});
//     const createdUsers = await User.insertMany(data.users);
//     res.send({ createdUsers });
//   })
// );

userRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: "User Not Found" });
    }
  })
);

userRouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const user = new User({
      name: req.body.name,
      lastName: req.body.lastName,
      cpf: req.body.cpf,
      nationality: req.body.nationality,
      cep: req.body.cep,
      state: req.body.state,
      city: req.body.city,
      street: req.body.street,
      email: req.body.email,
      tel: req.body.tel,
    });
    const createdUser = await user.save();
    res.send({
      name: createdUser.name,
      lastName: createdUser.lastName,
      cpf: createdUser.cpf,
      nationality: createdUser.nationality,
      cep: createdUser.cep,
      state: createdUser.state,
      city: createdUser.city,
      street: createdUser.street,
      email: createdUser.email,
      tel: createdUser.tel,
    });
  })
);

export default userRouter;
