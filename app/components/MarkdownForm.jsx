var React = require('react');

var MarkdownForm = React.createClass({
  handleTyping: function(){
    var input = document.getElementById('input').value;
    this.props.onNewData(input);
  },
  render: function(){

    //this.props.handleNewData(this.props.text);
    return(
      <div className = "small-12 medium-6 columns">
        <textarea value = {this.props.text} id = "input" rows = "2" columns = "25" onChange = {this.handleTyping}></textarea>
      </div>
    );

  }

});

module.exports = MarkdownForm;
