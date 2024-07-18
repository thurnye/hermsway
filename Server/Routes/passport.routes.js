const googleAuthController = require('../Controller/passport.controller');


const router = require('express').Router()



// Login Google
router.post('/google/login', googleAuthController.getGoogleLogIn);


module.exports = router;
