var React = require ('react');
var MarkdownForm = require('MarkdownForm');
var MarkdownOutput = require('MarkdownOutput');

var Markdown = React.createClass({

  getInitialState: function(){
    return {
    text:'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[George Loaiza](https://github.com/xchendo/Markdown-Previewer)*'
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
    var output = this.translate();
    return (
      <div>
        <div className = "app-title">
            <h1 className = "align">  Markdown Previewer <i className="devicon-react-original colored align"></i>  </h1>
         </div>
         <div className = "container">
           <div className = "markdown-container">
             <div className = "row">
               <div className = "col-md-6">
                  <h2 className = "title">Output</h2>
                  <MarkdownOutput output = {output}/>
               </div>
               <div className = "col-md-6">
                 <h2 className = "title">Input</h2>
                 <MarkdownForm onNewData = {this.handleNewData} text = {text}/>
               </div>
             </div>
           </div>
         </div>
      </div>
      /*<div className = "container markdown-container">
        <div className = "row">
        <MarkdownOutput output = {markdown} />
        <MarkdownForm onNewData = {this.handleNewData} text = {text}/>
        </div>
      </div> */
    );
  }
});

module.exports = Markdown;
