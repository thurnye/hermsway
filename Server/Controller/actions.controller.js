const Permission = require('../Model/permissions.model');

const getPortalPermissions = async (req, res, next) => {
  try {
    const portalPermissions = req.body;
    const allPermissions = {};
    for (const element of portalPermissions) {
      const permissions = await Permission.find({
        permissionTypeCode: element.permissionTypeCode,
      });
      allPermissions[element.permissionTypeName] = permissions;
    }

    res.status(200).json(allPermissions);
  } catch (error) {
    console.log(error);
    res.status(400).json('Something Went Wrong!.');
  }
};

module.exports = {
  getPortalPermissions,
};
