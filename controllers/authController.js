import User from "../models/User.js";


// LOGIN USER
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email" });

    // Compare passwords (No encryption)
    if (user.password !== password) return res.status(400).json({ message: "Invalid password" });

    res.json({ message: "Login successful", user: { name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
