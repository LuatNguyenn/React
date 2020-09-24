import React, { Component } from "react";
import { Bar, Line } from "react-chartjs-2";

class Chart extends Component {
  render() {
    return (
      <div className='chart'>
        <Bar
          data={100}
          width={100}
          height={50}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}
export default Chart;
