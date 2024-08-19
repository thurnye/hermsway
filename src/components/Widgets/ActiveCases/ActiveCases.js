import React from 'react';
import styles from './ActiveCases.module.css';
import WidgetWrapper from '../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';

const ActiveCases = ({widget}) => {
  return(
  <div className={styles.ActiveCases}>
     <WidgetWrapper widgetName={widget.widgetName} control={false}>
        <Box>
          <CardContent>
            
          </CardContent>
        </Box>
      </WidgetWrapper>
  </div>
)};


export default ActiveCases;
