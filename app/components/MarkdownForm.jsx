var React = require('react');

var MarkdownForm = React.createClass({
  handleTyping: function(){
    console.log('called');
    var input = document.getElementById('input').value;
    var markdown = marked(input);
    document.getElementById('output').innerHTML = markdown;
    //this.props.handleNewData(input);
  },
  render: function(){
    //this.props.handleNewData(this.props.text);
    return(
      <div className = "small-12 medium-6 columns">
        <textarea value = "# Markdown Previewer" id = "input" rows = "2" columns = "25" onChange = {this.handleTyping}></textarea>
      </div>
    );

  }

});

module.exports = MarkdownForm;
