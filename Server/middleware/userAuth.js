import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized, Please login" });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (decodedToken.id) {
      req.body.userId = decodedToken.id;
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized, Please login" });
    }
    next();
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default userAuth;
