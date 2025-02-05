//require the captain controllers
const captainController = require('../controllers/captain.controller');
const { check } = require('express-validator');
const express = require('express');
const router = express.Router();

//create a new captain
router.post('/register',[
    check('email').isEmail().withMessage('Please enter a valid email address'),
    check('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 characters long'),
    check('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
    check('vehicle.color').isLength({min:3}).withMessage('Vehicle color must be at least 3 characters long'),
    check('vehicle.plate').isLength({min:3}).withMessage('Vehicle plate must be at least 3 characters long'),
    check('vehicle.capacity').isInt({min:1}).withMessage('Vehicle capacity must be atleat 1'),
    check('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Vehicle type must be either car, motorcycle or auto')
],captainController.registerCaptain);

router.post('/login',[
    check('email').isEmail().withMessage('Please enter a valid email address'),
    check('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
],captainController.loginCaptain);



//export the captain routes
module.exports = router;