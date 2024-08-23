import React from 'react';
import styles from './OutcomeTrends.module.css';
import WidgetWrapper from '../../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';


const OutcomeTrends = ({widget}) =>{
  
  return (
  <div className={styles.OutcomeTrends}>
    <WidgetWrapper
        widgetName={widget.widgetName}
       
      >
        <Box
        >
        </Box>
      </WidgetWrapper>
  </div>
)};


export default OutcomeTrends;
