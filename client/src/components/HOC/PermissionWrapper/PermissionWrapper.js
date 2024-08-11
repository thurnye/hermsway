import React from 'react';

const PermissionWrapper = ({ children, userPermissions, requiredPermissions, action }) => {

  const hasPermission = userPermissions.some(permission => 
    permission.permissionType === requiredPermissions && permission[action] === "true"
  );



  if (!hasPermission) {
    return null; 
  }

  return <>{children}</>;
};

export default PermissionWrapper;
