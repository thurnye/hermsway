import React from 'react';
import styles from './PieComponent.module.css';
import { PieChart } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PieComponent = ({
  type,
  colors,
  data1,
  data2,
  innerRadius,
  outerRadius,
  showCenterText,
  percentValue,
  numberValue,
  showLegend,
  legendOptions,
  cx,
  cy, 
  ...props
}) => {
  // let chartData;
  let pieSeries = [];

  switch (type) {
    case 'doublePie':
      pieSeries = [
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
      ];
      break;

    case 'progress':
      pieSeries = [
        {
          data: data1,
          innerRadius: 78,
          outerRadius: 99,
          paddingAngle: -60,
          cornerRadius: 0,
          startAngle: 0,
          endAngle: 360,
        },
      ];
      break;

    case 'pie':
      pieSeries = [
        {
          data: data1,
          cx,
          cy,
        },
      ];
      break;

    case 'doughnut':
      pieSeries = [
        {
          data: data1,
          innerRadius: innerRadius || 40,
          outerRadius: outerRadius || 100,
          paddingAngle: 0,
          cornerRadius: 0,
          startAngle: -90,
          endAngle: 360,
        },
      ];
      break;

    default:
      break;
  }

  return (
    <Box
      className={styles.PieComponent}
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
      <PieChart
      {...props}
        colors={colors}
        series={pieSeries}
        width={400}
        height={type === 'doublePie' ? 300 : 200}
        sx={{
          zIndex: 20,
        }}
        slotProps={{
          legend: { 
            hidden: !showLegend,
            ...legendOptions
            
           },
          tooltip: { trigger: type === 'progress' ? '' : 'item' },
        }}
      />
      {showCenterText && (
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
          {percentValue && (
            <Typography
              variant='h6'
              component='div'
              color='text.secondary'
              sx={{ fontSize: { xs: '0.8rem', sm: 'initial' } }}
            >
              {percentValue}%
            </Typography>
          )}
          {numberValue && (
            <Typography
              variant='caption'
              color='text.secondary'
              sx={{ mt: -1, fontSize: { xs: '0.8rem', sm: 'initial' } }}
            >
              {numberValue}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default PieComponent;
