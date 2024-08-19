import React from 'react';
import styles from './SomethingCases.module.css';
import WidgetWrapper from '../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';


const SomethingCases = ({widget}) => (
  <div className={styles.SomethingCases}>
    <WidgetWrapper widgetName={widget.widgetName}>
        <Box>
          <CardContent>
            
          </CardContent>
        </Box>
      </WidgetWrapper>
  </div>
);


export default SomethingCases;
