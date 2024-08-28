import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { colors } from '../../../../assets/theme/colors'; // Adjust the path as needed
import styles from './StackedBarChart.module.css'; // Adjust the path as needed
import { Box } from '@mui/material';

const StackedBarChart = ({ chartType, series, dataset, label, dataKey }) => {
  const isHorizontal = chartType === 'horizontal';

  const chartSettings = {
    horizontal: {
      xAxis: [
        {
          label: label 
        },
      ],
      width: 500,
      height: 400,
      // marginLeft: 3,
    },
    stacked: {
      yAxis: [
        {
          label: label,
          axis: {
            tick: {
              padding: 10, // Adjust this value as needed
              label: {
                // Increase the margin to avoid cutoff
                margin: { left: 15 }, // Adjust this value as needed
              },
            },
          },
        },
      ],
      width: 500,
      height: 300,
      sx: {
        [`.${axisClasses.left} .${axisClasses.label}`]: {
          transform: 'translate(0, 0)', // horizontal
        },
        [`.${axisClasses.left} .${axisClasses.tickLabel}`]: {
          transform: 'translate(-5px, 0)', //stacked
        },
      },
    },
  };

  return (
    <Box
      className={styles.StackedBarChart}
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'inherit',
        height: 'auto',
        margin: '0 auto',
      }}
    >
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
