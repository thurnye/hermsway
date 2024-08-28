import React, { useEffect, useState } from 'react';
import styles from './CasesWinAndLoss.module.css';
import WidgetWrapper from '../../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import DoublePie from '../../../Charts/PieCharts/DoublePie/DoublePie';
import { filterData, getPreviousQuarters } from '../../../../util/luxonDateFilter';


const widgetConfig = {
  defaultFilter: 'caseType1',
  controlOptions: [ {
    label: 'Years',
    options: [
  { label: 'Year to Date', value: 'yearToDate' },
  { label: 'Last Year', value: 'lastYear' },
],
}]
};

const CasesWinAndLoss = ({ widget }) => {
  const [control, setControl] = useState('yearToDate');
  const [controlOptions, setControlOptions] = useState([])

  // add the quarters dynamically
  useEffect(() => {
    const options = [...widgetConfig.controlOptions]; // Clone the original options
  
    if (getPreviousQuarters().length > 0) {
      const quarters = {
        label: 'Quarters',
        options: getPreviousQuarters(),
      };
  
      // Check if 'Quarters' already exists to avoid duplicates
      const quarterIndex = options.findIndex(option => option.label === 'Quarters');
      if (quarterIndex === -1) {
        options.splice(1, 0, quarters); // Insert quarters if not already added
      }
    }
  
    setControlOptions(options); // Set state with modified options
  }, []);

  useEffect(() => {
    console.log('CONTROL::', control, filterData(control))
  }, [control]);


  return (
    <div className={styles.CasesWinAndLoss}>
      <WidgetWrapper 
       widgetName={widget.widgetName}
       control={control}
       grouping={true}
       setControl={setControl}
       controlOptions = {controlOptions}
      >
        <Box sx={{ height: '100%' }}>
          <DoublePie/>
        </Box>
      </WidgetWrapper>
    </div>
  );
};

export default CasesWinAndLoss;
