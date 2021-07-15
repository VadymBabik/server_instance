import mongoose from "mongoose";
const User = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  desc: { type: String, required: true },
  avatar: { type: String, default: null },
});
export default mongoose.model("User", User);
