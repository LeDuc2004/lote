import React from "react";
import "./admin.css";
import CategoriAdmin from "./CategoriAdmin";
import ProductAdmin from "./ProductAdmin";
function Admin() {
  return (
    <>
      <div className="adminCss">
        <CategoriAdmin />
        <ProductAdmin />
      </div>
      ;
    </>
  );
}

export default Admin;
