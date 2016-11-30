var React = require('react');
var ReactDOM = require('react-dom');

var Markdown = require('Markdown');

//Load foundation

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Markdown/>,
  document.getElementById('app')
);
