import React, { useState } from 'react';
import styles from './OutstandingTasksAndAssignments.module.css';
import WidgetWrapper from '../../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SortableList from '../../../HOC/SortableContainer/SortableList';
import { getRandomInt } from '../../../../util/globalVar';
import { status } from '../../../../util/commons';

const widgetConfig = {
  defaultFilter: 5,
  controlOptions: [
    { label: 'Top 5', value: 5 },
    { label: 'Top 10', value: 10 },
    { label: 'Top 15', value: 15 },
  ],
};



const OutstandingTasksAndAssignments = ({ widget }) => {
  const [control, setControl] = useState(widgetConfig.defaultFilter);
  const [secondaryControl, setSecondaryControl] = useState('all');
 

  return (
    <div className={styles.OutstandingTasksAndAssignments}>
      <WidgetWrapper
        widgetName={widget.widgetName}
        control={control}
        setControl={setControl}
        controlOptions={widgetConfig.controlOptions}
        setSecondaryControl={setSecondaryControl}
        secondaryControl={secondaryControl}
        secondaryControlOptions={[{label: 'All', value: 'all'},...status]}
      >
        <Box
          sx={{
            height: 280,
            maxHeight: 280,
            overflow: 'auto',
          }}
        >
          <SortableList
            items={Array.from(Array(control)).map((_, index) => ({
              id: getRandomInt().toString(),
              content: (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mb: 0.2,
                  }}
                >
                  <Accordion sx={{ flexGrow: 1, boxShadow: 'none' }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls='panel1-content'
                      id='panel1-header'
                    >
                      <Box
                        sx={{
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Typography sx={{ flexGrow: 1, fontSize: 12, mr: {xs: 1, md: 1.2} }}>
                        Lorem ipsum dolor sit amet
                        </Typography>
                        <Typography
                          variant='caption'
                          sx={{
                            width: { xs: 150, md: 'initial' },
                            textAlign: { xs: 'center', md: 'initial' },
                            color: status[index].color,
                          }}
                        >
                          {status[index].label}
                        </Typography>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </AccordionDetails>
                  </Accordion>
                </Box>
              ),
            }))}
          />
        </Box>
      </WidgetWrapper>
    </div>
  );
};

export default OutstandingTasksAndAssignments;
