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
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const WidgetWrapper = ({
  widgetName,
  children,
  control,
  setControl,
  portalLink,
  portalLinkLabel,
  grouping,
  controlOptions,
  secondaryControl,
  setSecondaryControl,
  secondaryControlOptions,
}) => {
  const handleChange = (event) => {
    const value = event.target.value;
    if (value !== 'custom') {
      setControl(value);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

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
            flexWrap: 'wrap'
          }}
        >
          <Typography sx={{ fontSize: 14, flexGrow: 1 }} color='text.secondary' gutterBottom>
            {widgetName}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            {controlOptions?.length > 0 && !grouping && (
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
                    {controlOptions?.map((option) => (
                      <MenuItem
                        value={option.value}
                        key={`${option.label}_${option.value}`}
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            )}

            {secondaryControlOptions?.length > 0 && !grouping && (
              <Box>
                <IconButton
                  aria-label='more'
                  id='long-button'
                  aria-controls={open ? 'long-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup='true'
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id='basic-menu'
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  {secondaryControlOptions?.map((option) => (
                    <MenuItem
                      key={`${option.label}_${option.value}`}
                      onClick={() => {
                        setSecondaryControl(option.value);
                        handleClose();
                      }}
                      sx={{
                        background:
                          secondaryControl === option.value
                            ? '#f6f6f6'
                            : 'initial',
                      }}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            )}

            {controlOptions?.length > 0 && grouping && (
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
        </Box>
        <Divider />
        <CardContent>{children}</CardContent>

        {portalLink && (
          <Box sx={{ textAlign: 'end' }}>
            <CustomizedButton
              variant={'text'}
              label={portalLinkLabel ?? 'View'}
              id='join-group-button'
              disableElevation
              onClick={() => ''}
              sx={{
                fontSize: { xs: 10, sm: 13 },
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
