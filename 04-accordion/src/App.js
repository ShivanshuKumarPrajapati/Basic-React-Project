import React, { useState } from 'react';
import data from './data';
import Question from './Question';
import SingleQuestion from './Question';
function App() {
  
  const handleClick = (() => {
    console.log('hello');
  });
  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <section className="info">
        {
          data.map((singleQues) => {

          return (
            <SingleQuestion
              key={singleQues.id}
              {...singleQues}
              handleClick={handleClick}
            />
          );
          })
        }
        </section>
      </div>
    </main>
  );
}

export default App;
