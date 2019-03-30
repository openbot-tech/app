import React, { Component } from 'react';
import './App.css';
import Chart from './components/Chart';
import Navbar from './components/NavBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      chartData: {
        labels: ['26/03', '27/03', '28/03', '29/03', '30/03', '31/03'],
        datasets: [{
          label: 'ETH / US$',
          data: [
            90,
            230,
            480,
            322,
            181,
            617,
          ],
          backgroundColor: [
            '#ffffff',
            'rgba(255, 99, 132, 0.6)',
            'rgba(255, 99, 132, 0.6)',
            'rgba(255, 99, 132, 0.6)',
            'rgba(255, 99, 132, 0.6)',
            'rgba(255, 99, 132, 0.6)',
          ],
        },
      ],
      },
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Chart chartData={this.state.chartData} />
      </div>
    );
  }
}

export default App;
