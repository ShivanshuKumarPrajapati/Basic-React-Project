import React from 'react';

const Categories = ({ items, category }) => {

  let filterItem;
 function filterCatgry(category)
  {
   filterItem =  items.filter((item) => {
      return (
        item.category === category
      );
    })
  }
  console.log(filterItem);
  if (category === "all")
  {
    
    return (
      <div className="section-center ">
        {
          items.map((item) => {
            return (
              <article key={item} className="menu-item">
                <img src={item.img} alt={item.title} className="photo" />
                <div className="item-info">
                <header>
                  <h4>{item.title}</h4>
                  <span className="price">${item.price}</span>
                </header>
                <p className="item-text">{item.desc}</p>
                </div>
              </article>
            );
          })
        }
    </div>
  )
  }
};

export default Categories;
