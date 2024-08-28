import React, { useEffect, useState } from 'react';
import styles from './NewCase.module.css';
import WidgetWrapper from '../../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import PieComponent from '../../../Charts/PieCharts/PieComponent/PieComponent';
import {
  filterData,
  getPreviousQuarters,
} from '../../../../util/luxonDateFilter';

const widgetConfig = {
  defaultFilter: 'caseType1',
  controlOptions: [{
    label: 'Years',
    options: [
  { label: 'Year to Date', value: 'yearToDate' },
],
}],
};

const NewCase = ({ widget }) => {
  const [control, setControl] = useState('yearToDate');
  const [controlOptions, setControlOptions] = useState([]);

  // add the quarters dynamically
  useEffect(() => {
    const options = [...widgetConfig.controlOptions]; // Clone the original options

    if (getPreviousQuarters().length > 0) {
      const quarters = {
        label: 'Quarters',
        options: getPreviousQuarters(),
      };

      // Check if 'Quarters' already exists to avoid duplicates
      const quarterIndex = options.findIndex(
        (option) => option.label === 'Quarters'
      );
      if (quarterIndex === -1) {
        options.splice(-1, 0, quarters); 
      }
    }
    setControlOptions(options);
  }, []);

  useEffect(() => {
    console.log('CONTROL::', control, filterData(control));
  }, [control]);

  return (
    <div className={styles.NewCase}>
      <WidgetWrapper
        widgetName={widget.widgetName}
        portalLink={'case-management'}
        portalLinkLabel={'View more'}
        control={control}
        grouping={true}
        setControl={setControl}
        controlOptions={controlOptions}
      >
        <Box
          sx={{
            height: '100%',
          }}
        >
          <PieComponent
            type='doughnut'
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
};

export default NewCase;
