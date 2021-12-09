import React, { useState } from 'react';
import data from './data';
function App() {
  const [value, setValue] = useState(0);
  // const [index, setIndex] = useState(0);
  const [para,setPara]=useState([])
  const handleClick = (e) => {
    e.preventDefault();
    // setIndex(value);
    console.log(value);
    setPara(data.filter((paragraph, index) => {
      if (index < value)
        return paragraph;
     }))
  }
  const handleChange = (e) => {
    setValue( e.target.value);
  }
  return (
    <div className="section-center">
      <h3 className="section-center">TIRED OF BORING LOREM IPSUM?</h3>
        <form className="lorem-form">
          <label htmlFor="quantity">Paragraphs:</label>
          <input type="number" min="0" max="11" onChange={handleChange} value={value} />
          <button className="btn" onClick={handleClick}>
            Generate
          </button>
        </form>
        <article className="lorem-text">
        {
          para.map((text) => {
            return <p>{text}</p>
          })
         }
        </article>
    </div>
  );
  
}

export default App;
