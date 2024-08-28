import React from 'react';
import styles from './CaseDuration.module.css';
import WidgetWrapper from '../../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';


const CaseDuration = ({widget}) =>{
  
  return (
  <div className={styles.CaseDuration}>
    <WidgetWrapper
        widgetName={widget.widgetName}
       
      >
        <Box
        >
        </Box>
      </WidgetWrapper>
  </div>
)};


export default CaseDuration;
