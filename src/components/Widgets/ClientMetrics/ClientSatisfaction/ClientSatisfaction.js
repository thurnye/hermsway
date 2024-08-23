import React from 'react';
import styles from './ClientSatisfaction.module.css';
import WidgetWrapper from '../../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import PieComponent from '../../../Charts/PieCharts/PieComponent/PieComponent';

const widgetConfig = {
  defaultFilter: 'caseType1',
  controlOptions: [
    { label: 'Recommendable', value: 'recommendable' },
    { label: 'Very Satisfied', value: 'verySatisfied' },
    { label: 'Satisfied', value: 'satisfied' },
    { label: 'Neutral', value: 'neutral' },
    { label: 'Not Satisfied', value: 'notSatisfied' },
    { label: 'Not Recommendable', value: 'notRecommendable' },
  ],
};

const ClientSatisfaction = ({ widget }) => {
  return (
    <div className={styles.ClientSatisfaction}>
      <WidgetWrapper widgetName={widget.widgetName}>
        <Box sx={{ height: '100%' }}>
          {/* <Pie/> */}
          <PieComponent
            type='pie'
            colors={[
              '#0000FF',
              '#DA7C97',
              '#FFEA00',
              '#FF4453',
              '#34B77D',
              '#FF00FF',
              '#808000',
              '#343434',
            ]}
            data1={[
              { label: 'Recommendable', value: 15 },
              { label: 'Very Satisfied', value: 10 },
              { label: 'Satisfied', value: 6 },
              { label: 'Neutral', value: 4 },
              { label: 'Not Satisfied', value: 2 },
              { label: 'Not Recommendable', value: 1 },
            ]}
            showLegend={true}
            cx={93}
          />
        </Box>
      </WidgetWrapper>
    </div>
  );
};

export default ClientSatisfaction;
