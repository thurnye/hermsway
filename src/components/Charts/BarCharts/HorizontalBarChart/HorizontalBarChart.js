import React from 'react';
import styles from './HorizontalBarChart.module.css';
import { BarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
  xAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],
  width: 500,
  height: 400,
};

const valueFormatter = (value) => `${value}mm`;


const HorizontalBarChart = () => {
  return(
  <div className={styles.HorizontalBarChart}>
   <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'vashi', label: 'Vashi', valueFormatter },
        { dataKey: 'ahmed', label: 'Ahmed', valueFormatter },
        { dataKey: 'rehan', label: 'Rehan', valueFormatter },
        { dataKey: 'mykytenko', label: 'Mykytenko', valueFormatter },
      ]}
      layout="horizontal"
      {...chartSetting}
    />
  </div>
)};


export default HorizontalBarChart;

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

