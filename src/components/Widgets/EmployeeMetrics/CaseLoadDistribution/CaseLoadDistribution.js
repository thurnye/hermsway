import React from 'react';
import styles from './CaseLoadDistribution.module.css';
import WidgetWrapper from '../../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import StackedBarChart from '../../../Charts/BarCharts/StackedBarChart/StackedBarChart';


const stackedSeries = [
  { dataKey: 'vashi', label: 'Vashi', valueFormatter: (value) => `${value} cases` },
  { dataKey: 'ahmed', label: 'Ahmed', valueFormatter: (value) => `${value} cases` },
  { dataKey: 'rehan', label: 'Rehan', valueFormatter: (value) => `${value} cases` },
  { dataKey: 'mykytenko', label: 'Mykytenko', valueFormatter: (value) => `${value} cases` },
];

const CaseLoadDistribution = ({widget}) =>{
  
  return (
  <div className={styles.CaseLoadDistribution}>
    <WidgetWrapper
        widgetName={widget.widgetName}
       
      >
        <Box
        sx={{height: '100%'}}
        >
          <StackedBarChart 
          chartType="stacked"
          series={stackedSeries}
          dataset={dataset}
          label={ 'Assigned Cases'}
          dataKey={'month'}
          />
        </Box>
      </WidgetWrapper>
  </div>
)};


export default CaseLoadDistribution;

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