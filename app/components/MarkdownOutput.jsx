var React = require('react');

var MarkdownOutput = React.createClass({
  render: function(){
    var output = this.props.output;
    return(

      <div dangerouslySetInnerHTML = {{__html: output}} className = "small-12 medium-6 columns callout" id = "output">
      </div>
    );

  }

});

module.exports = MarkdownOutput;
