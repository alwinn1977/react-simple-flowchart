import React, { Component } from 'react';
import Flowchart from 'react-simple-flowchart';


export class Flowdemo extends Component {

  constructor(props) {
    super(props);
    const code = 'st=>start: Begin\n' +
      'e=>end: End:>http://www.google.com\n' +
      'op1=>operation: Operation 1|department1\n' +
      'op2=>operation: Operation 2|department2\n' +
      'op3=>operation: Operation 3|department2\n' +
      'op4=>operation: Operation 4|department2\n' +
      'st(right)->op1(right)->op2(right)->op3(right)->op4(right)->e';
    const opt = {
      x: 0,
      y: 0,
      'line-width': 3,
      'line-length': 50,
      'text-margin': 10,
      'font-size': 14,
      'font-color': 'black',
      'line-color': 'black',
      'element-color': 'black',
      fill: 'white',
      'yes-text': 'yes',
      'no-text': 'no',
      'arrow-end': 'block',
      scale: 1,
      symbols: {
        start: {
          'font-color': 'red',
          'element-color': 'green',
          'font-weight': 'bold',
        },
        end: {
          'font-color': 'red',
          'element-color': 'green',
          'font-weight': 'bold',
        },
      },
      flowstate: {
        department1: { fill: 'pink' },
        department2: { fill: 'yellow' },
      },
    };

    this.state = {
      code,
      opt,
    }
  }

  handleCodeChange(e) {
    this.setState({
      code: e.target.value,
    });

  }

  handleOptChange(e) {
    this.setState({
      opt: JSON.parse(e.target.value),
    });

  }

  render() {
    const { code, opt } = this.state;
    return (
      <div>
        <p>Edit flowchart in real time!</p>
        <textarea
          cols="100"
          rows="10"
          value={code}
          onChange={(e) => this.handleCodeChange(e)}
        />
        <br /><br />
        <p>Flowchart options</p>
        <textarea cols="100"
                  rows="10"
                  value={JSON.stringify(opt)}
                  onChange={(e) => this.handleOptChange(e)}
        />
        <br /><br />
        <p>Result</p>
        <Flowchart chartCode={code} options={opt} />
      </div>
    );
  }
}
