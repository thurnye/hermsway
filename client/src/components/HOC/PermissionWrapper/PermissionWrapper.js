import React from 'react';

const PermissionWrapper = ({ children, userPermissions, requiredPermissions }) => {
  
  const hasPermission = userPermissions.some(permission =>
    permission.permissionName === requiredPermissions
  );


  if (!hasPermission) {
    return; 
  }

  return <>{children}</>;
};

export default PermissionWrapper;
