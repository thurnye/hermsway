import React, { useState } from 'react';
import styles from './UnAssignedCases.module.css';
import WidgetWrapper from '../../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import ProgressChart from '../../../Charts/PieCharts/ProgressChart/ProgressChart';

const widgetConfig = {
  defaultFilter: 'caseType1',
  controlOptions: [
    { label: 'Case Type 1', value: 'caseType1' },
    { label: 'Case Type 2', value: 'caseType2' },
    { label: 'Case Type 3', value: 'caseType3' },
    { label: 'Case Type 4', value: 'caseType4' },
  ],
};

const UnAssignedCases = ({ widget }) => {
  const [control, setControl] = useState(widgetConfig.defaultFilter);
  return (
    <div className={styles.UnAssignedCases}>
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
          <ProgressChart colors={['#E77105', '#f6f6f6']}/>
        </Box>
      </WidgetWrapper>
    </div>
  );
};

export default UnAssignedCases;
