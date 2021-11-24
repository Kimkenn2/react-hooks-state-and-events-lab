import React, {useState} from "react";


function Item({ name, category }) {
  const [cartToggle, setCartToggle] = useState(false)
  const inCartClass = cartToggle ? "in-cart" : ""
  return (
    <li className={inCartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" 
      onClick={() => setCartToggle(!cartToggle)}>{cartToggle ? "In Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
