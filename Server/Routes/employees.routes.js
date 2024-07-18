const userController = require('../Controller/employee.controller');


const router = require('express').Router()

//SignUp
router.post('/', userController.postEmployee);

// Login
router.post('/login', userController.getLogIn);

// Forgotten Password
router.post('/forgottenPassword/login', userController.PostForgottenPassword);

//get all users
router.get('/', userController.getAllEmployees)

//getting a user item by id
router.get('/:id', userController.getAnEmployeeByID);
 

//post delete
router.post('/delete:id', userController.postDeleteEmployee);




module.exports = router;
