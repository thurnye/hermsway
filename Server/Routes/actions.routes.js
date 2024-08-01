const actionsController = require('../Controller/actions.controller');


const router = require('express').Router()

//get Permissions by Portal
router.post('/portal/permission', actionsController.getPortalPermissions);






module.exports = router;
