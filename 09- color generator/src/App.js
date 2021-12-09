import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const[list,setList]=useState(new Values('#f15025').all(10))

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(input).all(10);
      setList(colors);
    }
    catch (error)
    {
      setError(true)
      console.log(error);
    }
  }
  const handleChange =(e) =>{
    setInput(e.target.value);
  }
  return (
    <div className="section">
      <section className="container">
        <h3>Color Generator</h3>
        <form>
          <input
            type="text"
            onChange={handleChange}
            placeholder="#f15025"
            value={input}
            className={`${error?'error':null}`}
          />
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
  return <SingleColor key={index} {...color} index={index}/>
})}
      </section>
    </div>
  );
}

export default App
