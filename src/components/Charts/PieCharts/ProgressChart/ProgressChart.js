import React from 'react';
import styles from './ProgressChart.module.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { PieChart } from '@mui/x-charts/PieChart';

const ProgressChart = ({colors}) => (
  <Box
    className={styles.ProgressChart}
    sx={{
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 'inherit',
      // maxWidth: '400px',
      height: 'auto',
      margin: '0 auto',
    }}
  >
    <PieChart
      tooltip= {{trigger : ''}}
      colors={colors}
      slotProps={{ 
        legend: { hidden: true },
       }}
      series={[
        {
          data: [
            { id: 1, value: 15, label: 'Case Type A' },
            { id: 2, value: 20, label: 'Case Type B' },
          ],
          innerRadius: 78,
          outerRadius: 99,
          paddingAngle: -60,
          cornerRadius: 0,
          startAngle: 0,
          endAngle: 360,
        },
      ]}
      width={400}
      height={200}
      sx={{
        zIndex: 20,
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
        zIndex: 1,
      }}
    >
      <Typography
        variant='h6'
        component='div'
        color='text.secondary'
        sx={{ fontSize: { xs: '0.8rem', sm: 'initial' } }}
      >
        40%
      </Typography>
      <Typography
        variant='caption'
        color='text.secondary'
        sx={{ mt: -1, fontSize: { xs: '0.8rem', sm: 'initial' } }}
      >
        32
      </Typography>
    </Box>
  </Box>
);

export default ProgressChart;
