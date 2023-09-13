import React, { useState, useEffect } from "react";
import "./admin.css";
import CategoriAdmin from "./CategoriAdmin";
import ProductAdmin from "./ProductAdmin";
import AddProductAdmin from "./AddProductAdmin";
import OrderAdmin from "./OrderAdmin";
import TaskAdmin from "./TaskAdmin";
import { LoadingOverlay } from "@mantine/core";

function Admin() {
  const [selectedCategory, setSelectedCategory] = useState("products");
  const [admin, setAdmin] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const [objUpdate, setObjUpdate] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/authenAdmin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Beaer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      setAdmin(res.status);
    });
  }, []);
  useEffect(() => {
    if (admin == 201) {
      window.location.href = "/";
    }
  }, [admin]);
  return (
    <>
      {admin == 200 ? (
        <>
          <div className="adminCss">
            <CategoriAdmin onCategoryClick={handleCategoryClick} />
            {selectedCategory === "products" && (
              <ProductAdmin tada={setObjUpdate} />
            )}
            {selectedCategory === "addProduct" && (
              <AddProductAdmin obj={objUpdate} setObj={setObjUpdate} />
            )}
            {selectedCategory === "order" && <OrderAdmin />}
            {selectedCategory === "categories" && <TaskAdmin />}
          </div>
          ;
        </>
      ) : (
        ""
      )}
      {admin == 201 ? (
        <LoadingOverlay
          overlayBlur={2}
          visible
          loaderProps={{ color: "red", variant: "oval" }}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default Admin;
