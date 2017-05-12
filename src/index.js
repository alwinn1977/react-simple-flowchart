import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlowChart from 'flowchart.js';

class Flowchart extends Component {

  static propTypes = {
    chartCode: PropTypes.string,
    options: PropTypes.object,
  };

  componentDidMount() {
    const { chartCode, options } = this.props;
    const flow = FlowChart.parse(chartCode);

    if (this.chart) {
      flow.drawSVG(this.chart, options);
    }
  };

  componentDidUpdate() {
    const { chartCode, options } = this.props;
    const flowNew = FlowChart.parse(chartCode);

    if (this.chart) {
      this.chart.removeChild(this.chart.children[0]);
      flowNew.drawSVG(this.chart, options);
    }
  };

  render() {
    return (
      <div ref={div => this.chart = div} />
    );
  };
}

export default Flowchart;
