import React from "react";
import Tour from "./Tour";
const Tours = ({ tourList ,fetchList}) => {
  const [item, setItem] = React.useState(tourList);
  const handleClick = (id) => {
    const remainingItem = item.filter((place) => {
      return place.id != id;
    });
    setItem(remainingItem);
  };
  const handleRefresh = (() => {
    fetchList();
  })
  const len = item.length;
  if (len == 0)
  {
    return <div className="title">
      <h2>No Tours left</h2>
      <button className="btn" onClick={()=>handleRefresh()}>Refresh</button>
    </div>
    }
  return (
    <div>
      <div className="title">
      <h2 >Our Tours</h2>
<div className="underline"></div>
      </div>
      {item.map((item) => {
        return (
          <ul>
            <li key={item.id} >
              <Tour item={item} handleClick={handleClick}></Tour>
              
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Tours;
