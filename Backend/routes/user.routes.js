const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
//require the user controller
const userController = require("../controllers/user.controller");
router.post(
  "/register",
  [
    check("email").isEmail().withMessage("Please enter a valid email address"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    check("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
  ],
  userController.registerUser
);
router.post(
  "/login",
  [
    check("email").isEmail().withMessage("Please enter a valid email address"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  userController.loginUser
);

module.exports = router;
