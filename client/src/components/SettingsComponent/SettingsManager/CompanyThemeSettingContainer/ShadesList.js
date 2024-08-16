import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import CustomizedButton from '../../../CustomizedButton/CustomizedButton';

export default function ShadesList({ shades, setColor }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{textAlign: 'start', mt: -2}}>
      <CustomizedButton
        variant={'text'}
        label={'Color Shades'}
        id='color-shades'
        disableElevation
        onClick={handleClick}
        sx={{
          borderRadius: 0,
          textTransform: 'none',
        }}
      />
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuList sx={{ width: 320, maxWidth: '100%' }}>
          <MenuItem disabled> Choose a color shade</MenuItem>
          {Object.keys(shades).map((shade) => (
            <MenuItem 
            onClick={() => setColor(shades[shade])}
            key={shades[shade]}
            >
              
              <Box
                sx={{
                  backgroundColor: shades[shade],
                  height: 30,
                  flexGrow: 1,
                }}
              ></Box>
              <Typography
                variant='body2'
                color='text.secondary'
                sx={{ width: 70, ml: 2 }}
              >
                 {shade === '500' ? <span style={{color: 'salmon'}}>
                    Main Color
                 </span> :shades[shade]}
              </Typography>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}
