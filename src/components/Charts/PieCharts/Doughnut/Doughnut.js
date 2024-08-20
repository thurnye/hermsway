import React from 'react';
import styles from './Doughnut.module.css';
import { PieChart } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Doughnut = () => (
  <Box className={styles.Doughnut} sx={{
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'inherit',
    maxWidth: '400px',
    height: 'auto',
    margin: '0 auto',
  }}>
    
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Case Type A' },
            { id: 1, value: 15, label: 'Case Type B' },
            { id: 2, value: 20, label: 'Case Type C' },
          ],
          innerRadius: 40,
          outerRadius: 100,
          paddingAngle: 0,
          cornerRadius: 0,
          startAngle: -90,
          endAngle: 360,
        },
      ]}
      width={400}
      height={200}
      sx={{
        zIndex: 20
      }}
    />
    <Box
        sx={{
          width: '76%',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1
        }}
      >
        <Typography variant='h6' component='div' color='text.secondary' sx={{fontSize: {xs: 12, sm: 'initial'}}}>
          40%
        </Typography>
        <Typography variant='caption' color='text.secondary' sx={{mt: -1, fontSize: {xs: 9, sm: 'initial'}}}>
          32
        </Typography>
      </Box>
  </Box>
);

export default Doughnut;
