import React, { Component, PropTypes } from 'react';
import FlowChart from 'flowchart.js';

class Flowchart extends Component {

  static propTypes = {
    chartCode: React.PropTypes.string,
    options: React.PropTypes.object,
  };

componentDidMount() {
  const { chartCode, options } = this.props;
  const flow = FlowChart.parse(chartCode);

  if (this.refs.chart) {
    flow.drawSVG(this.refs.chart, options);
  }
};

render() {
  return (
    <div ref="chart" />
  );
};
};

export default Flowchart;
