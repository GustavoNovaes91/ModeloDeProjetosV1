import express from "express";
import UserController from "../../controllers/UserController";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("ola servidor");
});
userRouter.post("/users", UserController.create);
userRouter.get("/user/all", UserController.findAll);
userRouter.get("/user/:idUsers", UserController.findOne);
userRouter.put("/user/put/:idUsers", UserController.update);
userRouter.delete("/user/destroy/:idUsers", UserController.destroy);

export { userRouter };
