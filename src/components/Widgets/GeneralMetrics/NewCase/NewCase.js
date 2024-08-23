import React from 'react';
import styles from './NewCase.module.css';
import WidgetWrapper from '../../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import PieComponent from '../../../Charts/PieCharts/PieComponent/PieComponent';

const NewCase = ({ widget }) => (
  <div className={styles.NewCase}>
    <WidgetWrapper
      widgetName={widget.widgetName}
      control={false}
      portalLink={'case-management'}
      portalLinkLabel={'View more'}
    >
      <Box>
        <PieComponent
        type="doughnut"
        colors={["#0000FF",
          "#DA7C97",
          "#FFEA00",
          "#FF4453",
          "#34B77D",
          "#FF00FF",
          "#808000",
          "#343434"]}
        data1={[
          { id: 0, value: 10, label: 'Case Type A' },
          { id: 1, value: 15, label: 'Case Type B' },
          { id: 2, value: 20, label: 'Case Type C' },
        ]}
        innerRadius={40}
        outerRadius={100}
        showLegend={true}
        />
      </Box>
    </WidgetWrapper>
  </div>
);

export default NewCase;
