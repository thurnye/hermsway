import React from 'react';
import styles from './AccessPortal.module.css';
import Box from '@mui/material/Box';
import {Link, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import CustomizedButton from '../../components/CustomizedButton/CustomizedButton';



const AccessPortal = () => {
  
  return (
  <div className={styles.AccessPortal}>
    <Box sx={{
      height: '70vh', 
      width: {xs:'initial', md: '70vw'}, 
      m: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
      }}>
        <Box
        sx={{
          mx: 3
        }}
        >
          <CustomizedButton
            variant='text'
            label={'Employee Login'}
            href="employee-login"
            backgroundColor={'#fee86d'}
            id='demo-customized-button'
            disableElevation
            sx={{
              fontSize: 15,
              borderRadius: 1,
              height: 30,
              fontWeight: 700,
              textTransform: 'none',
            }}
          />
        </Box>
        <Box
        sx={{
          mx: 3
        }}
        >
          <CustomizedButton
            variant='text'
            label={'Client Login'}
            href="client-login"
            backgroundColor={'#addaf1'}
            id='demo-customized-button'
            disableElevation
            sx={{
              fontSize: 15,
              borderRadius: 1,
              height: 30,
              fontWeight: 700,
              textTransform: 'none',
            }}
          />
        </Box>
    </Box>
  </div>
)};



export default AccessPortal;
