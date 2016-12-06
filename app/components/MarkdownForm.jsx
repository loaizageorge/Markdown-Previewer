var React = require('react');

var MarkdownForm = React.createClass({
  handleTyping: function(){
    var input = document.getElementById('input').value;
    this.props.onNewData(input);
  },
  render: function(){

    //this.props.handleNewData(this.props.text);
    return(
      <div className = "col-xs-12 col-sm-12 col-md-6">
        <textarea value = {this.props.text} id = "input" rows = "10" columns = "2" onChange = {this.handleTyping}></textarea>
      </div>
    );

  }

});

module.exports = MarkdownForm;
