import express from "express";
import { userRouter } from "./userRoutes";
const index = express();

index.use(userRouter);

export default index;
