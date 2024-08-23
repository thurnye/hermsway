import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { colors } from '../../../../assets/theme/colors'; // Adjust the path as needed
import styles from './StackedBarChart.module.css'; // Adjust the path as needed
import { Box } from '@mui/material';

const chartSettings = {
  horizontal: {
    xAxis: [
      {
        label: 'Client Density By Country',
      },
    ],
    width: 500,
    height: 400,
    marginLeft: 3
  },
  stacked: {
    yAxis: [
      {
        label: 'Assigned Cases',
        axis: {
          tick: {
            padding: 20, // Adjust this value as needed
            label: {
              // Increase the margin to avoid cutoff
              margin: { left: 20 }, // Adjust this value as needed
            },
          },
        },
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
  },
};

const StackedBarChart = ({ chartType, series, dataset, label, dataKey }) => {
  const isHorizontal = chartType === 'horizontal';

  return (
    <Box className={styles.StackedBarChart} sx={{
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 'inherit',
      // maxWidth: '400px',
      height: 'auto',
      margin: '0 auto',
    }}>
      <BarChart
        dataset={dataset}
        xAxis={
          isHorizontal
            ? [{ label: label }]
            : [{ scaleType: 'band', dataKey: dataKey }]
        }
        yAxis={
          isHorizontal
            ? [{ scaleType: 'band', dataKey: dataKey }]
            : [{ label: label }]
        }
        series={series}
        layout={isHorizontal ? 'horizontal' : undefined}
        colors={isHorizontal ? undefined : colors}
        {...chartSettings[chartType]}
      />
    </Box>
  );
};

export default StackedBarChart;
