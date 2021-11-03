import React from 'react';

const Menu = ({ handleClick }) => {
  
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
