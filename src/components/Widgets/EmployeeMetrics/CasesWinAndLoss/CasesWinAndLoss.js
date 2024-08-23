import React from 'react';
import styles from './CasesWinAndLoss.module.css';
import WidgetWrapper from '../../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import PieComponent from '../../../Charts/PieCharts/PieComponent/PieComponent';

const CasesWinAndLoss = ({ widget }) => {
  return (
    <div className={styles.CasesWinAndLoss}>
      <WidgetWrapper widgetName={widget.widgetName}>
        <Box sx={{ height: '100%' }}>
          {/* <DoublePie/> */}
          <PieComponent
            type='doublePie'
            // colors={['#FF0000', '#00FF00']}
            data1={[
              { label: 'Vashi', value: 400 },
              { label: 'Ahmed', value: 180 },
              { label: 'Rehan', value: 300 },
              { label: 'Mykytenko', value: 200 },
            ]}
            data2={[
              { label: 'loss', value: 100 },
              { label: 'win', value: 300 },
              { label: 'loss', value: 100 },
              { label: 'win', value: 80 },
              { label: 'loss', value: 100 },
              { label: 'win', value: 200 },
              { label: 'loss', value: 150 },
              { label: 'win', value: 50 },
            ]}
          />
        </Box>
      </WidgetWrapper>
    </div>
  );
};

export default CasesWinAndLoss;
