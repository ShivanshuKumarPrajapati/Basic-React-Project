import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [category, setCategory] = useState("all");
  function handleClick(catgry)
  {
    setCategory(catgry)
  }
  return (
    <div className="menu">
      <section className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </section>
      <Menu handleClick={handleClick}></Menu>
      <Categories category={category} items={items} />
    </div>
  );
}

export default App;
