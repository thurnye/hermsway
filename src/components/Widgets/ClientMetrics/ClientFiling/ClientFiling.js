import React, { useEffect, useState } from 'react';
import styles from './ClientFiling.module.css';
import WidgetWrapper from '../../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import MultiAxisLineChart from '../../../Charts/LineCharts/MultiAxisLineChart/MultiAxisLineChart';
import { filterData } from '../../../../util/luxonDateFilter';

const widgetConfig = {
  defaultFilter: 'caseType1',
  controlOptions: [
    {
      label: 'Years',
      options: [
        { label: 'Year to Date', value: 'yearToDate' },
        { label: 'Last Year', value: 'lastYear' },
      ],
    },
  ],
};

const ClientFiling = ({ widget }) => {
  const [control, setControl] = useState('yearToDate');

  useEffect(() => {
    console.log('CONTROL::', control, filterData(control));
  }, [control]);

  return (
    <div className={styles.ClientFiling}>
      <WidgetWrapper
        widgetName={widget.widgetName}
        control={control}
        grouping={true}
        setControl={setControl}
        controlOptions={widgetConfig.controlOptions}
      >
        <Box
          sx={{
            height: '100%',
          }}
        >
          <MultiAxisLineChart />
        </Box>
      </WidgetWrapper>
    </div>
  );
};

export default ClientFiling;
