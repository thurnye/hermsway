import React from 'react';
import styles from './ClientFiling.module.css';
import WidgetWrapper from '../../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import MultiAxisLineChart from '../../../Charts/LineCharts/MultiAxisLineChart/MultiAxisLineChart';


const ClientFiling = ({widget}) =>{
  
  return (
  <div className={styles.ClientFiling}>
    <WidgetWrapper
        widgetName={widget.widgetName}
      >
        <Box
        sx={{
          height: '100%'
        }}
        >
          <MultiAxisLineChart/>
        </Box>
      </WidgetWrapper>
  </div>
)};


export default ClientFiling;
