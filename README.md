# react-simple-flowchart

![Build Status](https://img.shields.io/travis/alwinn1977/react-simple-flowchart.svg)
![Coverage](https://img.shields.io/coveralls/alwinn1977/react-simple-flowchart.svg)
![Downloads](https://img.shields.io/npm/dm/react-simple-flowchart.svg)
![Downloads](https://img.shields.io/npm/dt/react-simple-flowchart.svg)
![npm version](https://img.shields.io/npm/v/react-simple-flowchart.svg)
![dependencies](https://img.shields.io/david/alwinn1977/react-simple-flowchart.svg)
![dev dependencies](https://img.shields.io/david/dev/alwinn1977/react-simple-flowchart.svg)
![License](https://img.shields.io/npm/l/react-simple-flowchart.svg)

The simple React flowchart component based on [flowchart.js](https://github.com/adrai/flowchart.js)

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
render() {
const code = 'st=>start: Start:>http://www.google.com[blank]\n' +
                                             'e=>end:>http://www.google.com\n' +
                                             'op1=>operation: My Operation\n' +
                                             'sub1=>subroutine: My Subroutine\n' +
                                             'cond=>condition: Yes \n' +
                                             'or No?\n:>http://www.google.com' +
                                             'io=>inputoutput|request: catch something...\n' +
                                             '' +
                                             'st->op1->cond\n' +
                                             'cond(yes)->io->e\n' +
                                             'cond(no)->sub1(right)->op1';
const opt = {
                                            'x': 0,
                                            'y': 0,
                                            'line-width': 3,
                                            'line-length': 50,
                                            'text-margin': 10,
                                            'font-size': 14,
                                            'font-color': 'black',
                                            'line-color': 'black',
                                            'element-color': 'black',
                                            'fill': 'white',
                                            'yes-text': 'yes',
                                            'no-text': 'no',
                                            'arrow-end': 'block',
                                            'scale': 1,
                                            // style symbol types
                                            'symbols': {
                                                'start': {
                                                  'font-color': 'red',
                                                  'element-color': 'green',
                                                  'fill': 'yellow'
                                                },
                                                'end':{
                                                    'class': 'end-element'
                                                }
                                            },
                                            // even flowstate support ;-)
                                            'flowstate' : {
                                                // 'past' : { 'fill' : '#CCCCCC', 'font-size' : 12},
                                                // 'current' : {'fill' : 'yellow', 'font-color' : 'red', 'font-weight' : 'bold'},
                                                // 'future' : { 'fill' : '#FFFF99'},
                                                'request' : { 'fill' : 'blue'}//,
                                                // 'invalid': {'fill' : '#444444'},
                                                // 'approved' : { 'fill' : '#58C4A3', 'font-size' : 12, 'yes-text' : 'APPROVED', 'no-text' : 'n/a' },
                                                // 'rejected' : { 'fill' : '#C45879', 'font-size' : 12, 'yes-text' : 'n/a', 'no-text' : 'REJECTED' }
                                              }
                                          };
return(
<Flowchart chartCode={code} options={opt} />
);
}
```

## License

MIT
