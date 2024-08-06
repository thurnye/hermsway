import React, { useEffect, useState } from 'react';
import styles from './CreateUser.module.css';
import DOMPurify from 'dompurify';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BackNavigation from '../../BackNavigation/BackNavigation';
import {
  portalsLinks,
  roles,
  allPortals,
  dashboardSections,
} from '../../../util/globalVar';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import services from '../../../util/employee.services';
import actionServices from '../../../util/actions.services';
import { decodeJWToken } from '../../../util/helperFunc';
import { userActions } from '../../../store/userSlice';
import Spinner from '../../Spinner/Spinner';
import RequestFeedback from '../../RequestFeedback/RequestFeedback';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { permissionNames } from '../../../util/permissions.services';

const defaultTheme = createTheme();

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const CreateUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userLog.user);
  const company = useSelector((state) => state.company.companyProfile);
  const location = useLocation();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const id = location.state?.id;

  // Feedback States
  const [open, setOpen] = useState(false);
  const [reqLoading, setReqLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const [message, setMessage] = useState('');

  const [openCollapse, setOpenCollapse] = React.useState();
  const [selectedRoles, setSelectedRoles] = useState('');
  const [permissionOptions, setPermissionOptions] = useState([]);
  const [selectedPermissions, setSelectedPermissions] = useState({});
  const [selectedDashboards, setSelectedDashboards] = useState({});
  const [selectedPortals, setSelectedPortals] = useState([]);
  const [selectedComponents, setSelectedComponents] = useState({
    portals: [],
  });

  const handleRoleChange = (event) => {
    const {
      target: { value },
    } = event;
    console.log(event.target);
    setSelectedRoles(roles.find((el) => el.label === value));
  };

  const handleSelectChange = (event, type) => {
    const {
      target: { value },
    } = event;

    setSelectedPortals(value);
    console.log(value);
    // setSelectedComponents((prevState) => ({
    //   ...prevState,
    //   [type]: typeof value === 'string' ? value.split(',') : value,
    // }));
  };
  console.log(selectedPortals);

  const sanitizeInput = (input) => {
    return DOMPurify.sanitize(input);
  };


  const fetchUserData = async (id) => {
    try {
      setIsError(false);
      setSaved(false);
      setMessage('');
      setShowCancel(false);
      const result = await services.findAdminById(id);
      setData(result.data);
    } catch (error) {
      console.log('ERROR:::', error);
      const errMsg = error.response.data;
      console.log(error.response.data);
      setMessage(errMsg);
      setShowCancel(false);
      setSaved(false);
      setIsError(true);
      setOpen(!open);
    } finally {
      setLoading(false);
    }
  };

  const fetchPortalPermissions = async (id) => {
    try {
      const portals = allPortals.filter((portal) =>
        selectedPortals.includes(portal.permissionTypeName)
      );
      console.log('portals::', portals);
      setIsError(false);
      setSaved(false);
      setMessage('');
      setShowCancel(false);
      const allPermissions = await actionServices.getPortalPermissions(portals);
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedPortals.length > 0) {
      fetchPortalPermissions(id);
    } else {
      setPermissionOptions([]);
    }
  }, [selectedPortals]);

  useEffect(() => {
    if (id) {
      fetchUserData(id);
    } else {
      setLoading(false);
    }
  }, [id]);

  const getFullSelectedPermissions = (selectedPermission, permissions) => {
    let result = {};

    for (let category in selectedPermission) {
      if (permissions[category]) {
        result[category] = permissions[category].filter((perm) =>
          selectedPermission[category].includes(perm.permissionName)
        );
      }
    }

    return result;
  };

  const getFullSelectedDashboards = (selectedDashboards) => {
    let result = {};

    for (let category in selectedDashboards) {
      if (dashboardSections[category]) {
        result[category] = dashboardSections[category].filter((widget) =>
          selectedDashboards[category].includes(widget.widgetName)
        );
      }
    }

    return result;
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setIsError(false);
      setSaved(false);
      setReqLoading(true);
      setOpen(true);
      setMessage('');
      setShowCancel(false);
      const data = new FormData(event.currentTarget);
      const newUserInfo = {
        ...(id && { id }),
        firstName: sanitizeInput(data.get('firstName')),
        lastName: sanitizeInput(data.get('lastName')),
        email: sanitizeInput(data.get('email')),
        roles: roles.find((role) => role.value === selectedRoles.value),
        permissions: getFullSelectedPermissions(
          selectedPermissions,
          permissionOptions
        ),
        dashboards: getFullSelectedDashboards(selectedDashboards),
        portals: allPortals.filter((portal) =>
          selectedPortals.includes(portal.permissionTypeName)
        ),
      };
      const profiles = {
        employeeId: user.employeeId,
        companyId: company.companyId,
        permission: permissionNames.create_employee,
      };          

      console.log(selectedComponents);
      console.log(newUserInfo);
      const result = await services.postEmployee({ newUserInfo, profiles });
      console.log(result);
      setReqLoading(false);
      setSaved(true);
      setMessage(id ? 'Updated Successfully' : 'User Created Successfully');
    } catch (error) {
      console.log(error);
      const errMsg = error.response?.data;
      setMessage(errMsg);
      setReqLoading(false);
      setShowCancel(false);
      setSaved(false);
      setIsError(true);
      setOpen(!open);
    }
  };

  const handleBackClick = () => {
    navigate(`/${portalsLinks.UserManagement}`);
  };

  const handleClick = (category) => {
    if (openCollapse === category) {
      setOpenCollapse('');
    } else {
      setOpenCollapse(category);
    }
  };

  const handlePermissionChange = (category, value) => {
    setSelectedPermissions((prevPermissions) => {
      const categoryPermissions = prevPermissions[category] || [];
      const newPermissions = categoryPermissions.includes(value)
        ? categoryPermissions.filter((perm) => perm !== value)
        : [...categoryPermissions, value];

      return {
        ...prevPermissions,
        [category]: newPermissions,
      };
    });
  };

  const handleDashboardManagementChange = (category, value) => {
    setSelectedDashboards((prevDashboards) => {
      const categoryDashboards = prevDashboards[category] || [];
      const newDashboards = categoryDashboards.includes(value)
        ? categoryDashboards.filter((perm) => perm !== value)
        : [...categoryDashboards, value];

      return {
        ...prevDashboards,
        [category]: newDashboards,
      };
    });
  };

  const groupSelected = (selectedPermissions) => {
    const grouped = {};
    Object.entries(selectedPermissions).forEach(([category, permissions]) => {
      if (permissions.length > 0) {
        grouped[category] = permissions;
      }
    });
    return grouped;
  };

  const renderSelected = (selected) => {
    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
        {Object.entries(selected).map(([category, permissions]) => (
          <Box key={category} sx={{ mr: 2, textWrap: 'wrap' }}>
            <strong>{category}:</strong>
            {permissions.map((permission) => (
              <Chip key={permission} label={permission} sx={{ my: 1, ml: 1 }} />
            ))}
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <div className={styles.Roles}>
      <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ my: 2 }}>
          <BackNavigation
            variant='text'
            label={'Back'}
            onClick={handleBackClick}
          />
        </Box>
        <Box>
          <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            {loading ? (
              <Spinner />
            ) : (
              <Box
                component='form'
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      size='small'
                      autoComplete='given-name'
                      name='firstName'
                      defaultValue={data?.firstName || ''}
                      required
                      fullWidth
                      id='firstName'
                      label='First Name'
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      size='small'
                      required
                      fullWidth
                      id='lastName'
                      defaultValue={data?.lastName || ''}
                      label='Last Name'
                      name='lastName'
                      autoComplete='family-name'
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      size='small'
                      required
                      fullWidth
                      defaultValue={data?.email || ''}
                      id='email'
                      label='Email Address'
                      name='email'
                      autoComplete='email'
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id='roles-label'>Roles</InputLabel>
                      <Select
                        size='small'
                        labelId='roles-label'
                        id='roles'
                        value={selectedRoles.label}
                        onChange={handleRoleChange}
                        input={<OutlinedInput label='Roles' />}
                        renderValue={(selected) => selected}
                        MenuProps={MenuProps}
                      >
                        {roles.map((role) => (
                          <MenuItem key={role.value} value={role.label}>
                            <Checkbox
                              checked={selectedRoles.label === role.label}
                            />
                            {role.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id='portal-management-label'>
                        Portal Management
                      </InputLabel>
                      <Select
                        labelId='portal-management-label'
                        id='portal-management'
                        multiple
                        value={selectedPortals}
                        onChange={(e) => handleSelectChange(e, 'portals')}
                        input={<OutlinedInput label='Portal Management' />}
                        renderValue={(selected) => (
                          <Box
                            sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}
                          >
                            {selected.map((value) => (
                              <Chip key={value} label={value} />
                            ))}
                          </Box>
                        )}
                        MenuProps={MenuProps}
                      >
                        {allPortals.map((option) => (
                          <MenuItem
                            key={option.permissionTypeName}
                            value={option.permissionTypeName}
                          >
                            <Checkbox
                              checked={
                                selectedPortals.indexOf(
                                  option.permissionTypeName
                                ) > -1
                              }
                            />
                            {option.permissionTypeName}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id='Dashboard-management-label'>
                        Dashboard Management
                      </InputLabel>
                      <Select
                        labelId='Dashboard-management-label'
                        id='Dashboard-management'
                        multiple
                        input={<OutlinedInput label='Dashboard Management' />}
                        value={Object.values(selectedDashboards).flat()}
                        renderValue={() =>
                          renderSelected(groupSelected(selectedDashboards))
                        }
                        MenuProps={MenuProps}
                      >
                        {Object.entries(dashboardSections).map(
                          ([category, widgets]) => (
                            <List
                              component='nav'
                              aria-labelledby='nested-list-subheader'
                              sx={{ mb: -2 }}
                              key={category}
                            >
                              <ListItemButton
                                onClick={() => handleClick(category)}
                              >
                                <Checkbox
                                  checked={
                                    selectedDashboards[category]?.length ===
                                    widgets.length
                                  }
                                  indeterminate={
                                    selectedDashboards[category]?.length > 0 &&
                                    selectedDashboards[category]?.length <
                                      widgets.length
                                  }
                                />
                                <ListItemText primary={category} />
                                {openCollapse === category ? (
                                  <ExpandLess />
                                ) : (
                                  <ExpandMore />
                                )}
                              </ListItemButton>
                              <Collapse
                                in={openCollapse === category}
                                timeout='auto'
                                unmountOnExit
                              >
                                {widgets.map((widget) => (
                                  <MenuItem
                                    key={widget.widgetName}
                                    value={widget.widgetName}
                                    sx={{ ml: 4 }}
                                  >
                                    <Checkbox
                                      checked={selectedDashboards[
                                        category
                                      ]?.includes(widget.widgetName)}
                                      onChange={() =>
                                        handleDashboardManagementChange(
                                          category,
                                          widget.widgetName
                                        )
                                      }
                                    />
                                    <ListItemText primary={widget.widgetName} />
                                  </MenuItem>
                                ))}
                              </Collapse>
                            </List>
                          )
                        )}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id='permissions-label'>
                        Permissions
                      </InputLabel>
                      <Select
                        labelId='permissions-label'
                        id='permissions'
                        multiple
                        input={<OutlinedInput label='Permissions' />}
                        value={Object.values(selectedPermissions).flat()}
                        renderValue={() =>
                          renderSelected(groupSelected(selectedPermissions))
                        }
                        MenuProps={MenuProps}
                      >
                          {permissionOptions.length === 0 && <MenuItem disabled value="" sx={{
                              display:'flex',
                              justifyContent: 'center'
                            }}>
                            <em >Choose a portal to set permissions</em>
                          </MenuItem>}
                        {Object.entries(permissionOptions).map(
                          ([category, permissions]) => (
                            <List
                              component='nav'
                              aria-labelledby='nested-list-subheader'
                              sx={{ mb: -2 }}
                              key={category}
                            >
                              <ListItemButton
                                onClick={() => handleClick(category)}
                              >
                                <Checkbox
                                  checked={
                                    selectedPermissions[category]?.length ===
                                    permissions.length
                                  }
                                  indeterminate={
                                    selectedPermissions[category]?.length > 0 &&
                                    selectedPermissions[category]?.length <
                                      permissions.length
                                  }
                                />
                                <ListItemText primary={category} />
                                {openCollapse === category ? (
                                  <ExpandLess />
                                ) : (
                                  <ExpandMore />
                                )}
                              </ListItemButton>
                              <Collapse
                                in={openCollapse === category}
                                timeout='auto'
                                unmountOnExit
                              >
                                {permissions.map((permission) => (
                                  <MenuItem
                                    key={permission.permissionName}
                                    value={permission.permissionName}
                                    sx={{ ml: 4 }}
                                  >
                                    <Checkbox
                                      checked={selectedPermissions[
                                        category
                                      ]?.includes(permission.permissionName)}
                                      onChange={() =>
                                        handlePermissionChange(
                                          category,
                                          permission.permissionName
                                        )
                                      }
                                    />
                                    <ListItemText
                                      primary={permission.permissionName}
                                    />
                                  </MenuItem>
                                ))}
                              </Collapse>
                            </List>
                          )
                        )}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{ mt: 3, mb: 2 }}
                >
                  {id ? 'Update' : 'Create User'}
                </Button>
              </Box>
            )}
          </ThemeProvider>
          <RequestFeedback
            successMessage={message}
            errorMessage={message}
            open={open}
            setOpen={setOpen}
            loading={reqLoading}
            isError={isError}
            saved={saved}
            savingMessage={`Creating New ${selectedRoles.label}`}
            showCancel={showCancel}
            handleError={() => setOpen(!open)}
            errorBtnLabel={'close'}
            handleSuccess={() => {
              setOpen(!open);
            }}
            successBtnLabel={'close'}
          />
        </Box>
      </Container>
    </div>
  );
};

export default CreateUser;
