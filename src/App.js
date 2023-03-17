import './App.css';
import React from "react"

function App() {
  const [text, setText] = React.useState("");
  function handleChange(e){
    setText(e.target.value);
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
