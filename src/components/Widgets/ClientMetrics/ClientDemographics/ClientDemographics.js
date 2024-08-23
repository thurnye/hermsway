import React, { useState, useMemo } from 'react';
import styles from './ClientDemographics.module.css';
import WidgetWrapper from '../../../HOC/WidgetWrapper/WidgetWrapper';
import Box from '@mui/material/Box';
import HorizontalBarChart from '../../../Charts/BarCharts/HorizontalBarChart/HorizontalBarChart';
import Typography from '@mui/material/Typography';
import womenSign from '../../../../assets/images/women_sign.png';
import menSign from '../../../../assets/images/men_sign.png';
import { colors } from '../../../../assets/theme/colors';
import StackedBarChart from '../../../Charts/BarCharts/StackedBarChart/StackedBarChart';

const horizontalSeries = [
  { dataKey: 'men', label: 'Male', valueFormatter: (value) => `${value}` },
  { dataKey: 'women', label: 'Female', valueFormatter: (value) => `${value}` },
];

const calculateTotalsAndClients = (data) => {
  const totals = {
    caseTypeA: { men: 0, women: 0 },
    caseTypeB: { men: 0, women: 0 },
    caseTypeC: { men: 0, women: 0 },
    caseTypeD: { men: 0, women: 0 },
  };

  let totalMen = 0;
  let totalWomen = 0;

  data.forEach((country) => {
    Object.keys(totals).forEach((caseType) => {
      totals[caseType].men += country.caseType[caseType].men;
      totals[caseType].women += country.caseType[caseType].women;
    });
    totalMen += country.men;
    totalWomen += country.women;
  });

  return { totals, totalClients: { men: totalMen, women: totalWomen } };
};

const ClientDemographics = ({ widget }) => {
  const [data, setData] = useState(dataset);  
  const { totals, totalClients } = useMemo(() => calculateTotalsAndClients(data), [data]);

  const totalPercentage = (value, total) => Math.floor((value / total) * 100);

  const BarWithLabel = ({ caseType, value, total, color }) => (
    <Box sx={{ display: 'flex' }}>
      <Box
        sx={{
          width: 150,
          position: 'relative',
          borderRadius: 10,
          height: 10,
          mb: 2,
          textAlign: 'end',
        }}
      >
        <Box
          sx={{
            width: `calc(${value} / ${total} * 100%)`,
            background: color,
            height: 10,
            borderRadius: 10,
            position: 'absolute',
            top: 0,
          }}
        />
        <Typography sx={{ fontSize: 10, mt: '8px', textAlign: 'start' }}>{caseType}</Typography>
        <Typography sx={{ mt: -3, fontSize: 12 }}>{totalPercentage(value, total)}%</Typography>
      </Box>
    </Box>
  );

  return (
    <div className={styles.ClientDemographics}>
      <WidgetWrapper widgetName={widget.widgetName}>
        <Box sx={{ 
          height: '100%', 
          display: 'flex',
          flexDirection: {xs: 'column', md: 'row'} 
          }}>
          {/* <HorizontalBarChart /> */}
          <Box sx={{
            pl: 3
          }}>
            <StackedBarChart
                chartType="horizontal"
                series={horizontalSeries}
                dataset={dataset}
                label={ 'Client Density By Country'}
                dataKey={'country'}
            />

          </Box>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center',
            mt: {xs: 2, md: 'initial'} 
            }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
              {[{ src: menSign, value: totalClients.men, color: '#007FFF' }, { src: womenSign, value: totalClients.women, color: '#3F7F00' }].map(({ src, value, color }, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', ...(index === 0 ? { mr: 2 } : { ml: 2 }) }}>
                  <Typography
                    variant='h6'
                    color='text.secondary'
                    sx={{
                      width: 35,
                      height: 35,
                      borderRadius: '50%',
                      color: '#f6f6f6',
                      background: color,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: 12,
                    }}
                  >
                    {totalPercentage(value, totalClients.men + totalClients.women)}%
                  </Typography>
                  <img src={src} width={'25px'} alt={`${index === 0 ? 'men' : 'women'} sign`} />
                </Box>
              ))}
            </Box>
            <Typography sx={{fontSize: 14, mt: -2}} color='text.secondary'> Client Density </Typography>
            <Box sx={{ height: 10, width: 200, background: '#3F7F00', borderRadius: 10, position: 'relative' }}>
              <Box
                sx={{
                  width: `calc(${totalClients.men} / ${totalClients.men + totalClients.women} * 100%)`,
                  height: '100%',
                  background: '#007FFF',
                  borderRadius: 10,
                  position: 'absolute',
                  top: 0,
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <Box sx={{ background: 'white', height: 10, width: 10, borderRadius: 10 }} />
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, justifyContent: 'center', alignItems: 'center', mt: 2 }}>
              {[{ type: 'men', sign: menSign }, { type: 'women', sign: womenSign }].map(({ type, sign }, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center',mt: {xs: 3, sm: 'initial'}, ...(i === 0 ? { mr: {xs: 'initial', sm: 3} } : { ml: {xs: 'initial', sm: 3},  }) }}>
                  <img src={sign} width={'25px'} alt={`${type} sign`} />
                  <Box>
                    {Object.keys(totals).map((caseType, index) => (
                      <BarWithLabel
                        key={caseType}
                        caseType={caseType}
                        value={totals[caseType][type]}
                        total={totals[caseType].men + totals[caseType].women}
                        color={colors[index]}
                      />
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </WidgetWrapper>
    </div>
  );
};

export default ClientDemographics;


const dataset = [
  {
    country: 'China',
    totalPopulation: 1400,
    men: 700,
    women: 700,
    percentageMen: 50.0,
    percentageWomen: 50.0,
    caseType: {
      caseTypeA: {
        men: 140,
        women: 140,
      },
      caseTypeB: {
        men: 245,
        women: 245,
      },
      caseTypeC: {
        men: 175,
        women: 175,
      },
      caseTypeD: {
        men: 70,
        women: 70,
      },
    },
  },
  {
    country: 'India',
    totalPopulation: 1410,
    men: 710,
    women: 700,
    percentageMen: 50.3,
    percentageWomen: 49.7,
    caseType: {
      caseTypeA: {
        men: 142,
        women: 140,
      },
      caseTypeB: {
        men: 248,
        women: 238,
      },
      caseTypeC: {
        men: 176,
        women: 168,
      },
      caseTypeD: {
        men: 71,
        women: 70,
      },
    },
  },
  {
    country: 'United States',
    totalPopulation: 332,
    men: 163,
    women: 169,
    percentageMen: 49.1,
    percentageWomen: 50.9,
    caseType: {
      caseTypeA: {
        men: 326,
        women: 338,
      },
      caseTypeB: {
        men: 57,
        women: 62,
      },
      caseTypeC: {
        men: 41,
        women: 44,
      },
      caseTypeD: {
        men: 16,
        women: 16,
      },
    },
  },
  {
    country: 'Indonesia',
    totalPopulation: 273,
    men: 134,
    women: 139,
    percentageMen: 49.0,
    percentageWomen: 51.0,
    caseType: {
      caseTypeA: {
        men: 268,
        women: 278,
      },
      caseTypeB: {
        men: 47,
        women: 485,
      },
      caseTypeC: {
        men: 34,
        women: 35,
      },
      caseTypeD: {
        men: 13,
        women: 14,
      },
    },
  },
  {
    country: 'Pakistan',
    totalPopulation: 241,
    men: 122,
    women: 119,
    percentageMen: 50.6,
    percentageWomen: 49.4,
    caseType: {
      caseTypeA: {
        men: 244,
        women: 24,
      },
      caseTypeB: {
        men: 43,
        women: 41,
      },
      caseTypeC: {
        men: 31,
        women: 29,
      },
      caseTypeD: {
        men: 12,
        women: 11,
      },
    },
  },
  {
    country: 'Brazil',
    totalPopulation: 213,
    men: 105,
    women: 108,
    percentageMen: 49.3,
    percentageWomen: 50.7,
    caseType: {
      caseTypeA: {
        men: 21,
        women: 215,
      },
      caseTypeB: {
        men: 37,
        women: 38,
      },
      caseTypeC: {
        men: 27,
        women: 275,
      },
      caseTypeD: {
        men: 10,
        women: 11,
      },
    },
  },
  {
    country: 'Nigeria',
    totalPopulation: 211,
    men: 106,
    women: 105,
    percentageMen: 50.2,
    percentageWomen: 49.8,
    caseType: {
      caseTypeA: {
        men: 212,
        women: 21,
      },
      caseTypeB: {
        men: 37,
        women: 36,
      },
      caseTypeC: {
        men: 27,
        women: 26,
      },
      caseTypeD: {
        men: 10,
        women: 9,
      },
    },
  },
  {
    country: 'Bangladesh',
    totalPopulation: 169,
    men: 84,
    women: 85,
    percentageMen: 49.7,
    percentageWomen: 50.3,
    caseType: {
      caseTypeA: {
        men: 168,
        women: 17,
      },
      caseTypeB: {
        men: 30,
        women: 305,
      },
      caseTypeC: {
        men: 22,
        women: 225,
      },
      caseTypeD: {
        men: 8,
        women: 9,
      },
    },
  },
  {
    country: 'Russia',
    totalPopulation: 143,
    men: 67,
    women: 76,
    percentageMen: 46.8,
    percentageWomen: 53.2,
    caseType: {
      caseTypeA: {
        men: 67,
        women: 76,
      },
      caseTypeB: {
        men: 12,
        women: 15,
      },
      caseTypeC: {
        men: 88,
        women: 105,
      },
      caseTypeD: {
        men: 3,
        women: 4,
      },
    },
  },
  {
    country: 'Mexico',
    totalPopulation: 126,
    men: 62,
    women: 64,
    percentageMen: 49.2,
    percentageWomen: 50.8,
    caseType: {
      caseTypeA: {
        men: 62,
        women: 64,
      },
      caseTypeB: {
        men: 11,
        women: 115,
      },
      caseTypeC: {
        men: 8,
        women: 85,
      },
      caseTypeD: {
        men: 3,
        women: 35,
      },
    },
  },
];
