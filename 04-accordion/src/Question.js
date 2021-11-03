import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (props, handleClick) => {
  
  const [toggle,setToggle]=useState(false)
  return (
    <div className="question">
      <header>
        <h4>{props.title} </h4>
        <button onClick={() => setToggle(!toggle)} className="btn">
          {toggle ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{toggle ? props.info : ""}</p>
    </div>
  );
};

export default Question;
