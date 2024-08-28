import React from 'react';
import styles from './ClientAndCases.module.css';
import WidgetWrapper from '../../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { taskStatus } from '../../../../util/commons';

function createData(caseId, clientName, caseType, status, assignedAttorney, lastUpdated) {
  return {
    caseId, clientName, caseType, status, assignedAttorney, lastUpdated
  };
}

const data = [
  {
    caseId: 'C001',
    clientName: 'John Doe',
    caseType: 'Divorce',
    status: 'inProgress',
    assignedAttorney: 'Jane Smith',
    lastUpdated: '2024-08-15',
  },
  {
    caseId: 'C002',
    clientName: 'Alice Johnson',
    caseType: 'Personal Injury',
    status: 'completed',
    assignedAttorney: 'Michael Brown',
    lastUpdated: '2024-08-10',
  },
  {
    caseId: 'C003',
    clientName: 'Robert Davis',
    caseType: 'Criminal Defense',
    status: 'pending',
    assignedAttorney: 'Emily Wilson',
    lastUpdated: '2024-08-18',
  },
  {
    caseId: 'C004',
    clientName: 'Sophia Martinez',
    caseType: 'Corporate Law',
    status: 'inProgress',
    assignedAttorney: 'David Lee',
    lastUpdated: '2024-08-19',
  },
  {
    caseId: 'C005',
    clientName: 'William Taylor',
    caseType: 'Family Law',
    status: 'completed',
    assignedAttorney: 'Sophia Clark',
    lastUpdated: '2024-08-11',
  },
  {
    caseId: 'C006',
    clientName: 'Emma Anderson',
    caseType: 'Immigration',
    status: 'inProgress',
    assignedAttorney: 'James Walker',
    lastUpdated: '2024-08-21',
  },
  {
    caseId: 'C007',
    clientName: 'Oliver Thomas',
    caseType: 'Real Estate',
    status: 'pending',
    assignedAttorney: 'Isabella Hall',
    lastUpdated: '2024-08-20',
  },
  {
    caseId: 'C008',
    clientName: 'Charlotte White',
    caseType: 'Divorce',
    status: 'inProgress',
    assignedAttorney: 'Lucas King',
    lastUpdated: '2024-08-13',
  },
  {
    caseId: 'C009',
    clientName: 'Liam Harris',
    caseType: 'Employment Law',
    status: 'completed',
    assignedAttorney: 'Mia Scott',
    lastUpdated: '2024-08-14',
  },
  {
    caseId: 'C010',
    clientName: 'Ava Walker',
    caseType: 'Criminal Defense',
    status: 'pending',
    assignedAttorney: 'Noah Parker',
    lastUpdated: '2024-08-16',
  },
  {
    caseId: 'C011',
    clientName: 'Mason Young',
    caseType: 'Corporate Law',
    status: 'inProgress',
    assignedAttorney: 'Amelia Turner',
    lastUpdated: '2024-08-17',
  },
  {
    caseId: 'C012',
    clientName: 'Isabella Adams',
    caseType: 'Family Law',
    status: 'completed',
    assignedAttorney: 'Ethan Morgan',
    lastUpdated: '2024-08-12',
  },
  {
    caseId: 'C013',
    clientName: 'James Lewis',
    caseType: 'Immigration',
    status: 'inProgress',
    assignedAttorney: 'Harper Torres',
    lastUpdated: '2024-08-20',
  },
  {
    caseId: 'C014',
    clientName: 'Mia Clark',
    caseType: 'Personal Injury',
    status: 'pending',
    assignedAttorney: 'Alexander Ramirez',
    lastUpdated: '2024-08-15',
  },
  {
    caseId: 'C015',
    clientName: 'Sophia Hall',
    caseType: 'Divorce',
    status: 'inProgress',
    assignedAttorney: 'Benjamin Foster',
    lastUpdated: '2024-08-19',
  },
  {
    caseId: 'C016',
    clientName: 'Evelyn Lopez',
    caseType: 'Real Estate',
    status: 'completed',
    assignedAttorney: 'Charlotte Murphy',
    lastUpdated: '2024-08-11',
  },
  {
    caseId: 'C017',
    clientName: 'Lucas Gonzalez',
    caseType: 'Criminal Defense',
    status: 'pending',
    assignedAttorney: 'Henry Bailey',
    lastUpdated: '2024-08-18',
  },
  {
    caseId: 'C018',
    clientName: 'Ella Hernandez',
    caseType: 'Corporate Law',
    status: 'inProgress',
    assignedAttorney: 'Grace Rivera',
    lastUpdated: '2024-08-22',
  },
  {
    caseId: 'C019',
    clientName: 'Logan Martinez',
    caseType: 'Family Law',
    status: 'completed',
    assignedAttorney: 'Daniel Cooper',
    lastUpdated: '2024-08-13',
  },
  {
    caseId: 'C020',
    clientName: 'Victoria Perez',
    caseType: 'Immigration',
    status: 'pending',
    assignedAttorney: 'Jackson Reed',
    lastUpdated: '2024-08-17',
  },
];

const rows = data.map((el) => createData(el.caseId, el.clientName, el.caseType, el.status, el.assignedAttorney, el.lastUpdated));

const widgetConfig = {
  defaultFilter: 5,
  controlOptions: [
    { label: 'Top 5', value: 5 },
    { label: 'Top 10', value: 10 },
    { label: 'Top 15', value: 15 },
  ],
  tableHeaders: [
    {
      label: 'Case ID',
    },
    {
      label: 'Client Name',
      align: 'right',
    },
    {
      label: 'Case Type',
      align: 'right',
    },
    {
      label: 'status',
      align: 'right',
    },
    {
      label: 'Assigned Attorney',
      align: 'right',
    },
    {
      label: 'Last Updated',
      align: 'right',
    },
    
  ],
};

const ClientAndCases = ({ widget }) => {
  return (
    <div className={styles.ClientAndCases}>
      <WidgetWrapper widgetName={widget.widgetName}>
        <Box
          sx={{
            height: '100%',
          }}
        >
          <TableContainer
            component={Paper}
            sx={{
              maxHeight: 280,
              overflow: 'auto',
            }}
          >
            <Table
              aria-label='simple table'
              size='small'
              stickyHeader
              sx={{ boxShadow: 'none' }}
            >
              <TableHead>
                <TableRow>
                  {widgetConfig.tableHeaders.map((el) => (
                    <TableCell key={el.label} align={el.align}>
                      {el.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.caseId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component='th' scope='row' sx={{ fontSize: 12 }}>
                      {row.caseId}
                    </TableCell>
                    <TableCell align='right' sx={{ fontSize: 12 }}>
                      {row.clientName}
                    </TableCell>
                    <TableCell align='right' sx={{ fontSize: 12 }}>
                      {row.caseType}
                    </TableCell>
                    <TableCell align='right' sx={{ fontSize: 12, color: taskStatus(row.status).color }}>
                      {taskStatus(row.status).label}
                    </TableCell>
                    <TableCell align='right' sx={{ fontSize: 12 }}>
                      {row.assignedAttorney}
                    </TableCell>
                    <TableCell align='right' sx={{ fontSize: 12 }}>
                      {row.lastUpdated}
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

export default ClientAndCases;
