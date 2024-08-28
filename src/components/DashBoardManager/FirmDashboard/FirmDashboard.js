import React from 'react';
import styles from './FirmDashboard.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';

import TotalClients from '../../Widgets/GeneralMetrics/TotalClients/TotalClients';
import SpendingSummary from '../../Widgets/GeneralMetrics/SpendingSummary/SpendingSummary';
import ActiveCases from '../../Widgets/GeneralMetrics/ActiveCases/ActiveCases';
import UnAssignedCases from '../../Widgets/GeneralMetrics/UnAssignedCases/UnAssignedCases';
import NewCase from '../../Widgets/GeneralMetrics/NewCase/NewCase';

import Appointments from '../../Widgets/ActivitiesMetrics/Appointments/Appointments';
import OutstandingTasksAndAssignments from '../../Widgets/ActivitiesMetrics/OutstandingTasksAndAssignments/OutstandingTasksAndAssignments';
import RecentCommunication from '../../Widgets/ActivitiesMetrics/RecentCommunication/RecentCommunication';
import RecentActivities from '../../Widgets/ActivitiesMetrics/RecentActivities/RecentActivities';

import CaseLoadDistribution from '../../Widgets/EmployeeMetrics/CaseLoadDistribution/CaseLoadDistribution';
import CasesWinAndLoss from '../../Widgets/EmployeeMetrics/CasesWinAndLoss/CasesWinAndLoss';

import OutcomeTrends from '../../Widgets/ClientMetrics/OutcomeTrends/OutcomeTrends';
import ClientSatisfaction from '../../Widgets/ClientMetrics/ClientSatisfaction/ClientSatisfaction';
import ClientFiling from '../../Widgets/ClientMetrics/ClientFiling/ClientFiling';
import ClientDemographics from '../../Widgets/ClientMetrics/ClientDemographics/ClientDemographics';
import ClientAndCases from '../../Widgets/ClientMetrics/ClientAndCases/ClientAndCases';

const FirmDashboard = () => {
  const dashboardWidgets = useSelector(
    (state) => state.userLog.dashboardWidgets
  );
  // console.log(dashboardWidgets);

  const getWidget = (widget) => {
    switch (widget.widgetComponentName) {
      // General
      case 'totalClients':
        return <TotalClients widget={widget} />;
      case 'spendingSummary':
        return <SpendingSummary widget={widget} />;
      case 'activeCases':
        return <ActiveCases widget={widget} />;
      case 'unassignedCases':
        return <UnAssignedCases widget={widget} />;
      case 'newCase':
        return <NewCase widget={widget} />;

      //Activities
      case 'appointments':
        return <Appointments widget={widget} />;
      case 'outstandingTasks':
        return <OutstandingTasksAndAssignments widget={widget} />;
      case 'recentCommunication':
        return <RecentCommunication widget={widget} />;
      case 'recentActivities':
        return <RecentActivities widget={widget} />;

      // Employee
      case 'caseLoadDistribution':
        return <CaseLoadDistribution widget={widget} />;
      case 'casesWinAndLoss':
        return <CasesWinAndLoss widget={widget} />;

      // Client
      case 'outcomeTrends':
        return <OutcomeTrends widget={widget} />;
      case 'clientSatisfaction':
        return <ClientSatisfaction widget={widget} />;
      case 'clientFiling':
        return <ClientFiling widget={widget} />;
      case 'clientDemographics':
        return <ClientDemographics widget={widget} />;
      case 'clientAndCases':
        return <ClientAndCases widget={widget} />;

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
          <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12 }} sx={{}}>
            {dashboardWidgets[key].map((widget) => {
              const widgetDimension = parseWidgetDimension(
                widget.widgetDimension
              );

              return (
                <Grid item key={widget._id} {...widgetDimension} sx={{
                  display:'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  }}>
                  {getWidget(widget)}
                </Grid>
              );
            })}
          </Grid>
        </Box>
      ))}
    </div>
  );
};

export default FirmDashboard;
