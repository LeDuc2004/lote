import React from "react";

function CategoriAdmin({ onCategoryClick }) {
  return (
    <div className="categoriesAdmin">
      <ul>
        <li onClick={() => onCategoryClick("products")}> Products </li>
        <li onClick={() => onCategoryClick("addProduct")}> Add Product </li>
        <li onClick={() => onCategoryClick("categories")}> Categories</li>
        <li onClick={() => onCategoryClick("order")}>Order </li>
        <li onClick={() => onCategoryClick("logout")}>Log out </li>
      </ul>
    </div>
  );
}

export default CategoriAdmin;
