import React from 'react';
import styles from './NewCase.module.css';
import WidgetWrapper from '../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Doughnut from '../../Charts/PieCharts/Doughnut/Doughnut';

const NewCase = ({ widget }) => (
  <div className={styles.NewCase}>
    <WidgetWrapper
      widgetName={widget.widgetName}
      control={false}
      portalLink={'case-management'}
      portalLinkLabel={'View more'}
    >
      <Box>
        <Doughnut />
      </Box>
    </WidgetWrapper>
  </div>
);

export default NewCase;
