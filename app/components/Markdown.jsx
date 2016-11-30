var React = require('react');
var MarkdownForm = require('MarkdownForm');
var MarkdownOutput = require('MarkdownOutput');

var Markdown = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Markdown Previewer</h1>
        <MarkdownForm/>
        <MarkdownOutput/>
      </div>
    );
  }
});

module.exports = Markdown;
