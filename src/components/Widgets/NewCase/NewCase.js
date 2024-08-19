import React from 'react';
import styles from './NewCase.module.css';
import WidgetWrapper from '../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';

const NewCase = ({widget}) => (
  <div className={styles.NewCase}>
     <WidgetWrapper widgetName={widget.widgetName} control={false}>
        <Box>
          <CardContent>
            
          </CardContent>
        </Box>
      </WidgetWrapper>
  </div>
);


export default NewCase;
