import React from 'react';
import styles from './OutstandingTasksAndAssignments.module.css';
import WidgetWrapper from '../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';


const OutstandingTasksAndAssignments = ({widget}) => (
  <div className={styles.OutstandingTasksAndAssignments}>
     <WidgetWrapper widgetName={widget.widgetName}>
        <Box>
          <CardContent>
            
          </CardContent>
        </Box>
      </WidgetWrapper>
  </div>
);


export default OutstandingTasksAndAssignments;
