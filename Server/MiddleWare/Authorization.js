const Employee = require('../Model/employee.model');
const Permissions = require('../Model/permissions.model');
const EmployeeConfig = require('../Model/employee.config.model');

function hasPermission(userPermissions, requiredPermissions, action ) {
  console.log(userPermissions, requiredPermissions, action)
  const hasPermission = userPermissions.some(permission => 
    permission.permissionType === requiredPermissions && permission[action] === "true"
  );
  return hasPermission;
}

//get permissions for portals
const getPermissionsByType = (data, typeCode) => {
  console.log(typeCode)
  let result = [];
  data.forEach(item => {
    if (item.permissionTypeCode === typeCode) {
      result.push(item);
    } else if (item.subRows && item.subRows.length > 0) {
      const filteredSubRows = item.subRows.filter(
        subItem => subItem.permissionTypeCode === typeCode
      );
      if (filteredSubRows.length > 0) {
        result.push(...filteredSubRows);
      }
    }
  });
  return result;
};

const IsAuthorizedPostRequest = async (req, res, next) => {
  try {
    const {
      profiles: { permissionTypeCode, permission, action, employeeId, companyId },
    } = req.body;

    console.log('profiles', {
      permissionTypeCode,
      permission,
      action,
      employeeId,
      companyId,
    });

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

    const userPermission = await EmployeeConfig.findOne({ employeeId })
      .select('permissions')
      .lean();
    // console.log(userPermission);

    if (!userPermission) {
      res.status(401).json('Restricted Access');
      return;
    }

    const permissionsByType = getPermissionsByType(userPermission.permissions, permissionTypeCode)

    const result = hasPermission(
      permissionsByType,
      permission,
      action
    );
    if (!result) {
      res.status(401).json('Restricted Access/Action');
      return;
    }
    next();
  } catch (error) {
    console.log('Error in Authorizing user! ');
    console.log(error);
    res.status(401).json('Restricted Access/Action');
  }
};

module.exports = {
  IsAuthorizedPostRequest,
};
