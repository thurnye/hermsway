import React from 'react';
import styles from './StackedBarChart.module.css';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import {colors } from '../../../../assets/theme/colors';


const chartSetting = {
  yAxis: [
    {
      label: 'Assigned Cases',
    },
  ],
  
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-12px, 0)', // Adjust this value to move the label closer or farther
    },
    [`.${axisClasses.left} .${axisClasses.tickLabel}`]: {
      transform: 'translate(-5px, 0)', // Adjust this to control spacing between tick labels and axis
    },
  },
};

const valueFormatter = (value) => `${value} cases`;


const StackedBarChart = () => (
  <div className={styles.StackedBarChart}>
   <BarChart
   colors={colors}
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'vashi', label: 'Vashi', valueFormatter },
        { dataKey: 'ahmed', label: 'Ahmed', valueFormatter },
        { dataKey: 'rehan', label: 'Rehan', valueFormatter },
        { dataKey: 'mykytenko', label: 'Mykytenko', valueFormatter },
      ]}
      {...chartSetting}
    />
  </div>
);


export default StackedBarChart;

const dataset = [
  {
    vashi: 5,
    ahmed: 5,
    rehan: 8,
    mykytenko: 2,
    month: 'Jan',
  },
  {
    vashi: 5,
    ahmed: 5,
    rehan: 7,
    mykytenko: 2,
    month: 'Feb',
  },
  {
    vashi: 4,
    ahmed: 5,
    rehan: 16,
    mykytenko: 4,
    month: 'Mar',
  },
  {
    vashi: 5,
    ahmed: 5,
    rehan: 9,
    mykytenko: 7,
    month: 'Apr',
  },
  {
    vashi: 5,
    ahmed: 6,
    rehan: 9,
    mykytenko: 9,
    month: 'May',
  },
  {
    vashi: 6,
    ahmed: 6,
    rehan: 13,
    mykytenko: 14,
    month: 'June',
  },
  {
    vashi: 5,
    ahmed: 6,
    rehan: 15,
    mykytenko: 31,
    month: 'July',
  },
  {
    vashi: 6,
    ahmed: 6,
    rehan: 16,
    mykytenko: 24,
    month: 'Aug',
  },
  {
    vashi: 5,
    ahmed: 5,
    rehan: 9,
    mykytenko: 13,
    month: 'Sept',
  },
  {
    vashi: 6,
    ahmed: 6,
    rehan: 9,
    mykytenko: 5,
    month: 'Oct',
  },
  {
    vashi: 6,
    ahmed: 6,
    rehan: 7,
    mykytenko: 4,
    month: 'Nov',
  },
  {
    vashi: 6,
    ahmed: 7,
    rehan: 13,
    mykytenko: 2,
    month: 'Dec',
  },
];
