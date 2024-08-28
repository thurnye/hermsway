import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import {colors } from '../../../../assets/theme/colors';


const data1 = [
  { name: 'Vashi', value: 400 },
  { name: 'Ahmed', value: 180 },
  { name: 'Reyhan', value: 300 },
  { name: 'Mykytenko', value: 200 },
].map((item, index) => ({ ...item, fill: colors[index % colors.length] }));


const data2 = [
  { name: 'loss', value: 100, label: 'Vashi', fill: '#60009B' },
  { name: 'win', value: 300, label: 'Vashi', fill: '#B800D8'},
  { name: 'loss', value: 100, label: 'Ahmed', fill: '#60009B' },
  { name: 'win', value: 80, label: 'Ahmed', fill: '#B800D8'},
  { name: 'loss', value: 100, label: 'Reyhan', fill: '#60009B' },
  { name: 'win', value: 200, label: 'Reyhan', fill: '#B800D8'},
  { name: 'loss', value: 150, label: 'Mykytenko', fill: '#60009B' },
  { name: 'win', value: 50, label: 'Mykytenko', fill: '#B800D8'},
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      {/* Label in the center */}
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.label}
      </text>
      
      {/* Active Sector */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />

      {/* Pointer and value */}
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333" style={{
        fontSize: '12px'
      }}>
        {`Value: ${value}`}
      </text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {payload.name}
      </text>
    </g>
  );
};

export default class DoublePie extends PureComponent {
  state = {
    activeIndex2: 0,
  };

  onPieEnter2 = (_, index) => {
    this.setState({
      activeIndex2: index,
    });
  };

  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data1}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            fill="#8884d8"
            dataKey="value"
          />
          <Pie
            activeIndex={this.state.activeIndex2}
            activeShape={renderActiveShape}
            data={data2}
            cx="50%"
            cy="50%"
            innerRadius={90}
            outerRadius={110}
            fill="#82ca9d"
            dataKey="value"
            onMouseEnter={this.onPieEnter2}
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
