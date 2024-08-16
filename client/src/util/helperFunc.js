import { jwtDecode } from 'jwt-decode';

//JWT Token Decode
export const decodeJWToken = (token) => {
  return jwtDecode(token);
};

// Random Int for Keys
export const getRandomInt = () => {
  return Math.floor(Math.random() * 500000000000);
};

//get permissions for portals
export const getPermissionsByType = (data, typeCode) => {
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

export const  hasPermission = (userPermissions, requiredPermissions, action ) => {
  console.log(userPermissions, requiredPermissions, action)
  const hasPermission = userPermissions.some(permission => 
    permission.permissionType === requiredPermissions && permission[action] === "true"
  );
  return hasPermission;
}
;

// Output example: "Thu, Sep 8, 2023"
export const getDateShort = (dt) => {
  const systemLocale = navigator.language;
  const date = new Date(dt);

  // Specify the desired locale and options
  const locale = systemLocale; // French (France)
  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };

  // Format the date as a string with the specified locale and options
  const dateString = date.toLocaleDateString(locale, options);

  return dateString;
};
