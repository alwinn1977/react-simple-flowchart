# react-simple-flowchart

![Downloads](https://img.shields.io/npm/dm/react-simple-flowchart.svg)
![Downloads](https://img.shields.io/npm/dt/react-simple-flowchart.svg)
![npm version](https://img.shields.io/npm/v/react-simple-flowchart.svg)
![dependencies](https://img.shields.io/david/alwinn1977/react-simple-flowchart.svg)
![dev dependencies](https://img.shields.io/david/dev/alwinn1977/react-simple-flowchart.svg)
![License](https://img.shields.io/npm/l/react-simple-flowchart.svg)

The simple React.js flowchart component based on [flowchart.js](https://github.com/adrai/flowchart.js)

## Getting Started

Install it via npm:

```shell
npm install react-simple-flowchart
```

And include in your project:

```javascript
import Flowchart from 'react-simple-flowchart';
```

React.js (ES6) usage example:

```javascript
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
```

It will be looks as below:

![react-simple-flowchart usage example](assets/screenshot.png)

See [flowchart.js](https://github.com/adrai/flowchart.js) to learn more about flowchart and options syntax.

See example of realtime flowchart editor in demo folder:

```shell

cd demo
npm install
npm run serve
```
Then open localhost:3000 in your browser.

## License

MIT
