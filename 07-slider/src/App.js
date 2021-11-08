import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [id, setId] = useState(1);
  const [people, setPeople] = useState(data);
  const handlePrev = () => {
    if (id == 1)
      setId(people.length);
    else
      setId(id - 1);
  }
  const handleNext = () => {
    if (id == people.length)
      setId(1);
    else
      setId(id + 1);
  }
  const handleAuto = () => {
    setInterval(() => {
      setId((id) => {
        if (id == people.length)
          return 1;
        else
          return id + 1;
    })
    }, 5000)
  }
  useEffect(() => {
    handleAuto();
  }, [])
  return (
    <div className="section">
      <div className="title">
        <h1>Reviews</h1>
        <div className="underline"></div>
      </div>
      <div className="section-center">
        {people
          .filter((person) => person.id == id)
          .map((filterItem) => {
            return (
              <article key={filterItem.id} >
                <img
                  src={filterItem.image}
                  className="person-img"
                />
                <h4>{filterItem.name}</h4>
                <p className="title">{filterItem.title}</p>
                <p className="text">{filterItem.quote}</p>
                <FaQuoteRight className="icon"></FaQuoteRight>
              </article>
            );
          })}
        <button className="prev" onClick={() => handlePrev()}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => handleNext()}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}
export default App;
