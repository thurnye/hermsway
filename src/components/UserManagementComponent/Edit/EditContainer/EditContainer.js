import React, { useEffect, useState } from 'react';
import styles from './EditContainer.module.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import EditPortal from '../EditPortal/EditPortal';
import EditPermission from '../EditPermission/EditPermission';
import EditDashboard from '../EditDashboard/EditDashboard';
import EditProfile from '../EditProfile/EditProfile';
import RequestFeedback from '../../../RequestFeedback/RequestFeedback';
import services from '../../../../util/employee.services';
import appServices from '../../../../util/app.services';
import CustomizedButton from '../../../CustomizedButton/CustomizedButton';
import {
  permissionActions,
  permissionNames,
} from '../../../../util/permissions.services';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';


const EditContainer = ({ employeeInfo }) => {
  const location = useLocation();
  const permissionTypeCode = location.state?.permissionTypeCode

  const [value, setValue] = React.useState('1');
  const user = useSelector((state) => state.userLog.user);
  const company = useSelector((state) => state.company.companyProfile);
  const [{ profile, permissions, portals, dashboards }, setData] = useState({
    profile: null,
    permissions: [],
    portals: [],
    dashboards: null,
  });
  const [allDashboards, setAllDashboards] = useState();
  const [permissionOptions, setPermissionOptions] = useState([]);

  // Feedback States
  const [open, setOpen] = useState(false);
  const [reqLoading, setReqLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (employeeInfo) {
      const {
        employee,
        employeeConfigs: { permissions, dashboards, portals },
      } = employeeInfo;

      console.log(permissions);

      setAllDashboards(dashboards);
      setData({
        profile: employee,
        permissions,
        portals,
        dashboards,
      });
    }
  }, [employeeInfo]);

  const getData = (newData, type) => {
    if (type === 'dashboard') {
      setAllDashboards(newData);
    } else {
      setData((prev) => ({
        ...prev,
        [type]: newData,
      }));
    }
  };

  const handleProfileUpdate = (updatedProfile) => {
    setData((prev) => ({
      ...prev,
      profile: updatedProfile,
    }));
  };

  const fetchPortalPermissions = async () => {
    try {
      setIsError(false);
      setSaved(false);
      setMessage('');
      setShowCancel(false);
      const allPermissions = await appServices.getPortalPermissions(portals);
      setPermissionOptions(allPermissions.data);
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
    if (portals.length > 0) {
      fetchPortalPermissions();
    } else {
      setPermissionOptions([]);
    }
  }, [portals]);


  const handleSave = async () => {
    try {
      console.log({ profile, permissions, portals, dashboards });
      setIsError(false);
      setSaved(false);
      setReqLoading(true);
      setOpen(true);
      setMessage('');
      setShowCancel(false);

      const newUserInfo = {
        ...profile,
        permissions,
        dashboards,
        portals,
        active: true,
      };
      
      // logged in user profile
      const profiles = {
        employeeId: user.employeeId,
        companyId: company.companyId,
        permission: permissionNames.user,
        action: profile.employeeId
        ? permissionActions.edit
        : permissionActions.create,
        permissionTypeCode: permissionTypeCode
      };

      // console.log(selectedComponents);
      console.log(newUserInfo);
      const result = await services.postEmployee({ newUserInfo, profiles });
      console.log(result);
      setReqLoading(false);
      setSaved(true);
      setMessage(
        profile.employeeId
          ? 'Updated Successfully'
          : 'User Created Successfully'
      );
      setOpen(!open);
    } catch (error) {
      console.log(error);
      const errMsg = error.response?.data;
      setMessage(errMsg);
      setReqLoading(false);
      setShowCancel(false);
      setSaved(false);
      setIsError(true);
      setOpen(!open);
    } finally {
    }
  };

  return (
    <div className={styles.Roles}>
      <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ textAlign: 'end' }}>
          <CustomizedButton
            variant={'text'}
            label={'save'}
            id='join-group-button'
            disableElevation
            sx={{
              borderRadius: 0,
              textTransform: 'none',
            }}
            onClick={handleSave}
          />
        </Box>
        <Box>
          <EditProfile
            defaultProfile={profile}
            setProfile={handleProfileUpdate}
          />
        </Box>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant='scrollable'
                scrollButtons
                allowScrollButtonsMobile
                aria-label='scrollable auto tabs'
              >
                <Tab label='portal Access' value='1' />
                <Tab label='permissions' value='2' />
                <Tab label='Dashboard Access' value='3' />
              </Tabs>
            </Box>
            <TabPanel value='1'>
              <EditPortal defaultPortals={portals} setPortals={getData} />
            </TabPanel>
            <TabPanel value='2'>
              <EditPermission
                defaultPermissions={permissions}
                permissionOptions={permissionOptions}
                getPermissions={getData}
              />
            </TabPanel>
            <TabPanel value='3'>
              <EditDashboard
                dashboards={allDashboards}
                getSelectedDashboards={getData}
              />
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
      <RequestFeedback
        successMessage={message}
        errorMessage={message}
        open={open}
        setOpen={setOpen}
        loading={reqLoading}
        isError={isError}
        saved={saved}
        // savingMessage={`Creating New ${selectedRoles.label}`}
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

export default EditContainer;
