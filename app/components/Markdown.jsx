var React = require('react');
var MarkdownForm = require('MarkdownForm');
var MarkdownOutput = require('MarkdownOutput');



var Markdown = React.createClass({
  render: function(){
    return (
      <div className = "container row">
          <MarkdownOutput/>
          <MarkdownForm/>
      </div>
    );
  }
});

module.exports = Markdown;
