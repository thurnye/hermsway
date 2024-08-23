import React from 'react';
import styles from './CaseLoadDistribution.module.css';
import WidgetWrapper from '../../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import StackedBarChart from '../../../Charts/BarCharts/StackedBarChart/StackedBarChart';


const CaseLoadDistribution = ({widget}) =>{
  
  return (
  <div className={styles.CaseLoadDistribution}>
    <WidgetWrapper
        widgetName={widget.widgetName}
       
      >
        <Box
        sx={{height: '100%'}}
        >
          <StackedBarChart/>
        </Box>
      </WidgetWrapper>
  </div>
)};


export default CaseLoadDistribution;
