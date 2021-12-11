import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ items }) => {
  console.log(items);
  return (
  <div className='grocery-container'>
      {
        items.map((item) => {
          return (
          <div className="grocery-item" key={item.id}>
              <p className='title'>{item.title}</p>
              <div className="btn-container">
            <FaEdit className="edit-btn" />
            <FaTrash className="delete-btn"/>
              </div>
          </div>
          )
        })
        }
    <button className="clear-btn" >Clear Item</button>
  </div>
  )
}

export default List
