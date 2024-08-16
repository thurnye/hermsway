import React from 'react';
import styles from './NavBar.module.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles'; 



const NavBar = () => {
  const company = useSelector((state) => state.company.companyProfile);
  const theme = useTheme();


  return (
    <div className={styles.NavBar}>
      <AppBar position='static' sx={{background: theme.palette.primary.main}}>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <AdbIcon sx={{ mr: 1 }} />
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/'
              sx={{
                mr: 2,
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              {company?.companyName}
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default NavBar;
