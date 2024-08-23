import React, { useState } from 'react';
import styles from './ActiveCases.module.css';
import WidgetWrapper from '../../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import PieComponent from '../../../Charts/PieCharts/PieComponent/PieComponent';

const widgetConfig = {
  defaultFilter: 'caseType1',
  controlOptions: [
    { label: 'Case Type 1', value: 'caseType1' },
    { label: 'Case Type 2', value: 'caseType2' },
    { label: 'Case Type 3', value: 'caseType3' },
    { label: 'Case Type 4', value: 'caseType4' },
  ],
};

const ActiveCases = ({ widget }) => {
  const [control, setControl] = useState(widgetConfig.defaultFilter);
  return (
    <div className={styles.ActiveCases}>
      <WidgetWrapper
        widgetName={widget.widgetName}
        control={control}
        setControl={setControl}
        controlOptions={widgetConfig.controlOptions}
        portalLink={'case-management'}
        portalLinkLabel={'View more'}
      >
        <Box
         sx={{
          height: '100%',
         }}
        >
        <PieComponent
        type="progress"
        colors={['#808000', '#f6f6f6']}
        data1={[
          { id: 1, value: 15, label: 'Case Type A' },
          { id: 2, value: 20, label: 'Case Type B' },
        ]}
        showCenterText={true}
        percentValue={40}
        numberValue={32}
        />
        </Box>
      </WidgetWrapper>
    </div>
  );
};

export default ActiveCases;
