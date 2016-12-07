import React, { Component } from 'react';
import InputField from './components/input-field';
import marked from 'marked';
import './App.css';

const syntaxtLink = "For basic writing and formatting syntax visit https://help.github.com/articles/basic-writing-and-formatting-syntax/"
const headingExamples = "\n\n# the The largest heading\n## The second largest heading\n###### The smallest heading"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userInput: `${syntaxtLink}${headingExamples}`
    }
    this.onTextInput = this.onTextInput.bind(this);
    this.createMarkup = this.createMarkup.bind(this);
  }
  onTextInput(e){
    this.setState({userInput: e.target.value})
  }
  createMarkup(){
    return {__html: marked(this.state.userInput)}
  }
  render() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });
    return (
     <div className="container">
      <InputField 
      handleChange={this.onTextInput} 
      textInput={this.state.userInput}
      />
      <div 
      className="previewer" 
      dangerouslySetInnerHTML={this.createMarkup()}
      />
      </div>
    )
  }
}
export default App;
