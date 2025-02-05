//require captain model
const captainModel = require("../models/captain.model");
//require the captain service
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");
module.exports.registerCaptain = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { fullname, email, password, vehicle } = req.body;
    const isCaptainAlreadyRegistered = await captainModel.findOne({ email });
    if (isCaptainAlreadyRegistered) {
      return res.status(400).send("user already registered");
    }
    const hashedPassword = await captainModel.hashPassword(password);
    const captain = await captainService.createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });
    const token = await captain.generateAuthToken();
    res.status(201).send({ captain, token });
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports.loginCaptain = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
    {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const captain = await captainModel.findOne({ email }).select("+password");
    if (!captain)
    {
      return res.status(400).send("Invalid email or password");
    }
    const isPasswordCorrect = await captain.comparePassword(password);
    if (!isPasswordCorrect)
    {
      return res.status(400).send("Invalid email or password");
    }
    const token = captain.generateAuthToken();
    res.cookie('token',token);
    res.status(200).send({ token, captain });
  } 
  catch (error)
  {
    res.status(400).send(error);
  }
};
