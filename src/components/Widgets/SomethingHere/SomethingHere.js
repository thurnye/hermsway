import React from 'react';
import styles from './SomethingHere.module.css';
import WidgetWrapper from '../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';


const SomethingHere = ({widget}) => (
  <div className={styles.SomethingHere}>
    <WidgetWrapper widgetName={widget.widgetName}>
        <Box>
          <CardContent>
            
          </CardContent>
        </Box>
      </WidgetWrapper>
  </div>
);



export default SomethingHere;
