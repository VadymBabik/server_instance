import { Router } from "express";
import { createUser, getAllUser } from "./user.controler";

const route = Router();
export default function (root) {
  root.use("/users", route);
  route.get("/", getAllUser);
  route.post("/", createUser);
}
