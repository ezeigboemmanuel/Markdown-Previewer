import './App.css';
import React from "react"
import { marked } from 'marked'

function App() {
  const [text, setText] = React.useState("");
  function handleChange(e){
    setText(marked.parse(e.target.value));
  }
  return (
    <div className="App">
      <h1>MARKDOWN PREVIEWER</h1>
      <div>
        <textarea id="editor" onChange = {handleChange}>

        </textarea>
      </div>
      <div id = "preview">
          {text}
      </div>
    </div>
  );
}

export default App;
