import React from 'react';
import styles from './Pie.module.css';
import { PieChart } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';


const Pie = () => (
  <Box className={styles.Pie} sx={{
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
    colors={["#0000FF",
    "#DA7C97",
    "#FFEA00",
    "#FF4453",
    "#34B77D",
    "#FF00FF",
    "#808000",
    "#343434"]}
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 30, value: 13, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  </Box>
);
export default Pie;
