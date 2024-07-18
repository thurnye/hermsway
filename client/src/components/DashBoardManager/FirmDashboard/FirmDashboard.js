import React from 'react';
import styles from './FirmDashboard.module.css';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';



const FirmDashboard = () => {
  const dashboardWidgets = useSelector(
    (state) => state.userLog.dashboardWidgets
  );
  console.log(dashboardWidgets)

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
                <Grid
                  item
                  key={widget._id}
                  {...widgetDimension}
                  sx={{  }}
                >
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
