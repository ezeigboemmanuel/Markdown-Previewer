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
      <h1>MARKDOWN EDITOR</h1>
      <div>
        <textarea id="editor" onChange = {handleChange} value = {text}>
        </textarea>
      </div>
      <div id = "preview">
          <div dangerouslySetInnerHTML = {{ __html: marked.parse(text) }} />
      </div>
    </div>
  );
}

export default App;
