import React from 'react';

const Menu = ({ handleClick }) => {
  //here dynamic approach is possible by taking array of category and displaying list of btn by itr over it.
  return (
    <div>
      <ul className="btn-container">
        <button className="filter-btn" onClick={() => handleClick("all")}>
          All
        </button>
        <button className="filter-btn" onClick={() => handleClick("breakfast")}>
          Breakfast
        </button>
        <button className="filter-btn" onClick={() => handleClick("lunch")}>
          Lunch
        </button>
        <button className="filter-btn" onClick={() => handleClick("shakes")}>
          Shakes
        </button>
      </ul>
    </div>
  );
};

export default Menu;
