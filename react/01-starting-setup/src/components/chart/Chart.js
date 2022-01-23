// import React from 'react';

import ChartBar from './ChartBar';
import '../../css/Chart.css';
const Chart = (props) => {
  //   console.log('props.dataPoints result--->', props.dataPoints);
  const dataPointsValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValue); /// Math.Max takes in an array of [1,2,3,4,5,6,7,8,9]

  // return (
  //   <div className="chart">
  //     {props.dataPoints.map((datapoint) => (
  //       <ChartBar
  //         key={datapoint.label}
  //         value={datapoint.value}
  //         maxValue={totalMaximum}
  //         label={datapoint.label}
  //       />
  //     ))}
  //   </div>
  // );
};

export default Chart;
