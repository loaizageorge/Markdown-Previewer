var React = require('react');

var MarkdownOutput = React.createClass({
  render: function(){
    var output = this.props.output;
    return(
      <div className = "col-sm-6 col-md-6" dangerouslySetInnerHTML = {{__html: output}} id = "output">
      </div>
    );

  }

});

module.exports = MarkdownOutput;
