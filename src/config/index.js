import dotenv from "dotenv";

const environment = dotenv.config();
if (!environment) {
  throw new Error(`.env can not be found!`);
}
export default {
  MONGO_URI: process.env.MONGO_DB_URI,
  PORT: process.env.PORT || 3010,
};
