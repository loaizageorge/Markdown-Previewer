var React = require ('react');
var MarkdownForm = require('MarkdownForm');
var MarkdownOutput = require('MarkdownOutput');

var render = new marked.Renderer();

var Markdown = React.createClass({

  getInitialState: function(){
    return {
    text:'## Markdown Previewer'
    };
  },
  handleNewData: function(newText){
    this.setState({
      text: newText
    });
  },
  translate: function(){
    var input = this.state.text;
    var markdown = marked(input);
    return markdown;
  },
  render: function(){
    var text = this.state.text;
    var markdown = this.translate();
    return (
      <div className = "container row">
        <MarkdownOutput output = {markdown} />
        <MarkdownForm onNewData = {this.handleNewData} text = {text}/>
      </div>
    );
  }
});

module.exports = Markdown;
