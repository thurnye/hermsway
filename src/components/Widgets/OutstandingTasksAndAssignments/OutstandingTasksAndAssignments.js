import React, { useState } from 'react';
import styles from './OutstandingTasksAndAssignments.module.css';
import WidgetWrapper from '../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import SortableList from '../../HOC/SortableContainer/SortableList';
import { getRandomInt } from '../../../util/globalVar';

const widgetConfig = {
  defaultFilter: 5,
  controlOptions: [
    { label: 'Top 5', value: 5 },
    { label: 'Top 10', value: 10 },
    { label: 'Top 15', value: 15 },
  ],
};

const status = [
  { label: 'To Do', value: 'toDo' },
  { label: 'In Progress', value: 'inProgress' },
  { label: 'Pending', value: 'pending' },
  { label: 'Completed', value: 'completed' },
  { label: 'On Hold', value: 'onHold' },
  { label: 'Cancelled', value: 'cancelled' },
  { label: 'Under Review', value: 'underReview' },
  { label: 'Blocked', value: 'blocked' },
  { label: 'Deferred', value: 'deferred' },
  { label: 'Not Started', value: 'notStarted' },
];

const OutstandingTasksAndAssignments = ({ widget }) => {
  const [control, setControl] = useState(widgetConfig.defaultFilter);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={styles.OutstandingTasksAndAssignments}>
      <WidgetWrapper
        widgetName={widget.widgetName}
        control={control}
        setControl={setControl}
        controlOptions={widgetConfig.controlOptions}
      >
        <Box
          sx={{
            height: 267,
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
                        <Typography sx={{ flexGrow: 1 }}>Title</Typography>
                        <Typography sx={{}}>{status[index].label}</Typography>
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
