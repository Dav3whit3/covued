import mongoose from "mongoose";
import { User } from "../../models/User.model.js";
import bcrypt from "bcryptjs";
import { renderWithErrors } from "../../utils/auth.utils.js";

const Login = async (req, res, next) => {

	const { email, password } = req.body;
	const user = { email, password};
  
	const userOk = await isUserRegistered(user.email);
	if (!userOk) {
		renderWithErrors(res, { email: "Email not registered" }, user);
		return;
	}

	const passOk = isValidPassword(user.password, userOk.passwordHash);
	if (!passOk) {
		renderWithErrors(res, { password: "Incorrect Password" }, user);
		return;
	}

	req.session.currentUser = userOk._id;
	res.redirect(301, "/");
};


const isUserRegistered = async (email) => {
  try {
    const userSearch = await User.findOne({ email });
    return userSearch;
  }
  catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return false
    }
  }
};


const isValidPassword = (password, passwordHash) => {
	return bcrypt.compareSync(password, passwordHash);
};



export { Login }; 