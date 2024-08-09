const Employee = require('../Model/employee.model');
const Permissions = require('../Model/permissions.model');
const EmployeeConfig = require('../Model/employee.config.model');

function hasPermission(object, permissionName) {
  for (const key in object) {
    const permissions = object[key];
    if (
      permissions.some(
        (permission) => permission.permissionName === permissionName
      )
    ) {
      return true;
    }
  }
  return false;
}

const IsAuthorizedPostRequest = async (req, res, next) => {
  try {
    const {
      profiles: { permission, employeeId, companyId },
    } = req.body;

    console.log(permission, employeeId, companyId)

    const employee = await Employee.findOne({
      companyId,
      employeeId,
      active: true,
    })
      .select('active')
      .lean();

    if (!employee) {
      res.status(400).json('Employee Not Found!');
      return;
    }

    const employeePermissions = await EmployeeConfig.findOne({ employeeId })
      .select('permissions')
      .lean();

    if (!employeePermissions) {
      res.status(400).json('Unauthorized Access');
      return;
    }

    const result = hasPermission(employeePermissions.permissions, permission);
    if (!result) {
      res.status(400).json('Unauthorized Access');
      return;
    }

    next();
  } catch (error) {
    console.log(error);
    console.log('Error in Authorizing user ');
    next();
  }
};

module.exports = {
  IsAuthorizedPostRequest,
};
