import React from 'react';
import styles from './PendingClientPayment.module.css';
import WidgetWrapper from '../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';


const PendingClientPayment = ({widget}) => (
  <div className={styles.PendingClientPayment}>
     <WidgetWrapper widgetName={widget.widgetName}>
        <Box>
          <CardContent>
            
          </CardContent>
        </Box>
      </WidgetWrapper>
  </div>
);


export default PendingClientPayment;
