var React = require('react');
var ReactDOM = require('react-dom');
var Markdown = require('Markdown');

import 'bootstrap/dist/css/bootstrap.min.css';
//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Markdown/>,
  document.getElementById('app')
);
