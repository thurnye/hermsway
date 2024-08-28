import React, { useEffect, useState } from 'react';
import styles from './MultiAxisLineChart.module.css';
import { LineChart } from '@mui/x-charts/LineChart';
import { colors } from '../../../../assets/theme/colors';


const customize = {
  height: 200,
  legend: { hidden: true },
  margin: { top: 5 },
};


const MultiAxisLineChart = () => {
  const [max, setMax] = useState()
  
  useEffect(() => {
    const maxValue = dataset.reduce((max, current) => {
      const values = Object.values(current).slice(1); // Get all caseType values (ignore month)
      return Math.max(max, ...values);
    }, 0);
    setMax(maxValue)
  }, [])
  
  return(
  <div className={styles.MultiAxisLineChart}>
    <LineChart
      xAxis={[
        {
          dataKey: 'month',
          valueFormatter: (value) => value.toString(),
          scaleType: 'band',
          
        },
      ]}
      yAxis={[
        {
          scaleType: 'linear',
          min: 0,
          max: max + (max * 0.25)
        },
      ]}
      series={Object.keys(keyToLabel).map((key, index) => ({
        dataKey: key,
        label: keyToLabel[key],
        color: colors[index],
        showMark: false,
        // ...stackStrategy,
      }))}
      dataset={dataset}
      {...customize}
    />

  </div>
)};


export default MultiAxisLineChart;

export const keyToLabel = {
  caseTypeA: 'Case Type A',
  caseTypeB: 'Case Type B',
  caseTypeC: 'Case Type C',
  caseTypeD: 'Case Type D',
};



const dataset = [
  {
    month: 'Jan',
    caseTypeD: 12,
    caseTypeC: 5,
    caseTypeB: 18,
    caseTypeA: 7,
  },
  {
    month: 'Feb',
    caseTypeD: 3,
    caseTypeC: 14,
    caseTypeB: 11,
    caseTypeA: 19,
  },
  {
    month: 'Apr',
    caseTypeD: 8,
    caseTypeC: 1,
    caseTypeB: 17,
    caseTypeA: 6,
  },
  {
    month: 'May',
    caseTypeD: 20,
    caseTypeC: 4,
    caseTypeB: 9,
    caseTypeA: 15,
  },
  {
    month: 'June',
    caseTypeD: 7,
    caseTypeC: 11,
    caseTypeB: 3,
    caseTypeA: 2,
  },
  {
    month: 'July',
    caseTypeD: 18,
    caseTypeC: 10,
    caseTypeB: 5,
    caseTypeA: 13,
  },
  {
    month: 'Aug',
    caseTypeD: 16,
    caseTypeC: 8,
    caseTypeB: 1,
    caseTypeA: 14,
  },
  {
    month: 'Sept',
    caseTypeD: 9,
    caseTypeC: 17,
    caseTypeB: 4,
    caseTypeA: 6,
  },
  {
    month: 'Oct',
    caseTypeD: 13,
    caseTypeC: 20,
    caseTypeB: 19,
    caseTypeA: 3,
  },
  {
    month: 'Nov',
    caseTypeD: 5,
    caseTypeC: 6,
    caseTypeB: 15,
    caseTypeA: 10,
  },
  {
    month: 'Dec',
    caseTypeD: 2,
    caseTypeC: 9,
    caseTypeB: 12,
    caseTypeA: 11,
  },
];

