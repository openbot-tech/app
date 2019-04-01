import React, { Component } from 'react';
import './App.css';
import Chart from './components/Chart';
import PieChart from './components/PieChart';
import Navbar from './components/NavBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
      piechartData: {},
    };
  }

  componentWillMount() {
    this.getChartData();
    this.getPieChartData();
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
            '#ede9e8',
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

  getPieChartData() {
    this.setState({
      piechartData: {
        labels: ['ETH', 'BTC', 'GNO', 'RDN', 'LSD', 'DAI'],
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
            '#34427c',
            '#e9d0a8',
            '#5d9f9c',
            '#ede9e8',
            '#74d855',
            '#dd8c54',
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
        <div className="container">
          <Chart chartData={this.state.chartData} />
        </div>
        <div className="container indicators">
          <div> ALPHA <br /> 9.121% </div>
          <div> PERFORMANCE <br /> 9.121% </div>
        </div>
        <div className="container">
          <div className="button"> Start Bot </div>
        </div>
        <div className="container">
          <PieChart chartData={this.state.piechartData} />
        </div>
      </div>
    );
  }
}

export default App;
