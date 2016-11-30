var React = require('react');

var MarkdownForm = React.createClass({
  handleTyping: function(){
    var input = document.getElementById('input').value;
    var markdown = marked(input);
    document.getElementById('output').innerHTML = markdown;
    console.log(markdown);
  },
  render: function(){
    return(
      <div>
        <h2>MarkdownForm</h2>
        <textarea id = "input" rows = "4" columns = "50" placeholder = "Enter github flavoured markdown" onKeyUp = {this.handleTyping}></textarea>
      </div>
    );
  }
});

module.exports = MarkdownForm;
