const appController = require('../Controller/app.controller');
const Authorization = require('../MiddleWare/Authorization')


const router = require('express').Router()

//get Permissions by Portal
router.post('/portal/permission', appController.getPortalPermissions);

// update the color for the company settings
router.post('/colorTheme', Authorization.IsAuthorizedPostRequest, appController.postColorTheme);






module.exports = router;
