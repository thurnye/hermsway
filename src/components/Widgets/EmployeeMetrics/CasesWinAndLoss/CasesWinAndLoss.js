import React from 'react';
import styles from './CasesWinAndLoss.module.css';
import WidgetWrapper from '../../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import DoublePie from '../../../Charts/PieCharts/DoublePie/DoublePie';


const CasesWinAndLoss = ({widget}) => {
  
  return (
  <div className={styles.CasesWinAndLoss}>
    <WidgetWrapper
        widgetName={widget.widgetName}
      >
        <Box
        sx={{height: '100%'}}
        >
          <DoublePie/>
        </Box>
      </WidgetWrapper>
  </div>
)};


export default CasesWinAndLoss;
