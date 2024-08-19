import React from 'react';
import styles from './Something.module.css';
import WidgetWrapper from '../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';


const Something = ({widget}) => (
  <div className={styles.Something}>
     <WidgetWrapper widgetName={widget.widgetName}>
        <Box>
          <CardContent>
            
          </CardContent>
        </Box>
      </WidgetWrapper>
  </div>
);


export default Something;
