import React from 'react';
import styles from './LandingPage.module.css';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


const LandingPage = () => (
  <div className={styles.LandingPage}>
     <CssBaseline />
          <Container sx={{my: 3}}>
            <Outlet />
          </Container>
  </div>
);


export default LandingPage;
