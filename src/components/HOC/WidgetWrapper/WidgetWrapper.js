import React from 'react';
import styles from './WidgetWrapper.module.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CustomizedButton from '../../CustomizedButton/CustomizedButton';
import ListSubheader from '@mui/material/ListSubheader';

const WidgetWrapper = ({
  widgetName,
  children,
  control,
  setControl,
  portalLink,
  actionLabel,
  grouping,
  controlOptions,
}) => {
  const handleChange = (event) => {
    const value = event.target.value
    if(value !== 'custom'){
      setControl(value);
    }
  };

  return (
    <Box className={styles.WidgetWrapper}>
      <Card>
        <Box
          sx={{
            px: 2,
            py: 1,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            {widgetName}
          </Typography>
          {control && !grouping && (
            <Box sx={{ minWidth: 100 }}>
              <FormControl size='small' sx={{ p: 0, width: '100%' }}>
                <Select
                  id='demo-simple-select'
                  value={control}
                  onChange={handleChange}
                  sx={{
                    borderRadius: 0,
                    '.MuiOutlinedInput-input': {
                      py: 0,
                      fontSize: 13,
                      color: '#7b7b7b',
                    },
                  }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          )}

          {control && grouping && (
            <Box>
              <div>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    value={control}
                    onChange={handleChange}
                    id='grouped-select'
                    sx={{
                      borderRadius: 0,
                      '.MuiOutlinedInput-input': {
                        py: 0,
                        fontSize: 13,
                        color: '#7b7b7b',
                      },
                    }}
                  >
                    {controlOptions.flatMap((el, index) => [
                      <ListSubheader key={`${el.label}-${index}`}>
                        {el.label}
                      </ListSubheader>,
                      ...el.options.map((item) => (
                        <MenuItem value={item.value} key={item.value}>
                          {item.label}
                        </MenuItem>
                      )),
                    ])}
                  </Select>
                </FormControl>
              </div>
            </Box>
          )}
        </Box>
        <Divider />
        <CardContent>{children}</CardContent>

        {portalLink && (
          <Box sx={{ textAlign: 'end' }}>
            <CustomizedButton
              variant={'text'}
              label={actionLabel ?? 'View'}
              id='join-group-button'
              disableElevation
              onClick={() => ''}
              sx={{
                borderRadius: 0,
                textTransform: 'none',
              }}
            />
          </Box>
        )}
      </Card>
    </Box>
  );
};

export default WidgetWrapper;
