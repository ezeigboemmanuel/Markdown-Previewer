import './App.css';
import React from "react"
import { marked } from 'marked'

function App() {
  const [text, setText] = React.useState("# Markdown Previewer by Ezeigbo Emmanuel \n ## FreeCodeCamp Project \n [Ezeigbo Emmanuel](https://ezeigboemmanuel.vercel.app) \n \n Here is some code, `<div></div>`, between 2 backticks. \n ```function anotherExample(firstLine,lastLine){if () {return multiLineCode;}}``` \n - And of course there are lists. \n - Some are bulleted. \n - With different indentation levels. \n - That look like this. \n \n **Text that is bold** \n \n ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)");
  function handleChange(e){
    setText(e.target.value);
  }
  return (
    <div className="App">
      <div className='markdown-editor'>
        <h4>&#9998; Markdown editor</h4>
        <textarea id="editor" onChange = {handleChange} value = {text}>
        </textarea>
      </div>
      <div className='markdown-previewer'>
        <h4>&#9989; Markdown previewer</h4>
          <div id = "preview" dangerouslySetInnerHTML = {{ __html: marked.parse(text) }} />
      </div>
      <div className='footer'>
        <p className='footer_text'>Made by <a href = "https://github.com/ezeigboemmanuel" target= "_blank">Ezeigbo Emmanuel</a></p>
      </div>
    </div>
  );
}

export default App;
