import React from 'react';
import styles from './RecentCommunication.module.css';
import WidgetWrapper from '../../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';


const RecentCommunication = ({widget}) => (
  <div className={styles.RecentCommunication}>
     <WidgetWrapper widgetName={widget.widgetName}>
        <Box>
          <CardContent>
            
          </CardContent>
        </Box>
      </WidgetWrapper>
  </div>
);



export default RecentCommunication;
