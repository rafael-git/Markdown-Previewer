import { useState } from 'react';
import { marked } from 'marked';
import './App.css';


// a header (H1 size), a sub header (H2 size), a link, inline code, 
// a code block, a list item, a blockquote, an image, and bolded text

function App() {



  const [text, setText] = useState(`
  # H1
  ## H2
  [Code By Rafael Monteagudo](https://github.com/)
  \`<div id="code-here">CODE</div>\`
  \`\`\`
  {
    "firstName": "Rafael",
    "lastName": "Monteagudo",
    "age": 35
  }
  \`\`\`
- First item
- Second item
- Third item
> My Blockquote
![Should be an image here!](image.jpg)
**Bolded Text**

  `);

  marked.setOptions({
    breaks: true,
  })
  return (
    <div className="App">
      <textarea id='editor' onChange={(event) => { setText(event.target.value) }} value={text}></textarea>
      <div 
        id='preview'
        dangerouslySetInnerHTML={{
          __html: marked(text),
        }}
      ></div>
    </div>
  );
}

export default App;
