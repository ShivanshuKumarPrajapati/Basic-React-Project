import React, { useState } from "react";
//if tourlist is directly passed as a fxn para,eter then it will behaves like a obj
//While in this case "tourList " contain the array
const Tour = ({ item, handleClick }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={item.image} alt={item.name} />
      <footer>
        <div>
          <h4>{item.name}</h4>
          <h4 className="tour-price">${item.price}</h4>
          <p>
            {readMore ? item.info : `${item.info.substring(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "show less" : "read more"}
            </button>
          </p>
          <button
            className="btn delete-btn"
            onClick={() => handleClick(item.id)}
          >
            Not Interested
          </button>
        </div>
      </footer>
    </article>
  );
};

export default Tour;
