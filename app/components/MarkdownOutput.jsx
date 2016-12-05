var React = require('react');

var MarkdownOutput = React.createClass({
  render: function(){
    return(
      <div className = "small-12 medium-6 columns callout" id= "output"></div>
    );
  }
});

module.exports = MarkdownOutput;
