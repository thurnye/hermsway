import React from 'react';

const PermissionWrapper = ({ children, userPermissions, requiredPermissions, action }) => {
console.log(userPermissions, requiredPermissions, action)
  const hasPermission = userPermissions.some(permission => 
    permission.permissionType === requiredPermissions && permission[action] === "true"
  );

console.log(hasPermission)

  if (!hasPermission) {
    return null; 
  }

  return <>{children}</>;
};

export default PermissionWrapper;
