const clientController = require('../Controller/client.controller');


const router = require('express').Router()

//SignUp
router.post('/', clientController.postClient);

// Login
router.post('/login', clientController.getLogIn);

// Forgotten Password
router.post('/forgottenPassword/login', clientController.PostForgottenPassword);


//getting a user item by id
router.get('/:id', clientController.getAClientByID);
 

//post delete
router.post('/delete:id', clientController.postDeleteClient);





module.exports = router;
