import React from 'react';
import styles from './UserManagement.module.css';
import Box from '@mui/material/Box';
import { Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { getPermissionsByType } from '../../../util/helperFunc';
import { useSelector } from 'react-redux';
import PermissionWrapper from '../../../components/HOC/PermissionWrapper/PermissionWrapper';
import { permissionActions, permissionNames } from '../../../util/permissions.services';
import EmployeeLists from '../../../components/UserManagementComponent/EmployeeLists/EmployeeLists';

const UserManagement = ({ permissionTypeCode }) => {
  const userPermissions = useSelector((state) => state.userLog.permissions);

  const permissions = getPermissionsByType(userPermissions, permissionTypeCode);
  

  return (
    <div className={styles.UserManagement}>
      <Box sx={{ textAlign: 'end' }}>
        <Container maxWidth='lg'>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <PermissionWrapper
                  userPermissions={permissions}
                  requiredPermissions={permissionNames.user}
                  action={permissionActions.create}
                >
                  <Typography gutterBottom sx={{ mx: 3 }}>
                    <Link to='new-employee'>Add New Employee</Link>
                  </Typography>
                </PermissionWrapper>
                <Typography gutterBottom sx={{ mx: 3 }}>
                  <Link to='roles'>Roles and Permissions</Link>
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Box>
            <EmployeeLists permissions={permissions} permissionTypeCode={permissionTypeCode}/>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default UserManagement;
