var React = require('react');

var MarkdownForm = React.createClass({
  handleTyping: function(){
    var input = document.getElementById('input').value;
    this.props.onNewData(input);
  },
  render: function(){

    //this.props.handleNewData(this.props.text);
    return(
      <div>
        <textarea value = {this.props.text} id = "input" rows = "15" onChange = {this.handleTyping}></textarea>
      </div>
    );

  }

});

module.exports = MarkdownForm;
