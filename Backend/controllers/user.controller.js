//requiring the user model
const userModel = require("../models/user.model");
//require the user service
const userService = require("../services/user.service");
//require the express-validator
const { validationResult } = require("express-validator");
module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { firstname, lastname, email, password } = req.body;
    const hashedPassword = await userModel.hashPassword(password);
    const user = await userService.createUser({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });
    const token = await userModel.generateAuthToken(user);
    return res.status(201).json({ token,user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
