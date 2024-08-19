import React from 'react';
import styles from './EmployeesReports.module.css';
import WidgetWrapper from '../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';


const EmployeesReports = ({widget}) => (
  <div className={styles.EmployeesReports}>
    <WidgetWrapper widgetName={widget.widgetName}>
        <Box>
          <CardContent>
            
          </CardContent>
        </Box>
      </WidgetWrapper>
  </div>
);


export default EmployeesReports;
