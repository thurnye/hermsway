import React, { useEffect, useState } from 'react';
import styles from './EditEmployee.module.css';
import { useLocation, useNavigate } from 'react-router';
import PermissionWrapper from '../../HOC/PermissionWrapper/PermissionWrapper';
import { getPermissionsByType } from '../../../util/helperFunc';
import { useSelector } from 'react-redux';
import {
  permissionActions,
  permissionNames,
} from '../../../util/permissions.services';
import UnAuthorizedAccess from '../../UnAuthorizedAccess/UnAuthorizedAccess';
import EditContainer from '../Edit/EditContainer/EditContainer';
import { portalsLinks } from '../../../util/globalVar';
import { Box, Container } from '@mui/material';
import BackNavigation from '../../BackNavigation/BackNavigation';
import RequestFeedback from '../../RequestFeedback/RequestFeedback';
import services from '../../../util/employee.services';

const EditEmployee = () => {
  const location = useLocation();
  const employeeId = location.state?.employeeId;
  const navigate = useNavigate();
  const permissionTypeCode = location.state?.permissionTypeCode || 'undefined';
  const userPermissions = useSelector((state) => state.userLog.permissions);
  const permissions = getPermissionsByType(userPermissions, permissionTypeCode);
  const user = useSelector((state) => state.userLog.user);
  const company = useSelector((state) => state.company.companyProfile);
  const [employeeInfo, setEmployeeInfo] = useState();

  // Feedback States
  const [open, setOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const [message, setMessage] = useState('');


  const fetchUserData = async (id) => {
    try {
      setIsError(false);
      setSaved(false);
      setMessage('');
      setShowCancel(false);
      const profiles = {
        employeeId: user.employeeId,
        companyId: company.companyId,
        permission: permissionNames.edit_employee_details,
      };
      const result = await services.findEmployeeById(id, { profiles });
      setEmployeeInfo(result.data);
    } catch (error) {
      console.log('ERROR:::', error);
      const errMsg = error.response.data;
      console.log(error.response.data);
      setMessage(errMsg);
      setShowCancel(false);
      setSaved(false);
      setIsError(true);
      setOpen(!open);
    } 
  };

  useEffect(() => {
    if (employeeId) {
      fetchUserData(employeeId);
    } 
  }, [employeeId]);

  const handleBackClick = () => {
    navigate(`/${portalsLinks.UserManagement}`);
  };

  return (
    <div className={styles.EditEmployee}>
      <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ my: 2 }}>
          <BackNavigation
            variant='text'
            label={'Back'}
            onClick={handleBackClick}
          />
        </Box>
        <PermissionWrapper
          userPermissions={permissions}
          requiredPermissions={permissionNames.user}
          action={permissionActions.edit}
        >
          <EditContainer employeeInfo={employeeInfo} />
        </PermissionWrapper>

        <UnAuthorizedAccess
          userPermissions={permissions}
          requiredPermissions={permissionNames.user}
          action={permissionActions.create}
        />
      </Container>

      <RequestFeedback
        successMessage={message}
        errorMessage={message}
        open={open}
        setOpen={setOpen}
        loading={false}
        isError={isError}
        saved={saved}
        savingMessage={`Updating...`}
        showCancel={showCancel}
        handleError={() => setOpen(!open)}
        errorBtnLabel={'close'}
        handleSuccess={() => {
          setOpen(!open);
        }}
        successBtnLabel={'close'}
      />
    </div>
  );
};

export default EditEmployee;
