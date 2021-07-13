import { Router } from "express";
import UserRout from "./user";

export default () => {
  const router = Router();
  UserRout(router);
  return router;
};
