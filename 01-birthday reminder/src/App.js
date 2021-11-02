import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [containerList, setContainerList] = useState(data);
  return (
    <main className="section">
      <div className="container">
        <h3>{containerList.length} birthdays today</h3>
        {containerList.map((person) => {
          return <List id={person.id} {...person} />;
        })}
        <button className="btn" onClick={() => setContainerList([])}>
          Clear all
        </button>
      </div>
    </main>
  ); 
}

export default App;
