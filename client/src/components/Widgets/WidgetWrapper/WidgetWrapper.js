import React from 'react';
import styles from './WidgetWrapper.module.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const WidgetWrapper = ({ widgetName, children, control }) => (
  <Box className={styles.WidgetWrapper}>
    <Card>
      <Box sx={{ px: 2, border: '2px dotted red' }}>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {widgetName}
        </Typography>
       {control &&  <Box>{control}</Box>}
      </Box>
      <CardContent>{children}</CardContent>
    </Card>
  </Box>
);

export default WidgetWrapper;
