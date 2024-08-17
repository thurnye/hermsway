import React, { useEffect, useState } from 'react';
import { SketchPicker } from 'react-color';
import { lighten, darken } from 'polished';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Popper from '@mui/material/Popper';
import { InputAdornment } from '@mui/material';
import SquareIcon from '@mui/icons-material/Square';
import ShadesList from './ShadesList';

const ColorPicker = ({ color, setColor }) => {
  const [shades, setShades] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    setShades({
      100: lighten(0.4, color),
      200: lighten(0.3, color),
      300: lighten(0.2, color),
      400: lighten(0.1, color),
      500: color, // Base color for shade 500
      600: darken(0.05, color),
      700: darken(0.1, color),
      800: darken(0.2, color),
      900: darken(0.3, color),
    });
  }, [color]);

  const handleChangeComplete = (selectedColor) => {
    const baseColor = selectedColor.hex;
    setColor(baseColor);
  };

  const handleTextFieldChange = (event) => {
    const inputColor = event.target.value;
    setColor(inputColor);
  };

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'color-picker-popper' : undefined;

  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Box sx={{ display: 'flex' }}>
        <TextField
          disabled
          sx={{ m: 1, width: '25ch' }}
          size={'small'}
          variant='standard'
          value={color}
          onChange={handleTextFieldChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClick}
                >
                  <SquareIcon sx={{ color }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <SketchPicker color={color} onChangeComplete={handleChangeComplete} />
      </Popper>
      <ShadesList shades={shades} setColor={setColor} />
    </Box>
  );
};

export default ColorPicker;
