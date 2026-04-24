import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
import User from "../models/User.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleLogin = async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    const { sub, name, email, picture } = payload;

    // 🔍 1. Check if user exists
    let user = await User.findOne({ email });

    // 🆕 2. Create user if not exists
    if (!user) {
      user = await User.create({
        googleId: sub,
        name,
        email,
        picture,
        role: "user", // default role
      });
    }

    // 🔑 3. Create secure JWT (IMPORTANT: use DB id)
    const appToken = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    res.json({
      token: appToken,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Invalid Google token" });
  }
};
