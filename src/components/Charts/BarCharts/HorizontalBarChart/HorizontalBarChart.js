import React from 'react';
import styles from './HorizontalBarChart.module.css';
import { BarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
  xAxis: [
    {
      label: 'Client Density By Country',
    },
  ],
  width: 500,
  height: 400,
};

const valueFormatter = (value) => `${value}`;


const HorizontalBarChart = () => {
  return(
  <div className={styles.HorizontalBarChart}>
   <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'country' }]}
      series={[
        { dataKey: 'men', label: 'Male', valueFormatter },
        { dataKey: 'women', label: 'Female', valueFormatter },
        
      ]}
      layout="horizontal"
      {...chartSetting}
      
    />
  </div>
)};


export default HorizontalBarChart;

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

