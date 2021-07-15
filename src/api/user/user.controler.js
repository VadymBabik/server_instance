import { createNewUser, getUser } from "./user.service";

export const createUser = async (req, res) => {
  const { body } = req;
  try {
    const newUser = await createNewUser(body);
    res.status(200).json(newUser);
  } catch (e) {
    res.status(404).join(e.message);
  }
};
export const getAllUser = async (req, res) => {
  try {
    const allUsers = await getUser();
    res.status(200).json([...allUsers]);
  } catch (e) {
    res.status(404).join(e.message);
  }
};
