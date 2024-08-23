import React from 'react';
import styles from './Appointments.module.css';
import WidgetWrapper from '../../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';

function createData(name, avatar, timeSlot) {
  return {
    name: (
      <span
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Avatar alt={name} src={avatar} sx={{ width: 24, height: 24, mr: 2 }} />
        {name}
      </span>
    ),
    timeSlot,
  };
}

const data = [
  {
    name: 'John Doe',
    avatar: 'https://picsum.photos/id/1/200/300',
    schedule: ' Aug 08th 2021 @ 07:30AM',
  },
  {
    name: 'Jane Smith',
    avatar: 'https://picsum.photos/id/13/200/300',
    schedule: ' Jun 03th 2022 @ 12:56PM',
  },
  {
    name: 'Alex Johnson',
    avatar: 'https://picsum.photos/id/43/200/300',
    schedule: ' Jul 07th 2023 @ 10:28AM',
  },
  {
    name: 'Sam Taylor',
    avatar: 'https://picsum.photos/id/25/200/300',
    schedule: ' Mar 03th 2021 @ 12:26AM',
  },
  {
    name: 'Chris Lee',
    avatar: 'https://picsum.photos/id/57/200/300',
    schedule: ' Aug 18th 2022 @ 04:48PM',
  },
  {
    name: 'Jordan Brown',
    avatar: 'https://picsum.photos/id/53/200/300',
    schedule: ' May 31th 2023 @ 11:56PM',
  },
  {
    name: 'Morgan Davis',
    avatar: 'https://picsum.photos/id/3/200/300',
    schedule: ' May 01th 2022 @ 07:01AM',
  },
  {
    name: 'Riley Clark',
    avatar: 'https://picsum.photos/id/24/200/300',
    schedule: ' Dec 22th 2020 @ 06:45AM',
  },
  {
    name: 'Casey Wilson',
    avatar: 'https://picsum.photos/id/64/200/300',
    schedule: ' Jun 25th 2020 @ 06:36AM',
  },
  {
    name: 'Jamie Miller',
    avatar: 'https://picsum.photos/id/18/200/300',
    schedule: ' Feb 28th 2021 @ 06:48AM',
  },
];

const rows = data.map((el) => createData(el.name, el.avatar, el.schedule));

const widgetConfig = {
  defaultFilter: 5,
  controlOptions: [
    { label: 'Top 5', value: 5 },
    { label: 'Top 10', value: 10 },
    { label: 'Top 15', value: 15 },
  ],
  tableHeaders: [
    {
      label: 'Appointment',
      align:'left'
    }, 
    {
      label: 'Upcoming',
      align:'right'
    }, 
],
};

const Appointments = ({ widget }) => {
  return (
    <div className={styles.Appointments}>
      <WidgetWrapper widgetName={widget.widgetName}>
        <Box
        sx={{
          height: '100%',
         }}
        >
          <TableContainer component={Paper} sx={{
          maxHeight: 280,
          overflow: 'auto',
        }}>
            <Table aria-label='simple table' size='small' stickyHeader sx={{boxShadow: 'none'}}>
              <TableHead>
                <TableRow>
                  {widgetConfig.tableHeaders.map((el) => (
                    <TableCell key={el.label} align={el.align}>{el.label}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component='th' scope='row' sx={{ fontSize: 12 }}>
                      {row.name}
                    </TableCell>
                    <TableCell align='right' sx={{ fontSize: 12 }}>
                      {row.timeSlot}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </WidgetWrapper>
    </div>
  );
};

export default Appointments;
