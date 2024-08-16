const Permission = require('../Model/permissions.model');
const Company = require('../Model/company.model');

const getPortalPermissions = async (req, res) => {
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

const postColorTheme = async (req, res) => {
  try {
    const {
      colorTheme,
      profiles: { companyId },
    } = req.body;
    const company = await Company.findOne({ companyId });
    if (!company) {
      res.status(400).json('Company Not Registered!');
      return;
    }
    company.companyConfig = {
      colorTheme,
    };
    await company.save();
    res.status(200).json('Saved Successfully!');
  } catch (error) {
    console.log(error);
    res.status(400).json('Something Went Wrong!.');
  }
};

module.exports = {
  getPortalPermissions,
  postColorTheme,
};
