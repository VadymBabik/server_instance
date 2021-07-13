import { foo } from "./user.service";

export const getAllUser = async (req, res) => {
  try {
    const data = foo();
    res.status(200).json({
      success: true,
      data: data,
    });
  } catch (e) {
    res.status(404).join(e.message);
  }
};
