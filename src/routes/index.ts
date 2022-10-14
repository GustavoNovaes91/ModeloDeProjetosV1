import express from "express";
import testCrudUser from "./testCrudUser/index";
const index = express();

index.use(testCrudUser);

export default index;
