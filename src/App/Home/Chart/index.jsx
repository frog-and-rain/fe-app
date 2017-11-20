import React from 'react';
import ChartJS from 'chart.js';

import './styles.css';

class ChartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.node = null;
    this.chart = null;
    this.setNode = this.setNode.bind(this);
  }
  setNode(node) {
    this.node = node;
  }

  componentDidMount() {

    this.chart = new ChartJS(this.node, {
      type: 'line',
      data: {
        labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
        datasets: [{
          data: [0,114,106,106,107,111,133,221,783,2478],
          label: "Africa",
          borderColor: "#3e95cd",
          fill: false
        }, {
          data: [0,350,411,502,635,809,947,1402,3700,5267],
          label: "Asia",
          borderColor: "#8e5ea2",
          fill: false
        }, {
          data: [0,170,178,190,203,276,408,547,675,734],
          label: "Europe",
          borderColor: "#3cba9f",
          fill: false
        }]
      },
      options: {
        title: {
          display: true,
          text: 'World population per region (in millions)'
        }
      }
    });
  }

  render() {
    return (
      <div className="chart">
        <canvas ref={this.setNode} />
      </div>
    );
  }
};

export default ChartComponent;
