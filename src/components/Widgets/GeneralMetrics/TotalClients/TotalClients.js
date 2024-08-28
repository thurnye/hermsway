import React, { useState } from 'react';
import styles from './TotalClients.module.css';
import WidgetWrapper from '../../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const widgetConfig = {
  defaultFilter: 'all',
  controlOptions: [
    { label: 'All Cases', value: 'all' },
    { label: 'Case Type 1', value: 'caseType1' },
    { label: 'Case Type 2', value: 'caseType2' },
    { label: 'Case Type 3', value: 'caseType3' },
    { label: 'Case Type 4', value: 'caseType4' },
  ],
};

const TotalClients = ({ widget }) => {
  const [control, setControl] = useState(widgetConfig.defaultFilter);

  return (
    <Box className={styles.TotalClients} sx={{
      // border: '2px dotted red', 
      flexGrow: 1
      }}>
      <WidgetWrapper
        widgetName={widget.widgetName}
        control={control}
        setControl={setControl}
        controlOptions={widgetConfig.controlOptions}
      >
        <Box
          sx={{
            // height: {xs:180, sm:94},
            height: '100%',
            // border: '2px dotted red',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant='h4'>70</Typography>
          <Typography variant='caption' color='text.secondary'>These values are based on active cases</Typography>
          
        </Box>
      </WidgetWrapper>
    </Box>
  );
};

export default TotalClients;
