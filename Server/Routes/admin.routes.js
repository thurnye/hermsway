const adminController = require('../Controller/admin.controller');


const router = require('express').Router()

//SignUp
router.post('/', adminController.postAdmin);

// Login
router.post('/login', adminController.getLogIn);

// Forgotten Password
router.post('/forgottenPassword/login', adminController.PostForgottenPassword);


//getting a user item by id
router.get('/:id', adminController.getAnAdminByID);
 

//post delete
router.post('/delete:id', adminController.postDeleteAdmin);




module.exports = router;
