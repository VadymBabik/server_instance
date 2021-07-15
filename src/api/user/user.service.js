import userModel from "../../model/user.model";
export const createNewUser = async (data) => await userModel.create(data);
export const getUser = async () => await userModel.find();
