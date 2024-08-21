import React from 'react';
import styles from './FirmDashboard.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import NewCase from '../../Widgets/NewCase/NewCase';
import SpendingSummary from '../../Widgets/SpendingSummary/SpendingSummary';
import OutstandingTasksAndAssignments from '../../Widgets/OutstandingTasksAndAssignments/OutstandingTasksAndAssignments';
import RecentActivities from '../../Widgets/RecentActivities/RecentActivities';
import Appointments from '../../Widgets/Appointments/Appointments';
import EmployeesReports from '../../Widgets/EmployeesReports/EmployeesReports';
import SomethingHere from '../../Widgets/SomethingHere/SomethingHere';
import ClientReports from '../../Widgets/ClientReports/ClientReports';
import PendingClientPayment from '../../Widgets/PendingClientPayment/PendingClientPayment';
import Something from '../../Widgets/Something/Something';
import SomethingCases from '../../Widgets/SomethingCases/SomethingCases';
import RecentCommunication from '../../Widgets/RecentCommunication/RecentCommunication';
import ActiveCases from '../../Widgets/ActiveCases/ActiveCases';
import UnAssignedCases from '../../Widgets/UnAssignedCases/UnAssignedCases';

const FirmDashboard = () => {
  const dashboardWidgets = useSelector(
    (state) => state.userLog.dashboardWidgets
  );
  // console.log(dashboardWidgets);

  const getWidget = (widget) => {
    switch (widget.widgetComponentName) {
      case 'activeCases':
        return <ActiveCases widget={widget} />;
      case 'unassignedCases':
        return <UnAssignedCases widget={widget} />;
      case 'appointments':
        return <Appointments widget={widget} />;
      case 'clientReports':
        return <ClientReports widget={widget} />;
      case 'employeesReports':
        return <EmployeesReports widget={widget} />;
      case 'newCase':
        return <NewCase widget={widget} />;
      case 'outstandingTasksAndAssignments':
        return <OutstandingTasksAndAssignments widget={widget} />;
      case 'pendingClientPayment':
        return <PendingClientPayment widget={widget} />;
      case 'recentActivities':
        return <RecentActivities widget={widget} />;
      case 'recentCommunication':
        return <RecentCommunication widget={widget} />;
      case 'something':
        return <Something widget={widget} />;
      case 'somethingCases':
        return <SomethingCases widget={widget} />;
      case 'somethingHere':
        return <SomethingHere widget={widget} />;
      case 'spendingSummary':
        return <SpendingSummary widget={widget} />;
      default:
        return <></>;
    }
  };

  const parseWidgetDimension = (dimensionStr) => {
    const regex = /(\w+)=\{(\d+)\}/g;
    const dimensions = {};
    let match;
    while ((match = regex.exec(dimensionStr)) !== null) {
      dimensions[match[1]] = parseInt(match[2], 10);
    }
    return dimensions;
  };

  return (
    <div className={styles.FirmDashboard}>
      {Object.keys(dashboardWidgets).map((key) => (
        <Box
          key={key}
          sx={{
            p: 2,
            my: 2,
            flexGrow: 1,
            // backgroundColor: (theme) =>
            //   theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
        >
          <Grid
            container
            spacing={2}
            columns={{ xs: 12, sm: 12, md: 12 }}
          >
            {dashboardWidgets[key].map((widget) => {
              const widgetDimension = parseWidgetDimension(
                widget.widgetDimension
              );

              return (
                <>
                  <Grid item key={widget._id} {...widgetDimension} sx={{}}>
                  {getWidget(widget)}
                  
                </Grid>
                </>
              );
            })}
          </Grid>
        </Box>
      ))}
    </div>
  );
};

export default FirmDashboard;
