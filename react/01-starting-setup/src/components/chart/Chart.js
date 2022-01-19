// import React from 'react';

import ChartBar from './ChartBar';
import '../../css/Chart.css';
const Chart = (props) => {
  console.log('props inside Chart.js', props);
  return (
    <div className="Chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.key}
          value={datapoint.value}
          maxValue={null}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
