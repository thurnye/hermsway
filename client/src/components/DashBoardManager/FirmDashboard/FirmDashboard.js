import React from 'react';
import styles from './FirmDashboard.module.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
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

const FirmDashboard = () => {
  const dashboardWidgets = useSelector(
    (state) => state.userLog.dashboardWidgets
  );
  console.log(dashboardWidgets);

  const getWidget = (widgetComponentName) => {
    switch (widgetComponentName) {
      case 'activeCases':
        return <ActiveCases />;
      case 'appointments':
        return <Appointments />;
      case 'clientReports':
        return <ClientReports />;
      case 'employeesReports':
        return <EmployeesReports />;
      case 'newCase':
        return <NewCase />;
      case 'outstandingTasksAndAssignments':
        return <OutstandingTasksAndAssignments />;
      case 'pendingClientPayment':
        return <PendingClientPayment />;
      case 'recentActivities':
        return <RecentActivities />;
      case 'recentCommunication':
        return <RecentCommunication />;
      case 'something':
        return <Something />;
      case 'somethingCases':
        return <SomethingCases />;
      case 'somethingHere':
        return <SomethingHere />;
      case 'spendingSummary':
        return <SpendingSummary />;
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
      {/* section 1 */}
      {dashboardWidgets.map((dashboardSection) => (
        <Paper
          key={dashboardSection.section._id}
          sx={{
            p: 2,
            my: 2,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
          >
            {dashboardSection.widgets.map((widget) => {
              const widgetDimension = parseWidgetDimension(
                widget.widgetDimension
              );

              return (
                <Grid item key={widget._id} {...widgetDimension} sx={{}}>
                  {getWidget(widget.widgetComponentName)}
                  <Card>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color='text.secondary'
                        gutterBottom
                      >
                        {widget.widgetName}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='small'>Learn More</Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Paper>
      ))}
    </div>
  );
};

export default FirmDashboard;
