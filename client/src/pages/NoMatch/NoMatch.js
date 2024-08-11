import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NoMatch.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CustomizedButton from '../../components/CustomizedButton/CustomizedButton';

const NoMatch = () => {
  const navigate = useNavigate();

  return (
    <Box
      className={styles.NoMatch}
      data-testid='NoMatch'
      sx={{
        height: { xs: 'initial', lg: '60vh' },
        p: 3,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Card
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'column',
          background: 'transparent',
          boxShadow: 'none',
          border: 'none',
        }}
      >
          <Typography variant="h1" gutterBottom sx={{mt: 2, maxWidth: 490, color: '#8c8c8e'}}>
              404
            </Typography>
        <Typography
          variant='h4'
          gutterBottom
          sx={{ color: '#ffc107', textAlign: 'center', mb: 10 }}
        >
          Page Not Found!
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              width: 250,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <CustomizedButton
              variant='contained'
              label={'Home'}
              id='demo-customized-button'
              backgroundColor={'#FED65A'}
              disableElevation
              onClick={() => navigate('/')}
              sx={{
                borderRadius: 0,
                fontWeight: 700,
                color: '#E5640D',
              }}
            />
            
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default NoMatch;
