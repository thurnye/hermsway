import React from 'react';
import styles from './UserManagement.module.css';
import Box from '@mui/material/Box';
import { Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const UserManagement = () => {
  
  return(
  <div className={styles.UserManagement}>
     <Box sx={{ textAlign:'end' }}>
     <Container maxWidth='lg' >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <Typography gutterBottom sx={{ mx: 3 }}>
                  <Link to='create-user'>Create User</Link>
                </Typography>
                <Typography gutterBottom sx={{ mx: 3 }}>
                  <Link to='roles'>Roles and Permissions</Link>
                </Typography>
              </Box>
            </Grid>
          </Grid>
    </Container>
    </Box>
  </div>
)};



export default UserManagement;
