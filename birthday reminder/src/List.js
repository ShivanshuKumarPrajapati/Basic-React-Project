import React from 'react';

const List = (props) => {
  return (
    <>
      <ul>
        <li className="person">
          <img src={props.image} alt={props.name} />
          <div>
            <h4>{props.name}</h4>
            <p>{props.age} yrs</p>
          </div>
        </li>
      </ul>
    </>
  );
};

export default List;
