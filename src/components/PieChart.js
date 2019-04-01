import React, {Component} from 'react';
import { Pie } from 'react-chartjs-2';

class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
    };
  }

  render() {
    return (
      <div className="chart">
        <Pie
        data={this.state.chartData}
        height={80}
        options={{
          title: {
            display: true,
            text: 'Your Portfolio',
            fontSize: 25,
          },
          legend: {
            display: true,
            position: 'right',
            labels: {
              fontColor: '#000',
            },
          },
          layout: {
            padding: {
              left: 50,
              right: 0,
              bottom: 0,
              top: 0,
            },
          },
          tooltips: {
            enabled: true,
          },
        }}
        />
      </div>
    );
  }
}

export default PieChart;
