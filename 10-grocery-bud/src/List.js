import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ items,removeItem,EditItem}) => {

  return items.map(( item) => {
  
    return (
      <div className="grocery-item" key={item.id}>
        <p className="title">{item.title}</p>
        <div className="btn-container">
          <FaEdit className="edit-btn" onClick={()=>EditItem(item)}/>
          <FaTrash className="delete-btn" onClick={() => removeItem(item.id)} />
        </div>
      </div>
    );
  });
}

export default List
