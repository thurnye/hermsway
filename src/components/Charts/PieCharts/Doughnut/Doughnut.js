import React from 'react';
import styles from './Doughnut.module.css';
import { PieChart } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import {colors } from '../../../../assets/theme/colors';

const Doughnut = () => (
  <Box className={styles.Doughnut} sx={{
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'inherit',
    // maxWidth: '400px',
    height: 'auto',
    margin: '0 auto',
  }}>

    
    <PieChart
    colors={colors}
    
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
    {/* <Box
        sx={{
          width: '100%',
          top: '-2rem',
          left:'0.3rem',
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
        }}
      >
        <Typography variant='h6' component='div' color='text.secondary' sx={{fontSize: {xs: '0.8rem', sm: 'initial'}}}>
          40%
        </Typography>
        <Typography variant='caption' color='text.secondary' sx={{mt: -1, fontSize: {xs: '0.8rem', sm: 'initial'}}}>
          32
        </Typography>
      </Box> */}
  </Box>
);

export default Doughnut;
