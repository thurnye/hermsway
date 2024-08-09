const userController = require('../Controller/employee.controller');
const Authorization = require('../MiddleWare/Authorization')


const router = require('express').Router()

//SignUp
router.post('/', Authorization.IsAuthorizedPostRequest, userController.postEmployee);

// Login
router.post('/login', userController.getLogIn);

// Forgotten Password
router.post('/forgottenPassword/login', userController.PostForgottenPassword);

//get all users
router.post('/all', Authorization.IsAuthorizedPostRequest, userController.getAllEmployees);

//getting a user item by employeeId
router.post('/:employeeId',Authorization.IsAuthorizedPostRequest, userController.getAnEmployeeByID);
 

//post delete
router.post('/delete:id', userController.postDeleteEmployee);




module.exports = router;
