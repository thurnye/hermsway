import React from 'react';
import styles from './ClientAndCases.module.css';
import WidgetWrapper from '../../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';


const ClientAndCases = ({widget}) =>{
  
  return (
  <div className={styles.ClientAndCases}>
    <WidgetWrapper
        widgetName={widget.widgetName}
       
      >
        <Box
        >
        </Box>
      </WidgetWrapper>
  </div>
)};


export default ClientAndCases;
