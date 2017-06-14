import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlowChart from 'flowchart.js';

class Flowchart extends Component {

  static propTypes = {
    chartCode: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    onClick: PropTypes.func
  };

  static defaultProps = {
    onClick: () => null
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

  handleClick(e) {
    if (e.target.tagName === 'tspan') {
      this.props.onClick(e.target.innerHTML);
    }
    if (e.target.tagName === 'rect' || e.target.tagName === 'path') {
      this.props.onClick(e.target.id);
    }

  }

  render() {
    return (
      <div ref={div => this.chart = div} onClick={e => this.handleClick(e)} />
    );
  };
}

export default Flowchart;
