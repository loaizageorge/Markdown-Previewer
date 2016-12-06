var React = require('react');

var MarkdownOutput = React.createClass({
  render: function(){
    var output = this.props.output;
    return(
      <div className = "col-xs-12 col-sm-12 col-md-6"  id = "output">
        <span dangerouslySetInnerHTML = {{__html: output}}></span>
      </div>
    );

  }

});

module.exports = MarkdownOutput;
