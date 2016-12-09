var React = require('react');

var MarkdownOutput = React.createClass({
  render: function(){
    var output = this.props.output;
    return(
      <div id = "output">
        <span dangerouslySetInnerHTML = {{__html: output}}></span>
      </div>
    );

  }

});

module.exports = MarkdownOutput;
