import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { darken } from '@mui/system';

const ColorButton = styled(Button)(({ theme, backgroundColor }) => ({
  ...(backgroundColor && {
    color: theme.palette.getContrastText(backgroundColor),
  }),
  ...(backgroundColor && { backgroundColor: backgroundColor }),
  '&:hover': {
    ...(backgroundColor && { backgroundColor: darken(backgroundColor, 0) }),
  },
}));

export default function CustomizedButton({
  type,
  href,
  disabled,
  sx,
  label,
  variant,
  backgroundColor,
  endIcon,
  onClick,
  fullWidth,
  height,
  width,
  startIcon,
}) {
  return (
    <ColorButton
      type={type}
      href={href}
      variant={variant}
      backgroundColor={backgroundColor}
      endIcon={endIcon}
      startIcon={startIcon}
      onClick={onClick}
      fullWidth={fullWidth}
      height={height}
      width={width}
      sx={sx}
      disabled={disabled}
    >
      {label}
    </ColorButton>
  );
}
