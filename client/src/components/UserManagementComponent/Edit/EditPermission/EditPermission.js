import React, { useEffect, useState } from 'react';
import styles from './EditPermission.module.css';
import PermissionTable from '../../../PermissionTable/PermissionTable';

const EditPermission = ({
  defaultPermissions,
  permissionOptions,
  getPermissions,
}) => {
  const [permissionCols, setPermissionCols] = useState([]);

  useEffect(() => {
    const allCols = [];
    for (const permissionType in permissionOptions) {
      const permissionTypeCode =
        permissionOptions[permissionType][0]?.permissionTypeCode;
      const colData = {
        permissionType: permissionType,
        permissionTypeCode,
        read: '',
        create: '',
        edit: '',
        del: '',
        viewAll: '',
        modifyAll: '',
        subRows: permissionOptions[permissionType].map((permission) => ({
          permissionType: permission.permissionName,
          permissionTypeCode: permission.permissionTypeCode,
          read: '',
          create: '',
          edit: '',
          del: '',
          viewAll: '',
          modifyAll: '',
        })),
      };
      allCols.push(colData);
    }
    setPermissionCols(allCols);
  }, [permissionOptions]);

  const updatePermissions = (permissionCols, defaultData) => {
    // Helper function to find a category by type
    const findCategory = (categories, type) =>
      categories.find((category) => category.permissionType === type);

    // Helper function to check if all permissions are set to "true"
    const isFullyChecked = (category) => {
      return ['read', 'create', 'edit', 'del', 'viewAll', 'modifyAll'].every(
        (key) => category[key] === 'true'
      );
    };

    // Helper function to update all subRows if parent is fully checked
    const updateSubRowsIfParentChecked = (category) => {
      if (isFullyChecked(category) && category.subRows) {
        category.subRows.forEach((subRow) => {
          ['read', 'create', 'edit', 'del', 'viewAll', 'modifyAll'].forEach(
            (key) => {
              subRow[key] = 'true';
            }
          );
        });
      }
    };

    // Helper function to update permissions recursively
    const updateCategory = (category, defaultCategory) => {
      // Update the main category attributes
      Object.keys(defaultCategory).forEach((key) => {
        if (key !== 'permissions' && key !== 'subRows') {
          category[key] = defaultCategory[key] || category[key];
        }
      });

      // Ensure subRows inherit parent's checked status if parent is fully checked
      updateSubRowsIfParentChecked(category);

      // Update subRows (permissions)
      if (defaultCategory.permissions && category.permissions) {
        defaultCategory.permissions.forEach((defaultPerm) => {
          const existingPerm = findCategory(
            category.permissions,
            defaultPerm.permissionType
          );
          if (existingPerm) {
            updateCategory(existingPerm, defaultPerm);
          } else {
            // If permission doesn't exist, add it
            category.permissions.push(defaultPerm);
          }
        });
      }
    };

    // Iterate over each default category and update the permissionCols
    defaultData.forEach((defaultCategory) => {
      const existingCategory = findCategory(
        permissionCols,
        defaultCategory.permissionType
      );
      if (existingCategory) {
        updateCategory(existingCategory, defaultCategory);
      } else {
        // If category doesn't exist, add it
        permissionCols.push(defaultCategory);
      }
    });
  };

  useEffect(() => {
    updatePermissions(permissionCols, defaultPermissions);
  }, [permissionCols, defaultPermissions]);

  return (
    <div className={styles.EditPermission}>
      <PermissionTable
        tableData={permissionCols}
        getPermissions={getPermissions}
      />
    </div>
  );
};

export default EditPermission;
