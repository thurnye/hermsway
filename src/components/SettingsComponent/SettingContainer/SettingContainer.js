import React, { useState } from 'react';
import styles from './SettingContainer.module.css';
import Box from '@mui/material/Box';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CompanyThemeSettingContainer from '../SettingsManager/CompanyThemeSettingContainer/CompanyThemeSettingContainer';
import { useSelector } from 'react-redux';
import { getPermissionsByType } from '../../../util/helperFunc';
import PermissionWrapper from '../../HOC/PermissionWrapper/PermissionWrapper';
import {
  permissionActions,
  permissionNames,
} from '../../../util/permissions.services';

const settings = [
  {
    name: 'General',
    subSettings: [
      {
        name: 'Company Profile',
        requiresPermission: true
      },
    ],
  },
  {
    name: 'Account Settings',
    subSettings: [],
  },
  {
    name: 'Colors/Themes',
    subSettings: [
      {
        name: 'Colors',
        requiresPermission: true
      },
    ],
  },
];

const SettingContainer = ({ permissionTypeCode }) => {
  const userPermissions = useSelector((state) => state.userLog.permissions);
  const permissions = getPermissionsByType(userPermissions, permissionTypeCode);

  console.log(permissions);

  const [open, setOpen] = React.useState('Colors/Themes');
  const [selected, setSelected] = useState('Colors');

  const handleClick = (name) => {
    setOpen((prevOpen) => (prevOpen === name ? '' : name));
  };

  const getComponent = (selectedComponent) => {
    switch (selectedComponent) {
      case 'Colors':
        return (
          <PermissionWrapper
            userPermissions={permissions}
            requiredPermissions={permissionNames.colors}
            action={permissionActions.edit}
          >
            <CompanyThemeSettingContainer
              permissionTypeCode={permissionTypeCode}
            />
          </PermissionWrapper>
        );
      case 'Company Profile':
        return <>Company Profile</>;

      default:
        return <></>;
    }
  };

  return (
    <Box
      className={styles.SettingContainer}
      sx={{
        // height: { xs: 'initial', md: `calc(100vh - 210px)` },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Box sx={{ ml: -5, height: '100%' }}>
        <List
          sx={{ height: '100%', width: 220, bgcolor: 'background.paper' }}
          component='nav'
          aria-labelledby='nested-list-subheader'
          subheader={
            <ListSubheader component='div' id='nested-list-subheader'>
              Settings
            </ListSubheader>
          }
        >
          {settings.map((el) => (
            <React.Fragment key={el.name}>
              <ListItemButton
                onClick={() => {
                  handleClick(el.name);
                  if (el.subSettings.length === 0) {
                    setSelected(el.name);
                  }
                }}
              >
                <ListItemText primary={el.name} />
                {el.subSettings.length > 0 ? (
                  open === el.name ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )
                ) : (
                  ''
                )}
              </ListItemButton>
              {el.subSettings.length > 0 && (
                <Collapse in={open === el.name} timeout='auto' unmountOnExit>
                  <List component='div' disablePadding>
                    {el.subSettings.map((subEl) => (
                      <ListItemButton
                        key={subEl.name}
                        sx={{ pl: 4 }}
                        onClick={() => setSelected(subEl.name)}
                      >
                        <ListItemText primary={subEl.name} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
      </Box>
      <Box
        sx={{
          ml: 1,
          flexGrow: 1,
          p: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        {getComponent(selected)}
      </Box>
    </Box>
  );
};

export default SettingContainer;
