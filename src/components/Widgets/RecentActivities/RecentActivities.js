import React from 'react';
import styles from './RecentActivities.module.css';
import WidgetWrapper from '../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';

const RecentActivities = ({widget}) => (
  <div className={styles.RecentActivities}>
     <WidgetWrapper widgetName={widget.widgetName}>
        <Box>
          <CardContent>
            
          </CardContent>
        </Box>
      </WidgetWrapper>
  </div>
);



export default RecentActivities;
