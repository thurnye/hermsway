import React from 'react';
import styles from './ProgressChart.module.css';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ProgressChart = () => (
  <Box className={styles.ProgressChart} sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'inherit',
    maxWidth: '400px',
    height: 'auto',
    margin: '0 auto',
  }}>
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
        border: '12px solid #f6f6f6',
        borderRadius: '50%',
        height: {xs: 150, sm: 200},
        width: {xs: 150, sm: 200},
      }}
    >
      <CircularProgress
        variant='determinate'
        value={40}
        size={'inherit'}
        sx={{
          position: 'absolute',
          top: '-12px',
          left: '-12px',
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant='h4' component='div' color='text.secondary'>
          46
        </Typography>
        <Typography variant='caption' component='div' color='text.secondary'>
          40%
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default ProgressChart;
