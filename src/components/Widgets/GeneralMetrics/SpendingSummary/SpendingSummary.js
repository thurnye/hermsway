import React, { useEffect, useState } from 'react';
import styles from './SpendingSummary.module.css';
import WidgetWrapper from '../../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { filterData, getPreviousQuarters } from '../../../../util/luxonDateFilter';

const widgetConfig = {
  controlOptions: [
    {
      label: 'Date Ranges',
      options: [
        { label: 'Last 30 Days', value: 'last30Days' },
        { label: 'Last 60 Days', value: 'last60Days' },
        { label: 'Last 90 Days', value: 'last90Days' },
        { label: 'Month to Date', value: 'monthToDate' },
      ],
    },
        {
          label: 'Years',
          options: [
        { label: 'Year to Date', value: 'yearToDate' },
        { label: 'Last Year', value: 'lastYear' },
      ],
    },
    {
      label: 'Custom Date',
      options: [
        { label: 'Custom date', value: 'custom' },
      ],
    },
  ],
};

const SpendingSummary = ({ widget }) => {
  const [control, setControl] = useState('last30Days');
  const [controlOptions, setControlOptions] = useState([])

  // add the quarters dynamically
  useEffect(() => {
    const options = widgetConfig.controlOptions;
    if(getPreviousQuarters().length > 0){
      const quarters = {
        label: 'Quarters',
        options: getPreviousQuarters(),
      };
      options.splice(1, 0, quarters);
    }
    setControlOptions(options)
  },[])

  useEffect(() => {
    console.log('CONTROL::', control, filterData(control))
  }, [control]);

  return (
    <div className={styles.SpendingSummary}>
      <WidgetWrapper
        widgetName={widget.widgetName}
        control={control}
        grouping={true}
        setControl={setControl}
        controlOptions = {controlOptions}
      >
        <Box>
          <CardContent>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 2,
                }}
              >
                <Typography variant='body2' color='text.secondary'>
                  Total
                </Typography>
                <Box sx={{ display: 'flex' }}>
                  <Typography variant='h6' sx={{ mr: 1 }}>
                    $12,931
                  </Typography>
                  <Chip
                    label='+6%'
                    icon={<ArrowDropUpIcon />}
                    sx={{
                      color: '#4caf50',
                      padding: '0 4px',
                      fontSize: '0.75rem',
                      height: '20px',
                      '& .MuiChip-label': {
                        paddingRight: '4px',
                        paddingLeft: '8px',
                      },
                      '& .MuiChip-icon': {
                        order: 1,
                        marginLeft: 'auto',
                        marginRight: '-4px',
                      },
                    }}
                    size='small'
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 2,
                }}
              >
                <Typography variant='body2' color='text.secondary'>
                  Billed
                </Typography>
                <Typography variant='h6' gutterBottom sx={{ mt: -1 }}>
                  $10,931
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography variant='body2' color='text.secondary'>
                  Unbilled
                </Typography>
                <Typography variant='h6' gutterBottom sx={{ mt: -1 }}>
                  $2,000
                </Typography>
              </Box>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 12, md: 12 }}
              >
                <Grid item xs={2} sm={4} md={4}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant='body2' color='text.secondary'>
                      Total
                    </Typography>
                    <Typography variant='h6' sx={{ mt: -1 }}>
                      $12,931
                    </Typography>
                    <Chip
                      label='+6%'
                      icon={<ArrowDropUpIcon />}
                      sx={{
                        color: '#4caf50',
                        padding: '0 4px',
                        fontSize: '0.75rem',
                        height: '20px',
                        '& .MuiChip-label': {
                          paddingRight: '4px',
                          paddingLeft: '8px',
                        },
                        '& .MuiChip-icon': {
                          order: 1,
                          marginLeft: 'auto',
                          marginRight: '-4px',
                        },
                      }}
                      size='small'
                    />
                  </Box>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant='body2' color='text.secondary'>
                      Billed
                    </Typography>
                    <Typography variant='h6' gutterBottom sx={{ mt: -1 }}>
                      $10,931
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant='body2' color='text.secondary'>
                      Unbilled
                    </Typography>
                    <Typography variant='h6' gutterBottom sx={{ mt: -1 }}>
                      $2,000
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Box>
      </WidgetWrapper>
    </div>
  );
};

export default SpendingSummary;
