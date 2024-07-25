import React, { useEffect, useState } from 'react';
import styles from './CreateUser.module.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BackNavigation from '../../BackNavigation/BackNavigation';
import {
  portalsLinks,
  roles,
  rolesAndPermissions,
} from '../../../util/globalVar';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import services from '../../../util/employee.services';
import { decodeJWToken } from '../../../util/helperFunc';
import { userActions } from '../../../store/userSlice';
import Spinner from '../../Spinner/Spinner';
import RequestFeedback from '../../RequestFeedback/RequestFeedback';
import Chip from '@mui/material/Chip';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

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
  const [dashboardOptions, setDashboardOptions] = useState([]);
  const [portalOptions, setPortalOptions] = useState([]);
  const [selectedPermissions, setSelectedPermissions] = useState({});
  const [selectedComponents, setSelectedComponents] = useState({
    dashboards: [],
    portals: [],
  });

  useEffect(() => {
    if (selectedRoles) {
      setPermissionOptions(
        rolesAndPermissions[selectedRoles.value]?.permissions || []
      );
      setDashboardOptions(
        rolesAndPermissions[selectedRoles.value]?.dashboard || []
      );
      setPortalOptions(rolesAndPermissions[selectedRoles.value]?.portal || []);
    }
  }, [selectedRoles]);

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
    setSelectedComponents((prevState) => ({
      ...prevState,
      [type]: typeof value === 'string' ? value.split(',') : value,
    }));
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

  useEffect(() => {
    if (id) {
      fetchUserData(id);
    } else {
      setLoading(false);
    }
  }, [id]);

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
      const loginInfo = {
        ...(id && { id }),
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        email: data.get('email'),
        roles: selectedRoles.value,
        permissions: selectedPermissions,
        dashboards: selectedComponents.dashboards,
        portals: selectedComponents.portals,
      };

      console.log(loginInfo);
      // client
      const result = await services.postEmployee(loginInfo);

      // let token = result.data;
      // localStorage.setItem('token', token);
      // const userDoc = decodeJWToken(token);
      // dispatch(
      //   userActions.login({
      //     user: userDoc,
      //   })
      // );

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
    

    console.log(value, category, value)
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

  const groupSelectedPermissions = (selectedPermissions) => {
    const grouped = {};
    Object.entries(selectedPermissions).forEach(([category, permissions]) => {
      if (permissions.length > 0) {
        grouped[category] = permissions;
      }
    });
    return grouped;
  };


  const renderSelectedPermissions = (selected) => {
    const groupedPermissions = groupSelectedPermissions(selectedPermissions);

    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
        {Object.entries(groupedPermissions).map(([category, permissions]) => (
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
                      <InputLabel id='permissions-label'>
                        Permissions
                      </InputLabel>
                      <Select
                        labelId='permissions-label'
                        id='permissions'
                        multiple
                        input={<OutlinedInput label='Permissions' />}
                        value={Object.values(selectedPermissions).flat()}
                        renderValue={renderSelectedPermissions}
                        MenuProps={MenuProps}
                      >
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
                                    key={permission}
                                    value={permission}
                                    sx={{ ml: 4 }}
                                  >
                                    <Checkbox
                                      checked={selectedPermissions[
                                        category
                                      ]?.includes(permission)}
                                      onChange={() =>
                                        handlePermissionChange(category, permission)
                                      }
                                    />
                                    <ListItemText primary={permission} />
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
                      <InputLabel id='dashboard-management-label'>
                        Dashboard Management
                      </InputLabel>
                      <Select
                        labelId='dashboard-management-label'
                        id='dashboard-management'
                        multiple
                        value={selectedComponents.dashboards}
                        onChange={(e) => handleSelectChange(e, 'dashboards')}
                        input={<OutlinedInput label='Dashboard Management' />}
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
                        {dashboardOptions.map((option) => (
                          <MenuItem key={option} value={option}>
                            <Checkbox
                              checked={
                                selectedComponents.dashboards.indexOf(option) >
                                -1
                              }
                            />
                            {option}
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
                        value={selectedComponents.portals}
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
                        {portalOptions.map((option) => (
                          <MenuItem key={option} value={option}>
                            <Checkbox
                              checked={
                                selectedComponents.portals.indexOf(option) > -1
                              }
                            />
                            {option}
                          </MenuItem>
                        ))}
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
            showCancel={showCancel}
            handleError={() => setOpen(!open)}
            errorBtnLabel={'close'}
            handleSuccess={() => {
              setOpen(!open);
              navigate('/all');
            }}
            successBtnLabel={'close'}
          />
        </Box>
      </Container>
    </div>
  );
};

export default CreateUser;
