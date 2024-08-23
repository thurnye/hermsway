import React from 'react';
import styles from './ClientSatisfaction.module.css';
import WidgetWrapper from '../../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import Pie from '../../../Charts/PieCharts/Pie/Pie';



// const widgetConfig = {
//   defaultFilter: 'caseType1',
//   controlOptions: [
//     { label: 'Recommendable', value: 'recommendable' },
//     { label: 'Very Satisfied', value: 'verySatisfied' },
//     { label: 'Satisfied', value: 'satisfied' },
//     { label: 'Neutral', value: 'neutral' },
//     { label: 'Not Satisfied', value: 'notSatisfied' },
//     { label: 'Not Recommendable', value: 'notRecommendable' },
//   ],
// };

const ClientSatisfaction = ({widget}) => {
  return (
  <div className={styles.ClientSatisfaction}>
    <WidgetWrapper
        widgetName={widget.widgetName}
      >
        <Box
        sx={{height: '100%'}}
        >
          <Pie/>
        </Box>
      </WidgetWrapper>
  </div>
)};


export default ClientSatisfaction;
