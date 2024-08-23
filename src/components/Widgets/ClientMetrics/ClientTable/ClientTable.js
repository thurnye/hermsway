import React from 'react';
import styles from './ClientTable.module.css';
import WidgetWrapper from '../../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';


const ClientTable = ({widget}) =>{
  
  return (
  <div className={styles.ClientTable}>
    <WidgetWrapper
        widgetName={widget.widgetName}
       
      >
        <Box
        >
        </Box>
      </WidgetWrapper>
  </div>
)};


export default ClientTable;
