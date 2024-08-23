import React from 'react';
import styles from './DoublePie.module.css';
import { PieChart } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';


const data1 = [
  { label: 'Vashi', value: 400 },
  { label: 'Ahmed', value: 180 },
  { label: 'Rehan', value: 300 },
  { label: 'Mykytenko', value: 200 },
];

const data2 = [
  { label: 'loss', value: 100 },
  { label: 'win', value: 300 },
  { label: 'loss', value: 100 },
  { label: 'win', value: 80 },
  { label: 'loss', value: 100 },
  { label: 'win', value: 200 },
  { label: 'loss', value: 150 },
  { label: 'win', value: 50 },
];



const DoublePie = () => (
  <Box className={styles.DoublePie} sx={{
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
      series={[
        {
          innerRadius: 0,
          outerRadius: 80,
          data: data1,
        },
        {
          innerRadius: 100,
          outerRadius: 120,
          data: data2,
          
        },
      ]}
      width={400}
      height={300}
      slotProps={{
        legend: { hidden: true },
      }}
      
    />
  </Box>
);


export default DoublePie;
