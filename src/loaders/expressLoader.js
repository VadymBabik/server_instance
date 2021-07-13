import express from "express";
import ApiRoutes from "../api";
import bodyParser from "body-parser";
import cors from "cors";

export default () => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());

  app.use(`/api`, ApiRoutes());
  return app;
};
