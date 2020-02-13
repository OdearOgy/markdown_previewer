import React, { useState, useEffect } from 'react'
import {Remarkable} from 'remarkable';
import './Previewer.css';

function Previewer() {

  
  const [input, setInput] = useState('# Hello, World!');
  const [output, setOutput] = useState('');
  
  useEffect(() => {
    const md = new Remarkable('full');
    setOutput(md.render(input));
  }, [input])

  return (
    <div className="previewer">
      <textarea
        className="prw__editor"
        id="editor"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        name="mdInput"
      />

      <div 
        className="prw__preview"
        id="preview"
        dangerouslySetInnerHTML={{ __html: output }}
      />      
    </div>
  )
}


export default Previewer;
