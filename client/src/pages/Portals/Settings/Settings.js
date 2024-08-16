import React from 'react';
import styles from './Settings.module.css';
import { getPermissionsByType } from '../../../util/helperFunc';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SettingContainer from '../../../components/SettingsComponent/SettingContainer/SettingContainer'

const Settings = ({ permissionTypeCode }) => {


  return (
      <Box  className={styles.Settings}>
        <Container maxWidth='lg'>
          <SettingContainer permissionTypeCode={permissionTypeCode}/>
        </Container>
      </Box>
  );
};

export default Settings;
