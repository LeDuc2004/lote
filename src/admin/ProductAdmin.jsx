import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function ProductAdmin() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Lấy dữ liệu từ API hoặc dữ liệu JSON của bạn cho fastfood và drinks
    const fetchData = async () => {
      try {
        // Lấy dữ liệu từ JSON Server cho products
        const productsResponse = await axios.get(
          "http://localhost:3000/products"
        );
        const productsData = productsResponse.data;

        // Cập nhật state với dữ liệu từ JSON Server
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const addDrinksAndFastFoodToProducts = async () => {
    try {
      // Lấy dữ liệu từ JSON Server cho drinks và fastfood
      const drinksResponse = await axios.get("http://localhost:3000/drinks");
      const fastfoodResponse = await axios.get(
        "http://localhost:3000/fastfood"
      );
      const drinksData = drinksResponse.data;
      const fastfoodData = fastfoodResponse.data;

      // Kết hợp dữ liệu từ drinks và fastfood vào mảng products
      const combinedData = [...products, ...drinksData, ...fastfoodData];

      // Cập nhật state với mảng products mới
      setProducts(combinedData);
    } catch (error) {
      console.error("Error fetching drinks and fastfood data:", error);
    }
  };

  return (
    <div className="renderDataDasboard">
      <table>
        <thead>
          <tr
            style={{
              backgroundColor: "black",
              height: "40px",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <th> #</th>
            <th> Name </th>
            <th> Image </th>
            <th>Price </th>
            <th> Type</th>
            <th>Detail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <>
            {products.map((e, i) => (
              <tr style={{ textAlign: "center" }} key={e.id}>
                <td className="idAdmin"> {i} </td>
                <td className="nameAdmin"> {e.name} </td>
                <td className="imageAdmin">
                  <img style={{ width: "50px" }} src={e.img} alt="" />
                </td>
                <td className="priceAdmin"> {e.price} </td>
                <td> {e.type}</td>
                <td className="detailAdmin"> {e.detail} </td>
                <td className="actionAdmin">
                  <ul style={{ padding: "5px 0px 0px 0px" }}>
                    <li className="editProductAdmin"> Sửa </li>
                    <li className="deleteProductAdmin"> Xóa</li>
                  </ul>
                </td>
              </tr>
            ))}
          </>
        </tbody>
      </table>
    </div>
  );
}

export default ProductAdmin;
