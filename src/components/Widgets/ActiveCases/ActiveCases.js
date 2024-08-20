import React, { useState } from 'react';
import styles from './ActiveCases.module.css';
import WidgetWrapper from '../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import ProgressChart from '../../Charts/PieCharts/ProgressChart/ProgressChart';

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
        >
          <ProgressChart />
        </Box>
      </WidgetWrapper>
    </div>
  );
};

export default ActiveCases;
